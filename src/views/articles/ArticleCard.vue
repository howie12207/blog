<script setup>
import { toDateFormat } from "@/utils/format.js";

import IconChevron from "@/components/icon/IconChevron.vue";

defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <article
    class="
      text-xs
      lg:text-sm
      shadow-xl
      bg-red-50
      rounded
      p-4
      mt-4
      mb-12
      dark:bg-yellow-900 dark:text-red-200
    "
  >
    <div class="text-right text-xs mb-2">
      {{ toDateFormat(article.createTime) }}
    </div>
    <div class="text-xl mb-2 text-red-700 font-black dark:text-red-400">
      {{ article.name }}
    </div>
    <div
      class="content overflow-hidden overflow-ellipsis max-h-40"
      v-html="article.content"
    ></div>
    <router-link
      :to="`/articles/${article._id}`"
      class="
        flex
        items-center
        text-red-400 text-right
        underline
        my-1
        ml-auto
        w-max
        group
      "
      >READ MORE<IconChevron
        :size="14"
        class="ml-1 group-hover:animate-bounce"
        direction="right"
    /></router-link>
    <div class="text-gray-500 text-xs dark:text-gray-300">
      <span v-for="(item, index) in article.sorts" :key="index" class="mr-2"
        >#{{ item }}</span
      >
    </div>
  </article>
</template>
