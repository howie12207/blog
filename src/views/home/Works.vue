<script setup>
import { ref, onMounted } from "vue";
import WorksCard from "@/components/pages/worksCard/WorksCard.vue";
import { fetchWorksRecommend } from "@/api/works";

onMounted(() => {
  getWorksRecommend();
});
const worksList = ref([]);

const getWorksRecommend = async () => {
  const res = await fetchWorksRecommend();
  worksList.value = res;
};

const btns = ["Code", "Demo"];
</script>

<template>
  <div>
    <h1 class="decoration font-black text-3xl mb-8">Works</h1>
    <div class="grid md:grid-cols-2 gap-4">
      <WorksCard v-for="works of worksList" :key="works._id" :works="works" />
    </div>
    <div class="text-center my-4">
      <router-link
        class="
          inline-block
          py-2
          px-4
          border border-yellow-600
          hover:bg-yellow-600
          text-yellow-600
          hover:text-white
          rounded
          transition-all
        "
        to="/works"
        >See more</router-link
      >
    </div>
  </div>
</template>
