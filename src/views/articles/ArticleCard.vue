<script setup>
import { toDateFormat } from "@/utils/format.js";

import IconChevron from "@/components/icon/IconChevron.vue";
import SortsBox from "@/components/pages/sortsBox/SortsBox.vue";

defineProps({
  article: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <article
    class="text-xs lg:text-sm shadow-xl bg-red-50 rounded p-4 overflow-hidden"
  >
    <div class="text-right text-xs mb-2">
      {{ toDateFormat(article.createTime) }}
    </div>
    <div class="text-xl mb-2 text-red-700 font-black">
      {{ article.name }}
    </div>
    <div
      class="content overflow-hidden overflow-ellipsis line-clamp-6"
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
    <SortsBox :tags="article.sorts" />
  </article>
</template>
