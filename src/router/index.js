import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/Home.vue";

export const router = createRouter({
  history: createWebHistory("/blog/"),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        name: "Home",
      },
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: () => import("@/views/notFound/NotFound.vue"),
    //   meta: {
    //     name: "Page not found",
    //     blank: true,
    //   },
    // },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const name = to.meta.name || "";
  document.title = `${name} | Howie's blog`;
  next();
});
