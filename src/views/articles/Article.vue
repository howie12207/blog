<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchArticle } from "@/api/article";
import { toDateFormat } from "@/utils/format.js";

const route = useRoute();
const article = ref({});

onMounted(async () => {
  await getArticle();
});

const getArticle = async () => {
  article.value = await fetchArticle(route.params.id);
};
</script>

<template>
  <div
    class="
      article
      xl:w-xl xl:mx-auto
      mx-4
      p-4
      lg:p-10
      mb-4
      bg-red-50
      rounded
      shadow
      dark:bg-yellow-900 dark:text-red-200
    "
  >
    <div class="lg:flex justify-between text-xs text-gray-500">
      <p>
        建立時間：
        {{ toDateFormat(article.createTime) }}
      </p>
      <p>
        最近一次更新時間：
        {{ toDateFormat(article.updateTime) }}
      </p>
    </div>
    <div class="text-3xl my-8 text-red-700 font-black dark:text-red-400">
      {{ article.name }}
    </div>
    <div class="content" v-html="article.content"></div>
    <div class="mt-12 text-yellow-700">
      <span v-for="(item, index) in article.sorts" :key="index" class="mr-2"
        >#{{ item }}</span
      >
    </div>
    <!-- <div
      class="
        text-3xl
        my-4
        py-4
        font-bold
        border-solid border-t-4 border-b-4 border-light-blue-500
        dark:border-yellow-700
      "
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
          >({{ toDateFormat(comment.createTime) }})</span
        >
      </p>
      <p class="comment_content text-sm">{{ comment.content }}</p>
    </div>
    <textarea
      v-model="commentText"
      placeholder="請輸入留言內容"
      class="
        p-4
        w-full
        focus:outline-none
        shadow
        focus:ring-1
        bg-gray-200
        rounded
        resize-none
        transition-shadow
        dark:bg-gray-700
      "
      rows="10"
    ></textarea>
    <div class="text-right">
      <span class="btn btn-primary" @click="createComment">送出</span>
    </div> -->
  </div>
</template>

<style scoped>
:deep(.content) pre {
  background: #f0f0f0;
  border: 1px solid #ccc;
  color: #333;
  display: block;
  font-size: 12px;
  margin: 8px 0;
  max-height: 400px;
  overflow: auto;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
}
:deep(.content) .ql-size-small {
  font-size: 12px;
}
:deep(.content) .ql-size-large {
  font-size: 24px;
}
:deep(.content) .ql-size-huge {
  font-size: 40px;
}

:deep(.content) .ql-align-left {
  text-align: left;
}
:deep(.content) .ql-align-center {
  text-align: center;
}
:deep(.content) .ql-align-right {
  text-align: right;
}
:deep(.content) .ql-align-justify {
  text-align: justify;
}

:deep(.content) ol {
  padding-left: 2rem;
  list-style-type: decimal;
}
:deep(.content) ul {
  padding-left: 2rem;
  list-style-type: disc;
}

:deep(.content) .ql-indent-1 {
  text-indent: 2rem;
}

:deep(.content) .ql-indent-2 {
  text-indent: 4rem;
}
:deep(.content) .ql-indent-3 {
  text-indent: 6rem;
}
:deep(.content) .ql-indent-4 {
  text-indent: 8rem;
}

:deep(.content) a {
  @apply text-blue-500;
  text-decoration: underline;
}

.comment_content {
  text-indent: 2rem;
}
</style>
