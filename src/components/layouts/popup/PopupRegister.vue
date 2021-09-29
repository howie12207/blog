<script setup>
import { ref } from "vue";
import Mask from "@/components/mask/Mask.vue";
import BaseInput from "@/components/baseInput/BaseInput.vue";
import { ElMessage } from "element-plus";
import { register, login } from "@/api/user.js";
import { setToken } from "@/utils/auth";

const account = ref({
  inputValue: "",
  isValid: false,
  rules: {
    limit: "enAndNumber",
    min: 6,
    max: 16,
  },
});
const password = ref({
  inputValue: "",
  isValid: false,
  rules: {
    limit: "enAndNumber",
    min: 6,
    max: 16,
  },
});
const confirmPassword = ref({
  inputValue: "",
  isValid: false,
  rules: {
    limit: "enAndNumber",
    min: 6,
    max: 16,
  },
  errMsg: "",
});
const name = ref({
  inputValue: "",
  isValid: false,
  rules: {
    isRequired: true,
  },
});
const email = ref({
  inputValue: "",
  isValid: false,
  rules: {
    limit: "email",
  },
});

const emit = defineEmits(["getUserInfo"]);

const registerHandle = async (close) => {
  if (!verify()) return;
  const params = {
    account: account.value.inputValue,
    password: password.value.inputValue,
    name: name.value.inputValue,
    email: email.value.inputValue,
  };
  const res = await register(params);
  if (res) {
    ElMessage({
      type: "success",
      message: "註冊成功",
      showClose: true,
    });
    await login({
      account: account.value.inputValue,
      password: password.value.inputValue,
    });
    close();
    emit("getUserInfo");
  }
};
const verify = () => {
  const params = [account, password, confirmPassword, name, email];
  const result = params.every((item) => item.value.isValid);
  if (!result)
    ElMessage({
      type: "error",
      message: "請填入完整資訊",
      showClose: true,
    });
  return result;
};

const confirmPwd = (target) => {
  if (target === "first" && confirmPassword.value.inputValue === "") return;
  if (password.value.inputValue !== confirmPassword.value.inputValue) {
    if (target === "first") confirmPassword.value.isValid = false;
    confirmPassword.value.errMsg = "密碼不同";
  } else {
    if (target === "first") confirmPassword.value.isValid = true;
    confirmPassword.value.errMsg = "";
  }
};
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
          :rules="account.rules"
          label="請輸入帳號"
          id="account"
        />
        <BaseInput
          v-model:inputValue="password.inputValue"
          v-model:isValid="password.isValid"
          :rules="password.rules"
          label="請輸入密碼"
          id="password"
          type="password"
          @onBlur="confirmPwd('first')"
          @onKeyup="confirmPwd('first')"
        />
        <BaseInput
          v-model:inputValue="confirmPassword.inputValue"
          v-model:isValid="confirmPassword.isValid"
          :rules="confirmPassword.rules"
          label="請輸入確認密碼"
          id="confirmPassword"
          type="password"
          @onBlur="confirmPwd"
          @onKeyup="confirmPwd"
          :errMsg="confirmPassword.errMsg"
        />
        <BaseInput
          v-model:inputValue="name.inputValue"
          v-model:isValid="name.isValid"
          :rules="name.rules"
          label="請輸入暱稱"
          id="name"
        />
        <BaseInput
          v-model:inputValue="email.inputValue"
          v-model:isValid="email.isValid"
          :rules="email.rules"
          label="請輸入信箱"
          id="email"
        />
        <div class="lg:flex lg:justify-evenly mt-8 mb-2 text-center">
          <button
            class="btn bg-yellow-800"
            @click.prevent="registerHandle(close)"
          >
            註冊
          </button>
          <button class="btn bg-gray-400" @click.prevent="close">取消</button>
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
