<script setup>
import { onMounted, ref } from "vue";
import IconMenu from "@/components/icon/IconMenu.vue";
import PopupLogin from "@/components/layouts/popup/PopupLogin.vue";
import PopupRegister from "@/components/layouts/popup/PopupRegister.vue";
import menu from "@/assets/navList.json";
// import { getToken } from "@/utils/auth";
// import { fetchUserInfo } from "@/api/user";

// onMounted(() => {
//   getUserInfo();
// });

// const getUserInfo = async() => {
//   if (getToken()) {
//   const {} = await fetchUserInfo()
//   }
// };

const menuFilter = () => {};

const popupOpen = ref("");
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
        <ul class="flex">
          <li
            class="font-black mx-1 transition-all hover:text-yellow-700"
            v-for="item of menu"
            :key="item.id"
          >
            <router-link
              class="block px-2 py-4"
              :to="item.url"
              @click="navClick(item.label)"
              >{{ item.label }}</router-link
            >
          </li>
          <li class="relative flex items-center font-black mx-1 transition-all">
            <IconMenu class="hover:text-yellow-700" />
          </li>
        </ul>
      </div>
    </header>
    <PopupLogin
      v-if="popupOpen === 'login'"
      @close="popup('')"
      @popup="popup"
    />
    <PopupRegister v-else-if="popupOpen === 'register'" @close="popup('')" />
  </div>
</template>
