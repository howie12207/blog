<script setup>
defineProps({
  introData: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mb-8">
    <h1 class="decoration font-black text-3xl mb-8">Introduction</h1>
    <p class="indent-2">{{ introData }}</p>
  </div>
</template>
