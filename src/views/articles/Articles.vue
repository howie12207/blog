<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElPagination } from "element-plus";
import { fetchArticles } from "@/api/article";
import { isDesktop } from "@/utils/common";
import ArticleCard from "./ArticleCard.vue";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  window.addEventListener("popstate", popStateHandle);
  getArticles();
});

const dataList = ref([]);
const total = ref(0);
const searchParams = ref({ page: route.query.page || 0, size: 10 });
const getArticles = async (query = searchParams.value) => {
  const res = (await fetchArticles(query)) || {};
  dataList.value = res.content || [];
  total.value = res.totalElements || 0;
};

const currentPage = ref(Number(route.query.page) + 1 || 1);
const currentChange = (page) => {
  searchParams.value.page = page - 1;
  router.push({ query: searchParams.value });
  getArticles();
  window.scrollTo(0, 0);
};

const popStateHandle = () => {
  const page = Number(route.query.page) + 1 || 1;
  currentPage.value = page;
  searchParams.value.page = page - 1;
  getArticles();
};

onBeforeUnmount(() => {
  window.removeEventListener("popstate", popStateHandle);
});
</script>

<template>
  <main class="xl:w-xl xl:mx-auto p-2 sm:p-4">
    <section class="grid lg:grid-cols-2 gap-8 mb-8">
      <ArticleCard
        v-for="article of dataList"
        :article="article"
        :key="article._id"
      />
    </section>
    <el-pagination
      v-if="total"
      v-model:currentPage="currentPage"
      class="text-center"
      background
      layout="prev, pager, next"
      :total="total"
      :pager-count="5"
      :small="!isDesktop()"
      @currentChange="currentChange"
    >
    </el-pagination>
  </main>
</template>
