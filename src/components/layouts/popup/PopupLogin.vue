<script setup>
import { ref } from "vue";
import Mask from "@/components/mask/Mask.vue";
import BaseInput from "@/components/baseInput/BaseInput.vue";
import { ElMessage } from "element-plus";
import { login } from "@/api/user.js";

const emit = defineEmits(["popup", "getUserInfo"]);

const account = ref({
  inputValue: localStorage.getItem("account") || "",
  isValid: false,
});
const password = ref({
  inputValue: "",
  isValid: false,
});
const saveAccount = ref(Boolean(localStorage.getItem("account")));

const loginHandle = async (close) => {
  if (saveAccount.value)
    localStorage.setItem("account", account.value.inputValue);
  if (!verify()) return;
  const res = await login({
    account: account.value.inputValue,
    password: password.value.inputValue,
  });
  if (res) {
    close();
    ElMessage({
      type: "success",
      message: "登入成功",
      showClose: true,
    });
    emit("getUserInfo");
  }
};

const verify = () => {
  if (account.value.inputValue === "" || password.value.inputValue === "") {
    ElMessage({
      type: "error",
      message: "請填入正確資訊",
      showClose: true,
    });
    return false;
  }
  return true;
};

const popup = (target, close) => {
  close();
  setTimeout(() => {
    emit("popup", target);
  }, 300);
};
</script>

<template>
  <Mask>
    <template #default="{ close }">
      <form
        class="py-4 px-8 w-96 bg-gray-100 border-t-4 border-yellow-700 rounded"
      >
        <h3 class="font-black text-2xl text-center mb-2">登入</h3>
        <BaseInput
          v-model:inputValue="account.inputValue"
          v-model:isValid="account.isValid"
          label="請輸入帳號"
          id="account"
        />
        <BaseInput
          v-model:inputValue="password.inputValue"
          v-model:isValid="password.isValid"
          label="請輸入密碼"
          id="password"
          type="password"
        />
        <div class="flex items-center gap-x-2 mt-4">
          <input
            class="cursor-pointer"
            v-model="saveAccount"
            type="checkbox"
            id="saveAccount"
          />
          <label class="text-sm cursor-pointer" for="saveAccount"
            >儲存此帳號</label
          >
        </div>
        <div class="lg:flex lg:justify-evenly my-2 text-center">
          <button class="btn bg-yellow-800" @click.prevent="loginHandle(close)">
            登入
          </button>
          <button class="btn bg-gray-400" @click.prevent="close">取消</button>
        </div>
        <div
          class="
            flex
            justify-between
            mt-4
            pt-2
            text-sm
            border-t-2 border-yellow-700
          "
        >
          <!-- <span
            class="
              text-base text-yellow-700
              cursor-pointer
              mr-2
              hover:underline
            "
            @click="popup('forgetPassword', close)"
            >忘記密碼？</span
          > -->
          <div>
            還沒有帳號？<span
              class="text-base text-yellow-700 cursor-pointer hover:underline"
              @click="popup('register', close)"
              >立即註冊</span
            >
          </div>
        </div>
      </form>
    </template>
  </Mask>
</template>

<style scoped>
.btn {
  @apply px-10 py-2 rounded text-white  transition-all hover:opacity-80;
}
</style>
