<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: Number,
    default: 24,
  },
  mainColor: {
    type: String,
    default: "currentColor",
  },
  value: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["input"]);

const active = computed({
  get() {
    return this.value;
  },
  set(value) {
    emits("input", value);
  },
});

const menuHandle = () => {
  active.value = !active.value;
};

const style = computed(() => ({
  "--menuSize": `${props.size}px`,
  "--menuColor": props.mainColor,
  "--move": `${props.size / 4 + 1}px`,
  "--move2": `-${props.size / 4 + 1}px`,
}));
</script>

<template>
  <div :style="style" :class="['nav_icon', { active }]" @click="menuHandle">
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.nav_icon {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: var(--menuSize);
  height: var(--menuSize);
  cursor: pointer;
}
.nav_icon .line {
  width: var(--menuSize);
  border-radius: 4px;
  border: 2px solid var(--menuColor);
  background: var(--menuColor);
  transition: 0.4s;
}

.nav_icon.active .line1 {
  transform: translateY(var(--move)) rotate(45deg);
}
.nav_icon.active .line2 {
  opacity: 0;
}
.nav_icon.active .line3 {
  transform: translateY(var(--move2)) rotate(-45deg);
}
</style>
