<template>
  <LazyPageBackstageManageSort
    class="flex-grow"
    :sort-list="sortList"
    @createSort="createSort"
    @fetchSortList="fetchSortList"
    @deleteSort="deleteSort"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ManageSort',
  layout: 'backstage',
  async asyncData({ store }) {
    const res = await store.dispatch('sort/FETCH_SORTS')
    return {
      sortList: res,
    }
  },
  data() {
    return {
      sortList: [],
    }
  },
  methods: {
    async createSort(params: object) {
      await this.$store.dispatch('sort/CREATE_SORT', params)
      this.fetchSortList()
    },
    async fetchSortList() {
      const res = await this.$store.dispatch('sort/FETCH_SORTS')
      this.sortList = res
    },
    async deleteSort(id: string) {
      await this.$store.dispatch('sort/DELETE_SORT', id)
      await this.fetchSortList()
    },
  },
})
</script>
