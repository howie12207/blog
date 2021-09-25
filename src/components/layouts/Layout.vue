<script setup>
import Header from "./header/Header.vue";
import Footer from "./footer/Footer.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";

const hidden = ["/"];
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <Breadcrumb
      v-if="!hidden.includes($route.path)"
      class="xl:w-xl xl:mx-auto px-4 py-4"
      :list="$route.meta.breadcrumbs"
    />
    <slot></slot>
    <Footer class="mt-auto" />
  </div>
</template>
