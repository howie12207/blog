<script setup>
import { ref, onMounted } from "vue";
import WorksCard from "@/components/pages/worksCard/WorksCard.vue";
import { fetchWorks } from "@/api/works";

onMounted(() => {
  getWorks();
});
const worksList = ref([]);

const getWorks = async () => {
  const res = await fetchWorks();
  worksList.value = res.content;
};
</script>

<template>
  <div
    class="
      xl:w-xl xl:mx-auto
      p-2
      lg:p-4
      grid
      sm:grid-cols-2
      xl:grid-cols-3
      gap-4
    "
  >
    <WorksCard v-for="works of worksList" :key="works._id" :works="works" />
  </div>
</template>
