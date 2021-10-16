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
      :to="`/articles/${article._id}?title=${article.name}`"
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

<style scoped>
:deep(.content) pre {
  background: #f0f0f0;
  border: 1px solid #ccc;
  color: #333;
  font-size: 12px;
  margin: 8px 0;
  padding: 8px;
  border-radius: 4px;
}
:deep(.content) .ql-size-small {
  font-size: 12px;
}
:deep(.content) .ql-size-large {
  font-size: 18px;
}
:deep(.content) .ql-size-huge {
  font-size: 20px;
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
</style>
