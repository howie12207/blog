<script setup>
import { computed } from "vue";

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  mainColor: {
    type: String,
    default: "rgb(96, 165, 250)",
  },
  secColor: {
    type: String,
    default: "rgb(156, 163, 175)",
  },
  divider: {
    type: String,
    default: "/",
  },
});

const style = computed(() => {
  return {
    "--breadcrumbsColor": props.mainColor,
    "--breadcrumbsSecColor": props.secColor,
  };
});
</script>

<template>
  <div :style="style" class="breadcrumbs">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
      />
    </svg>
    <template v-for="(item, index) of list">
      <template v-if="index !== list.length - 1 && item.url">
        <router-link class="breadcrumbs_item" :to="item.url" :key="index">{{
          item.name
        }}</router-link>
        <span class="divider" :key="`${index}divider`">{{ divider }}</span>
      </template>
      <span class="breadcrumbs_item" v-else :key="index">{{ item.name }}</span>
    </template>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.breadcrumbs .breadcrumbs_item {
  position: relative;
  margin: 0 8px;
  text-decoration: none;
  color: var(--breadcrumbsColor);
  transition: 0.4s;
}
.breadcrumbs a.breadcrumbs_item:hover {
  opacity: 0.7;
}
.breadcrumbs span.breadcrumbs_item,
.breadcrumbs .divider {
  color: var(--breadcrumbsSecColor);
}
</style>
