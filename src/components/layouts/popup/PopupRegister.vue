<script setup>
import { ref } from "vue";
import Mask from "@/components/mask/Mask.vue";
import BaseInput from "@/components/baseInput/BaseInput.vue";

const account = ref({
  inputValue: "",
  isValid: true,
});
const password = ref({
  inputValue: "",
  isValid: true,
});
const confirmPassword = ref({
  inputValue: "",
  isValid: true,
});
const name = ref({
  inputValue: "",
  isValid: true,
});
const email = ref({
  inputValue: "",
  isValid: true,
});
const saveAccount = ref(false);

const login = () => {};
</script>

<template>
  <Mask>
    <template #default="{ close }">
      <form
        class="py-4 px-8 w-96 bg-gray-100 border-t-4 border-yellow-700 rounded"
      >
        <h3 class="font-black text-2xl text-center mb-2">註冊</h3>
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
        <BaseInput
          v-model:inputValue="confirmPassword.inputValue"
          v-model:isValid="confirmPassword.isValid"
          label="請輸入確認密碼"
          id="confirmPassword"
          type="password"
        />
        <BaseInput
          v-model:inputValue="name.inputValue"
          v-model:isValid="name.isValid"
          label="請輸入暱稱"
          id="name"
        />
        <BaseInput
          v-model:inputValue="email.inputValue"
          v-model:isValid="email.isValid"
          label="請輸入信箱"
          id="email"
        />
        <div class="lg:flex lg:justify-evenly mt-8 mb-2 text-center">
          <button
            class="
              px-10
              py-2
              mb-4
              lg:mb-0
              rounded
              text-white
              bg-yellow-800
              transition-all
              hover:opacity-80
            "
            @click.prevent="login"
          >
            註冊
          </button>
          <button
            class="
              px-10
              py-2
              rounded
              text-white
              bg-gray-400
              transition-all
              hover:opacity-80
            "
            @click.prevent="close"
          >
            取消
          </button>
        </div>
      </form>
    </template>
  </Mask>
</template>
