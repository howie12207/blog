<script setup>
import { ref, onMounted } from "vue";

// import latestPosts from "@/assets/articles.json";
import SortsBox from "@/components/layouts/sortsBox/SortsBox.vue";
import IconChevron from "@/components/icon/IconChevron.vue";

import { fetchArticles } from "@/api/article.js";
import { toDateFormat } from "@/utils/format.js";

onMounted(() => {
  getArticles();
});
const latestPosts = ref([]);

const getArticles = async () => {
  const res = (await fetchArticles({ page: 0, size: 6 })) || {};
  latestPosts.value = res.content;
};

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div>
    <h1 class="decoration font-black text-3xl mb-8">Latest Posts</h1>
    <div
      class="
        md:flex
        mb-8
        border
        rounded
        overflow-hidden
        transition-all
        hover:shadow
      "
      v-for="(recent, index) of latestPosts"
      :key="recent.id"
    >
      <!-- 圖片 -->
      <img
        class="md:w-1/2"
        :src="imgSrc(`sample_0${index + 1}.jpg`)"
        alt="article"
      />
      <div class="flex-grow p-4 overflow-hidden">
        <div class="flex flex-wrap items-center gap-x-2 my-2">
          <!-- 日期 -->
          <span class="flex-shrink-0 w-18 text-xs">{{
            toDateFormat(recent.updateTime)
          }}</span>
          -
          <!-- Tags -->
          <SortsBox :tags="recent.sorts" />
        </div>
        <!-- 標題 -->
        <p
          class="
            font-bold
            md:text-2xl
            text-yellow-700
            mb-4
            overflow-ellipsis overflow-hidden
            line-clamp-2
          "
        >
          {{ recent.name }}
        </p>
        <!-- 內容 -->
        <div class="h-36 overflow-hidden" v-html="recent.content"></div>
        <router-link
          class="flex w-32 items-center mt-8 hover:underline group"
          :to="`/articles/${recent._id}`"
          >READ MORE<IconChevron
            :size="14"
            class="ml-3 group-hover:animate-bounce"
            direction="right"
          />
        </router-link>
      </div>
    </div>
    <div class="text-center my-4">
      <router-link
        class="
          inline-block
          py-2
          px-4
          border border-yellow-600
          hover:bg-yellow-600
          text-yellow-600
          hover:text-white
          rounded
          transition-all
        "
        to="/articles"
        >See more</router-link
      >
    </div>
  </div>
</template>
