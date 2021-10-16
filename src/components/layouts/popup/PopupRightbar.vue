<script setup>
import { ref } from "vue";
import Mask from "@/components/mask/Mask.vue";
import menu from "@/assets/navList.json";

const emit = defineEmits(["popup"]);
</script>

<template>
  <Mask custom>
    <template #default="{ close }">
      <div class="fixed right-0 min-h-screen w-60 bg-white">
        <h1 class="text-center bg-yellow-600 py-3">Menu</h1>
        <nav>
          <ul>
            <li v-for="item of menu" :key="item.id">
              <router-link
                class="inline-block w-full py-3 px-4 border-b"
                :to="item.url"
                >{{ item.label }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </template>
  </Mask>
</template>

<style scoped>
.btn {
  @apply px-10 py-2 rounded text-white  transition-all hover:opacity-80;
}
</style>
