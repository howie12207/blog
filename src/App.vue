<script setup>
import Layout from "@/components/layouts/Layout.vue";
</script>

<template>
  <router-view
    v-if="Object.keys($route.meta).length > 0"
    v-slot="{ Component }"
  >
    <component v-if="$route.meta.blank" :is="Component"></component>
    <Layout v-else>
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </Layout>
  </router-view>
</template>
