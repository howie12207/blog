<script setup>
const title = "Howie's website";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="relative">
    <img class="w-full h-96" :src="imgSrc('banner.jpg')" alt="banner" />
    <p
      class="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2 -translate-y-1/2
        font-black
        text-center
        tracking-widest
        text-white text-3xl
      "
    >
      {{ title }}
    </p>
  </div>
</template>
