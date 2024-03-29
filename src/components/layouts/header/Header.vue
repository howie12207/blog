<script setup>
import { onMounted, computed, ref } from "vue";
import IconMenu from "@/components/icon/IconMenu.vue";
import PopupLogin from "@/components/layouts/popup/PopupLogin.vue";
import PopupRegister from "@/components/layouts/popup/PopupRegister.vue";
import PopupRightbar from "@/components/layouts/popup/PopupRightbar.vue";
import menu from "@/assets/navList.json";
import { getToken } from "@/utils/auth";
import { fetchUserInfo } from "@/api/user";
onMounted(() => {
  if (isLogin.value) getUserInfo();
});

const getUserInfo = async () => {
  const { name } = await fetchUserInfo();
  username.value = name;
  isLogin.value = true;
};

const isLogin = ref(getToken());

const menuFilter = computed(() => {
  return isLogin.value ? menu.filter((item) => !item.notLogin) : menu;
});

const username = ref("");

const popupOpen = ref(undefined);
const popup = (target) => {
  popupOpen.value = target;
};

const navClick = (label) => {
  if (label !== "LOGIN") return;
  popup("login");
};

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="h-14 w-full">
    <header class="fixed max-w-screen z-10 top-0 left-0 right-0 bg-gray-100">
      <div
        class="
          overflow-hidden
          xl:w-xl
          px-2
          mx-auto
          flex
          items-center
          justify-between
          z-10
        "
      >
        <router-link to="/"
          ><img class="w-8" :src="imgSrc('logo.png')" alt="logo" />
        </router-link>
        <nav class="hidden sm:block">
          <ul class="flex">
            <li
              :class="[
                'relative font-black mx-1 transition-all hover:text-yellow-700',
                item.url && $route.path.includes(item.url) && 'active',
              ]"
              v-for="item of menuFilter"
              :key="item.id"
            >
              <router-link
                class="block px-2 py-4"
                :to="item.url"
                @click="navClick(item.label)"
                >{{ item.label }}</router-link
              >
            </li>
            <li
              class="font-black mx-1 transition-all bg-yellow-700"
              v-if="username"
            >
              <span class="block px-2 py-4">{{ username }}</span>
            </li>
          </ul>
        </nav>
        <li
          class="
            relative
            flex
            md:hidden
            items-center
            font-black
            mx-1
            px-2
            py-4
            transition-all
          "
          @click="popup('rightbar')"
        >
          <IconMenu class="hover:text-yellow-700" />
        </li>
      </div>
    </header>
    <PopupLogin
      v-if="popupOpen === 'login'"
      @close="popup"
      @popup="popup"
      @getUserInfo="getUserInfo"
    />
    <PopupRegister
      v-else-if="popupOpen === 'register'"
      @close="popup"
      @getUserInfo="getUserInfo"
    />
    <PopupRightbar v-else-if="popupOpen === 'rightbar'" @close="popup" />
  </div>
</template>

<style scoped>
.active::after {
  content: "";
  @apply absolute bottom-0 left-0 right-0 h-1 bg-yellow-800;
}
</style>
