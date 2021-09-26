<script setup>
import { ref, onMounted } from "vue";
import { fetchAbout } from "@/api/about.js";

onMounted(() => {
  getAbout();
});

const about = ref({
  name: "",
  title: "",
  email: "",
  pathGithub: "",
  content: "",
});
const getAbout = async () => {
  about.value = (await fetchAbout()) || {};
};

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <main
    class="
      sm:flex sm:items-center
      gap-x-8
      xl:w-xl
      mx-4
      mb-4
      p-4
      xl:mx-auto
      shadow-2xl
      rounded-xl
    "
  >
    <div class="max-w-xs flex-shrink-0 mx-auto sm:mx-0 mb-8 sm:mb-0">
      <img
        class="w-24 h-24 rounded-full mx-auto mb-4"
        :src="imgSrc('avatar.jpg')"
        alt="avatar"
      />
      <h2 class="text-center text-yellow-700 font-black mb-4">
        {{ about.name }}
      </h2>
      <div class="flex flex-wrap gap-4 justify-center mb-4">
        <a :href="`mailto:${about.email}`"
          ><img :src="imgSrc('email.svg')" alt="email"
        /></a>
        <a :href="about.pathGithub" target="_blank"
          ><img :src="imgSrc('github.svg')" alt="github"
        /></a>
      </div>
      <h2 class="text-center text-yellow-900">{{ about.title }}</h2>
    </div>
    <article v-html="about.content"></article>
  </main>
</template>
