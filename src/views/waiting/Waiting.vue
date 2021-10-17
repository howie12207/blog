<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { checkAwake } from "@/api/user";
import { useRouter } from "vue-router";
const router = useRouter();

const check = async () => {
  const res = await checkAwake();
  if (res) {
    const toRoute = sessionStorage.getItem("url") || "/";
    router.push(toRoute);
  }
};
let timer = null;
onMounted(() => {
  timer = setInterval(() => {
    check();
  }, 6000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="waiting text-white flex justify-center items-center">
    <div class="text-3xl p-4 bg-gray-700 bg-opacity-60 rounded">
      <p class="mb-4">因使用heroku call api，需要約30秒喚醒時間</p>
      <p>喚醒完會自動導回頁面，請耐心等候，謝謝</p>
    </div>
  </div>
</template>

<style scoped>
.waiting {
  width: 100%;
  height: 100vh;
  background: url("./img/banner.jpg");
}
</style>
