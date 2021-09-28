<script setup>
import { ref, computed, nextTick } from "vue";
import IconX from "./IconX.vue";
import { typeRules, lengthRules, errorText } from "./inputVerify.js";
const props = defineProps({
  inputValue: {
    type: String || Number,
    default: "",
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (value) => ["text", "password"].includes(value),
  },
  id: {
    type: String,
    required: true,
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
  errMsg: {
    type: String,
    default: "",
  },
  clearBtn: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits([
  "update:inputValue",
  "update:isValid",
  "onBlur",
  "onKeyup",
]);

const blurInput = ref(false);
const clearBtnShow = ref(false);
const valueSync = computed({
  get: () => props.inputValue,
  set: (val) => emit("update:inputValue", val),
});
const onBlur = (value) => {
  if (!blurInput.value) blurInput.value = true;
  emit("onBlur", value);
  nextTick(() => validate(value));
};
const onKeyup = (value) => {
  clearBtnShow.value = value.length > 0;
  emit("onKeyup", value);
  nextTick(() => validate(value));
};
const onKeydown = (e) => {
  const code = {
    number: [69, 107, 109, 110, 187, 189, 190],
    decimal: [69, 107, 109, 187, 189],
  };
  const limit = props.rules.limit;
  if (!code[limit]) return;
  if (code[limit].includes(e.keycode)) e.preventDefault();
};
const validate = (value) => {
  if (!blurInput.value) return;
  let isValid = true;
  if (Object.keys(props.rules).length > 0) {
    const typeLimit = typeRules(value, props.rules.limit);
    const lengthLimit = lengthRules(value, props);
    isValid = typeLimit && lengthLimit;
  }
  emit("update:isValid", props.errMsg === "" && isValid);
};
const clear = () => {
  valueSync.value = "";
  blurInput.value = false;
  clearBtnShow.value = false;
  emit("update:isValid", Object.keys(props.rules).length === 0);
};
</script>

<template>
  <div :class="['input_section', !isValid && blurInput && 'is_error']">
    <div class="input_block">
      <input
        v-model="valueSync"
        class="input"
        :type="type"
        :id="id"
        @blur="onBlur(inputValue)"
        @keyup="onKeyup(inputValue)"
        @keydown="onKeydown"
      />
      <label :class="['label', valueSync !== '' && 'not_empty']" :for="id">{{
        label
      }}</label>
      <IconX
        v-if="clearBtn && clearBtnShow"
        class="icon_x"
        borderColor="rgb(209, 213, 219)"
        pointer
        @click="clear"
      />
    </div>
    <div class="input_error">
      <div class="error_text" v-if="!isValid && blurInput">
        {{ errorText(props) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.input_section {
  --text_color: rgb(209, 213, 219);
  --border_color: rgb(209, 213, 219);
  --active_border_color: rgb(180, 83, 9);
  --error_color: rgb(239, 68, 68);
}
.input_block {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 56px;
  margin-bottom: 2px;
}
.input_block::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 2px;
  left: 50%;
  background-color: var(--active_border_color);
  transition: 0.5s;
}
.input_block:focus-within::after {
  width: 100%;
  left: 0;
}

.input {
  display: block;
  width: 100%;
  outline: none;
  padding: 0 24px 0 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px var(--border_color) solid;
}
.label {
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 900;
  color: var(--text_color);
  cursor: text;
  transition: 0.3s;
  transform-origin: left;
}
.input:focus + .label,
.label.not_empty {
  transform: translateY(-24px) scale(0.75);
}

.is_error .label {
  color: var(--error_color);
}

.is_error .input {
  border-color: var(--error_color);
}

.input_error {
  font-size: 14px;
  text-align: left;
  color: var(--error_color);
}

.icon_x {
  position: absolute;
  right: 0;
  bottom: 2px;
  color: var(--border_color);
}
</style>
