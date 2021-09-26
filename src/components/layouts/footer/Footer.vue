<script setup>
const copyrightData = "Copyright © 2021 by Howie. All rights reserved.";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
};
</script>

<template>
  <div class="font-black sm:text-xl text-center p-4 bg-gray-100">
    {{ copyrightData }}
  </div>
</template>
