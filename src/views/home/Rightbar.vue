<script setup>
import sortsBg from "@/assets/sortsBg.json";

const introMeData = "Hello! I'm Howie, a front-end engineer for about 2 years.";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <aside class="lg:w-72 mt-12">
    <div class="relative text-center border px-4 py-4">
      <img
        class="
          w-24
          h-24
          absolute
          -top-12
          left-0
          right-0
          border-4
          mx-auto
          border-white
          rounded-full
          shadow-xl
        "
        :src="imgSrc('avatar.jpg')"
        alt="avatar"
      />
      <p class="font-black text-xl mt-10 mb-4">Howie Chen</p>
      <p class="text-gray-700 leading-7">{{ introMeData }}</p>
    </div>
    <div class="my-8">
      <h3 class="font-black text-lg pb-4 mb-4 border-b">Tags</h3>
      <div class="flex flex-wrap gap-2">
        <router-link
          to="/"
          v-for="(value, key) in sortsBg"
          :key="key"
          :class="[
            'text-white p-1 rounded-sm transition-all hover:bg-opacity-80',
            value,
          ]"
          >{{ key }}</router-link
        >
      </div>
    </div>
    <div class="my-8">
      <h3 class="font-black text-lg pb-4 mb-4 border-b">Contact</h3>
      <div class="flex flex-wrap gap-2"></div>
    </div>
  </aside>
</template>
