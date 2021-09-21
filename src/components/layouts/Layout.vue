<script setup>
import Header from "./header/Header.vue";
import Footer from "./footer/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <slot></slot>
    <Footer class="mt-auto" />
  </div>
</template>
