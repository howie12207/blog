<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElPagination } from "element-plus";
import { fetchArticles } from "@/api/article";
import ArticleCard from "./ArticleCard.vue";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  getArticles(pageOptions.value);
});

const dataList = ref([]);
const total = ref(0);
const pageOptions = ref({ page: route.query.page || 0, size: 10 });
const getArticles = async (query) => {
  const res = (await fetchArticles(query)) || {};
  dataList.value = res.content || [];
  total.value = res.totalElements || 0;
};

const currentPage = ref(Number(route.query.page) + 1 || 1);
const currentChange = (page) => {
  const query = { page: page - 1, size: 10 };
  router.push({ query });
  getArticles(query);
};
</script>

<template>
  <div class="p-16">
    <main>
      <ArticleCard
        v-for="article of dataList"
        :article="article"
        :key="article._id"
      />
      <el-pagination
        v-if="total"
        v-model:currentPage="currentPage"
        class="text-center"
        background
        layout="prev, pager, next"
        :total="total"
        @currentChange="currentChange"
      >
      </el-pagination>
    </main>
  </div>
</template>
