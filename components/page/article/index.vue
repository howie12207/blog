<template>
  <div
    class="article mx-4 p-4 lg:p-10 mt-4 bg-red-50 rounded shadow dark:bg-yellow-900 dark:text-red-200"
  >
    <CommonBreadcrumbs class="mb-4" :nav="nav" />
    <div class="lg:flex justify-between text-xs text-gray-500">
      <p>
        建立時間：
        {{ $format.toDateTime(article.createTime) }}
      </p>
      <p>
        最近一次更新時間：
        {{ $format.toDateTime(article.updateTime) }}
      </p>
    </div>
    <div class="text-3xl my-8 text-red-700 font-black dark:text-red-400">
      {{ article.name }}
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="content" v-html="article.content"></div>
    <div class="mt-12 text-yellow-700">
      <span v-for="(item, index) in article.sorts" :key="index" class="mr-2"
        >#{{ item }}</span
      >
    </div>
    <div
      class="text-3xl my-4 py-4 font-bold border-solid border-t-4 border-b-4 border-light-blue-500 dark:border-yellow-700"
    >
      留言區
    </div>
    <div
      v-for="(comment, index) of comments"
      :key="index"
      class="p-4 my-4 bg-red-100 rounded shadow"
    >
      <p class="text-gray-500 font-bold">
        {{ comment.account }}
        <span class="text-xs text-gray-400"
          >({{ $format.toDateTime(comment.createTime) }})</span
        >
      </p>
      <p class="comment_content text-sm">{{ comment.content }}</p>
    </div>
    <textarea
      v-model="commentText"
      placeholder="請輸入留言內容"
      class="p-4 w-full focus:outline-none shadow focus:ring-1 bg-gray-200 rounded resize-none transition-shadow dark:bg-gray-700"
      rows="10"
    />
    <div class="text-right">
      <span class="btn btn-primary" @click="createComment">送出</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticlePage',
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
    comments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      commentText: '',
    }
  },
  computed: {
    nav(): object[] {
      return [
        { title: '首頁', route: '/' },
        { title: (this as any).article?.name, route: '' },
      ]
    },
  },
  methods: {
    createComment() {
      if (!this.$store.state.user.login) this.$message.error('請先登入')
      else if (!this.commentText.trim()) this.$message.error('請填寫內容')
      else {
        const params = {
          createTime: Date.now(),
          account: this.$store.state.user?.info?.account,
          content: this.commentText,
          articleId: this.$route.params.article,
        }
        this.$emit('createComment', params)
      }
    },
    clear() {
      this.commentText = ''
    },
  },
})
</script>

<style lang="scss" scoped>
.comment_content {
  text-indent: 2rem;
}
</style>
