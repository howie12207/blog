<script setup>
import { ref, onMounted } from "vue";
import { fetchWorks } from "@/api/works";

onMounted(() => {
  getWorks();
});
const worksList = ref([]);

const getWorks = async () => {
  const res = await fetchWorks();
  worksList.value = res;
};

const btns = ["Code", "Demo"];
</script>

<template>
  <div class="p-4 md:py-8 md:px-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
    <div
      class="border rounded overflow-hidden transition-all group hover:shadow"
      v-for="(works, index) of worksList"
      :key="works.id"
    >
      <div class="relative">
        <img
          class="w-full h-80 object-cover transition-all group-hover:blur-sm"
          :src="works.img"
          alt="article"
        />
        <div
          class="
            md:absolute md:hidden md:group-hover:flex
            w-full
            flex
            justify-evenly
            top-1/2
            md:-translate-y-1/2
          "
        >
          <a
            v-for="(btn, index) of btns"
            :key="index"
            :class="[
              'flex-grow md:flex-grow-0 text-center py-1 px-4 transition-all  md:rounded bg-gray-200 hover:text-white hover:border-white',
              index === 0 &&
                'text-red-800 hover:bg-red-800 border-2 border-red-800',
              index === 1 &&
                'text-blue-800 hover:bg-blue-800 border-2 border-blue-800',
            ]"
            :href="works['path' + btn]"
            target="_blank"
            >{{ btn }}</a
          >
        </div>
      </div>
      <div class="p-4">
        <component
          :is="works.url ? 'router-link' : 'span'"
          :to="works.url"
          :class="['text-red-800 text-xl mb-2', works.url && 'hover:underline']"
        >
          {{ works.name }}
        </component>
        <div v-html="works.content"></div>
      </div>
    </div>
  </div>
</template>
