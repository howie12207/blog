import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@/assets/index.css";
import { checkAwake } from "@/api/user";
import "element-plus/dist/index.css";

(async () => {
  let connect = false;
  const res = await checkAwake();
  connect = res ? true : false;

  createApp(App).use(router).mount("#app");

  if (!connect) {
    sessionStorage.setItem("url", router.currentRoute.value.fullPath);
    router.push("/waiting");
  }
})();
