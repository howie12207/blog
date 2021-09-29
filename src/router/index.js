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
        breadcrumbs: [{ name: "Home" }],
      },
    },
    {
      path: "/articles",
      component: () => import("@/views/articles/Articles.vue"),
      meta: {
        name: "Articles",
        breadcrumbs: [{ name: "Home", url: "/" }, { name: "Articles" }],
      },
    },
    {
      path: "/articles/:id",
      component: () => import("@/views/articles/Article.vue"),
      meta: {
        name: "Article",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Articles", url: "/articles" },
          { name: "Article" },
        ],
      },
    },
    {
      path: "/sorts",
      component: () => import("@/views/sorts/Sorts.vue"),
      meta: {
        name: "Sorts",
        breadcrumbs: [{ name: "Home", url: "/" }, { name: "Sorts" }],
      },
    },
    {
      path: "/works",
      component: () => import("@/views/works/Works.vue"),
      meta: {
        name: "Works",
        breadcrumbs: [{ name: "Home", url: "/" }, { name: "Works" }],
      },
    },
    {
      path: "/about",
      component: () => import("@/views/about/About.vue"),
      meta: {
        name: "About",
        breadcrumbs: [{ name: "Home", url: "/" }, { name: "About" }],
      },
    },
    {
      path: "/contact",
      component: () => import("@/views/contact/Contact.vue"),
      meta: {
        name: "Contact",
        breadcrumbs: [{ name: "Home", url: "/" }, { name: "Contact" }],
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
  const name = to.meta.name || "";
  document.title = `${name} | Howie's blog`;
  next();
});
