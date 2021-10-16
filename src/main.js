import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/assets/index.css";
import { checkAwake } from "@/api/user";

createApp(App).use(router).mount("#app");

async function checkIsAwake() {
  console.log(router);
  const res = await checkAwake();

  if (!res) {
    sessionStorage.setItem("url", router.currentRoute.value.fullPath);
    router.push("/waiting");
  }
}

checkIsAwake();
