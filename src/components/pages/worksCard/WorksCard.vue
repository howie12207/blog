<script setup>
defineProps({
  works: {
    type: Object,
    default: () => ({}),
  },
});
const btns = ["Code", "Demo"];
</script>
<template>
  <div class="border rounded overflow-hidden transition-all group hover:shadow">
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
    <div class="p-4 border-t-4">
      <component
        :is="works.url ? 'router-link' : 'span'"
        :to="works.url"
        :class="[
          'inline-block text-red-800 text-xl mb-2',
          works.url && 'hover:underline',
        ]"
      >
        {{ works.name }}
      </component>
      <div v-html="works.content"></div>
    </div>
  </div>
</template>
