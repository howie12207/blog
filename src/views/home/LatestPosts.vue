<script setup>
import sortsBg from "@/assets/sortsBg.json";
import latestPosts from "@/assets/articles.json";

import { toDateFormat } from "@/utils/format.js";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div>
    <h1 class="decoration font-black text-3xl mb-8">Latest Posts</h1>
    <div class="grid sm:grid-cols-2 gap-4">
      <router-link
        to="/"
        class="border rounded overflow-hidden transition-all group hover:shadow"
        v-for="(recent, index) of latestPosts"
        :key="recent.id"
      >
        <img
          class="w-full transition-all group-hover:opacity-80"
          :src="imgSrc(`sample_0${index + 1}.jpg`)"
          alt="article"
        />
        <div class="p-4">
          <div class="flex gap-x-4 items-center my-2">
            <span class="flex flex-wrap gap-x-1 gap-y-1 flex-grow">
              <span
                :class="[
                  'p-0.5 text-white text-sm rounded-sm',
                  sortsBg[tag] || 'bg-red-500',
                ]"
                v-for="tag of recent.tags"
                :key="tag"
                >{{ tag }}</span
              >
            </span>
            <span class="flex-shrink-0 w-20 text-xs">{{
              toDateFormat(recent.time)
            }}</span>
          </div>
          <p
            class="
              transition-all
              group-hover:underline group-hover:text-yellow-700
            "
          >
            {{ recent.title }}
          </p>
        </div>
      </router-link>
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
