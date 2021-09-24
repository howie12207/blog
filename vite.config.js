import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

import ElementPlus from "unplugin-element-plus/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/blog/",
  plugins: [vue(), ElementPlus()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
