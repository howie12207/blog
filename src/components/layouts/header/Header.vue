<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import IconMenu from "@/components/icon/IconMenu.vue";

import menu from "@/assets/navList.json";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="h-14 bg-gray-100">
    <header
      class="
        w-full
        h-full
        overflow-hidden
        xl:w-xl
        px-2
        mx-auto
        flex
        items-center
        justify-between
      "
    >
      <router-link to="/"
        ><img class="w-8" :src="imgSrc('logo.png')" alt="logo" />
      </router-link>
      <ul class="flex">
        <li
          class="font-black mx-1 transition-all hover:text-yellow-700"
          v-for="item of menu"
          :key="item.id"
        >
          <router-link class="block px-2 py-4" :to="item.url">{{
            item.label
          }}</router-link>
        </li>
        <li class="relative flex items-center font-black mx-1 transition-all">
          <IconMenu class="hover:text-yellow-700" />
        </li>
      </ul>
    </header>
  </div>
</template>
