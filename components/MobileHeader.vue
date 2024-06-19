<template>
  <div
    class="mobile-head rounded-full py-4 px-1 bg-slate-800 w-fit h-fit shadow-2xl flex flex-col justify-center items-center gap-12"
  >
    <div class="">
      <h1 class="font-yeseva text-2xl">G</h1>
    </div>
    <div class="flex flex-col justify-center items-center gap-12">
      <NuxtLink class="uppercase rotate-90 font-josefin sm:font-sm" active-class="font-bold" to="/"
        >home</NuxtLink
      >
      <NuxtLink
        class="uppercase rotate-90 font-josefin sm:font-sm"
        active-class="font-bold"
        to="/albums"
        >album</NuxtLink
      >
      <NuxtLink
        class="uppercase rotate-90 font-josefin sm:font-sm"
        active-class="font-bold"
        to="/about"
        >about</NuxtLink
      >
    </div>
    <div class="flex justify-end rotate-90">
      <ToggleDarkMode />
    </div>
  </div>
</template>

<script setup>
const { $colorMode } = useNuxtApp();
const iconColor = computed(() => {
  return $colorMode.value === "dark" ? "#fff" : "#000";
});
</script>

<style>
.mobile-head {
  filter: drop-shadow(0 5px 5px rgb(0 0 0 / 0.45));
}
</style>
