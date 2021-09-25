<script setup>
import { ref, onMounted } from "vue";
import SortsBox from "@/components/layouts/sortsBox/SortsBox.vue";

import { fetchSorts } from "@/api/sort.js";

onMounted(() => {
  getSorts();
});

const sorts = ref([]);
const getSorts = async () => {
  const res = (await fetchSorts()) || [];
  sorts.value = res.map((item) => item.name);
};

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
      <SortsBox :tags="sorts" />
    </div>
    <div class="my-8">
      <h3 class="font-black text-lg pb-4 mb-4 border-b">Contact</h3>
      <div class="flex flex-wrap gap-4">
        <a href="mailto:howie12207@gmail.com"
          ><img :src="imgSrc('email.svg')" alt="email"
        /></a>
        <a href="https://github.com/howie12207" target="_blank"
          ><img :src="imgSrc('github.svg')" alt="github"
        /></a>
      </div>
    </div>
  </aside>
</template>
