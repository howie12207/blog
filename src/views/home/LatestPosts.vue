<script setup>
import { ref, onMounted } from "vue";

import SortsBox from "@/components/pages/sortsBox/SortsBox.vue";

import { fetchArticles } from "@/api/article.js";
import { toDateFormat } from "@/utils/format.js";

onMounted(() => {
  getArticles();
});
const latestPosts = ref([]);

const getArticles = async () => {
  const res = (await fetchArticles({ page: 0, size: 4 })) || {};
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
    <section class="grid md:grid-cols-2 gap-4">
      <div
        class="relative border rounded overflow-hidden group"
        v-for="(recent, index) of latestPosts"
        :key="recent.id"
      >
        <img
          class="w-full transition-all group-hover:blur-sm"
          :src="imgSrc(`sample_0${index + 1}.jpg`)"
          alt="article"
        />
        <div class="absolute text-white bottom-4 left-4">
          <div class="flex flex-wrap items-center gap-x-2 my-2">
            <span class="flex-shrink-0 w-18 text-xs">{{
              toDateFormat(recent.updateTime)
            }}</span>
            -
            <SortsBox :tags="recent.sorts" />
          </div>
          <router-link
            :to="`/articles/${recent._id}?title=${recent.name}`"
            class="
              font-bold
              md:text-2xl
              hover:underline
              overflow-ellipsis overflow-hidden
              line-clamp-2
            "
          >
            {{ recent.name }}
          </router-link>
        </div>
      </div>
    </section>

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
