import { Plugin } from '@nuxt/types'
import { Message } from 'element-ui'

declare module 'vue/types/vue' {
  interface Vue {
    $req(url: string, method: string, params?: any, loading?: boolean): any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $req(url: string, method: string, params?: any, loading?: boolean): any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $req(url: string, method: string, params?: any, loading?: boolean): any
  }
}

const requestModules: Plugin = (
  { $axios, app, store, redirect }: any,
  inject: any
) => {
  let isLoading = false
  let start: number
  let end: number

  $axios.defaults.timeout = 12000

  $axios.onRequest((config: any) => {
    start = new Date().getTime()
    // token setting
    const access = app.$cookies.get('access')
    if (access) {
      config.headers['X-Auth-Token'] = access
    }
    return config
  })

  $axios.onResponse((response: any) => {
    // close loading
    if (isLoading) {
      store.commit('SET_PAGE_LOADING', false)
      isLoading = false
    }
    end = new Date().getTime()
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line */
      console.log(
        response.config.url + ' - %cSpeed: ' + (end - start) + 'ms',
        'color:white;background:#39f;padding: 2px 0.5em;'
      )
    }
    if (response?.data?.code !== 200 && response?.data?.message) {
      ;(Message as any).closeAll()
      Message({
        showClose: true,
        message: response.data.message,
        type: 'error',
      })
      return Promise.resolve(false)
    }
    if (response?.data?.code === 401) {
      app.$cookies.remove('access')
      if (process.client) {
        window.location.href = '/'
      } else {
        redirect('/')
      }
      return Promise.resolve(false)
    }
  })

  $axios.onError((error: any) => {
    // close loading
    if (isLoading) {
      store.commit('SET_PAGE_LOADING', false)
      isLoading = false
    }
    // error handle
    /* eslint-disable-next-line */
    console.error('Axios onError: ', error)
    if (error?.response?.status === 401) {
      app.$cookies.remove('access')
      if (process.client) {
        window.location.href = '/'
      } else {
        redirect('/')
      }
    } else if (
      error?.response?.status === 500 &&
      error?.response?.data?.message
    ) {
      ;(Message as any).closeAll()
      Message({
        showClose: true,
        message: error.response.data.message,
        type: 'error',
      })
    }
    return Promise.resolve(false)
  })

  const axiosMethods = function (
    url: string,
    method: string,
    params?: any,
    loading?: boolean
  ) {
    method = method.toLowerCase()

    if (loading && process.client) {
      store.commit('SET_PAGE_LOADING', true)
      isLoading = true
    }

    const axios: any = {
      get() {
        return $axios.$get(url, { params })
      },
      post() {
        return $axios.$post(url, params)
      },
      put() {
        return $axios.$put(url, params)
      },
      delete() {
        return $axios.$delete(url, params)
      },
    }

    return axios[method]()
  }

  const req = function (
    url: string,
    method: string,
    params?: any,
    loading?: boolean
  ) {
    return axiosMethods(app.$config.BASE_URL + url, method, params, loading)
  }

  inject('req', req)
}

export default requestModules
