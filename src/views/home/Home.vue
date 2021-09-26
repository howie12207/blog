<script setup>
import { ref, onMounted } from "vue";
import Banner from "./Banner.vue";
import Intro from "./Intro.vue";
import LatestPosts from "./LatestPosts.vue";
import Works from "./Works.vue";
import Rightbar from "./Rightbar.vue";
import { fetchAbout } from "@/api/about.js";

onMounted(() => {
  getAbout();
});

const about = ref({
  name: "",
  title: "",
  email: "",
  pathGithub: "",
  intro: "",
});
const getAbout = async () => {
  about.value = (await fetchAbout()) || {};
};
</script>

<template>
  <div>
    <Banner />
    <section class="lg:flex p-4">
      <main class="lg:w-lg lg:mx-auto p-4">
        <Intro :introData="about.intro" />
        <LatestPosts />
        <Works />
      </main>
      <Rightbar class="flex-shrink-0" :about="about" />
    </section>
  </div>
</template>
