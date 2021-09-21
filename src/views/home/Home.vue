<script setup>
import Banner from "./Banner.vue";
import Intro from "./Intro.vue";
import LatestPosts from "./LatestPosts.vue";
import Works from "./Works.vue";
import Rightbar from "./Rightbar.vue";
</script>

<template>
  <div>
    <Banner />
    <section class="lg:flex p-4">
      <main class="lg:w-lg lg:mx-auto p-4">
        <Intro />
        <LatestPosts />
        <Works />
      </main>
      <Rightbar class="flex-shrink-0" />
    </section>
  </div>
</template>
