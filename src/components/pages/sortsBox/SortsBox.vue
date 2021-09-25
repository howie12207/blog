<script setup>
defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-wrap gap-x-1 gap-y-1 flex-grow">
    <span
      v-for="tag of tags"
      :key="tag"
      :class="['p-0.5 text-white text-sm rounded-sm bg-red-500']"
      >{{ tag }}</span
    >
  </div>
</template>
