<script setup>
import { ref, onMounted, computed } from "vue";

const prop = defineProps({
  duration: {
    type: Number,
    default: 300,
  },
  closeOut: {
    type: Boolean,
    default: true,
  },
  custom: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);

onMounted(() => {
  show.value = true;
  document.body.style.overflow = "hidden";
});

const closeHandle = (e) => {
  if (prop.closeOut) close();
};
const show = ref(false);
const close = () => {
  show.value = false;
  setTimeout(() => {
    emit("close");
    document.body.style.overflow = "initial";
  }, prop.duration);
};

const style = computed(() => {
  return {
    "--popupDuration": `${prop.duration / 1000}s`,
  };
});
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="show" class="mask" :style="style" @click="closeHandle">
        <div :class="!custom && 'popup'" @click.stop>
          <slot :close="close"></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}

.popup {
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
}

.fade-enter-active {
  animation: fade var(--popupDuration) ease forwards;
}
.fade-leave-active {
  animation: fade var(--popupDuration) ease forwards reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
