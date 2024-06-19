<template>
  <div
    class="w-10/12 rounded-xl shadow-2xl h-[10vh] bg-white dark:bg-slate-800 fixed top-8 left-1/2 translate-x-[-50%] z-[100]"
    :class="isMobile ? 'hidden' : 'block'"
  >
    <div class="grid grid-cols-3 justify-between items-center h-full px-4">
      <div class="">
        <h1 class="font-yeseva text-5xl tracking-widest">G</h1>
      </div>
      <div class="flex justify-center items-center gap-4">
        <NuxtLink class="uppercase font-josefin sm:font-sm" active-class="font-bold" to="/">home</NuxtLink>
        <NuxtLink class="uppercase font-josefin sm:font-sm" active-class="font-bold" to="/albums">album</NuxtLink>
        <NuxtLink class="uppercase font-josefin sm:font-sm" active-class="font-bold" to="/about">about</NuxtLink>
      </div>
      <!-- dark mode toggle -->
      <div class="flex justify-end">
        <ToggleDarkMode />
      </div>
    </div>
  </div>
  <div v-if="isMobile" class="fixed top-4 left-[80%]">
    <MobileHeader />
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const isMobile = computed(() => width.value < 768);
</script>
