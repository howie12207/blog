import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/assets/index.css";
import { checkAwake } from "@/api/user";

let connect = false;

const checkIsAwake = async () => {
  const res = await checkAwake();
  connect = res ? true : false;
};

await checkIsAwake();

createApp(App).use(router).mount("#app");

if (!connect) {
  sessionStorage.setItem("url", router.currentRoute.value.fullPath);
  router.push("/waiting");
}
