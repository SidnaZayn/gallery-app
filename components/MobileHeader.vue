<template>
  <div
    class="grid grid-cols-1 gap-12 mobile-head rounded-full bg-white dark:bg-slate-800 w-[4rem] min-h-[4rem] py-4 shadow-2xl"
  >
    <button @click="openMenu()" class="flex justify-center items-center">
      <IconsIconMenu
        width="2rem"
        height="2rem"
        :color="iconColor"
        class="transition-all"
        :class="{ 'rotate-90': menuExpand }"
      />
    </button>
    <div v-if="menuExpand" class="flex flex-col gap-12 mx-auto items-center justify-center pr-1">
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
      <div class="flex justify-center rotate-90">
        <ToggleDarkMode />
      </div>
    </div>
  </div>
</template>

<script setup>
const { $colorMode } = useNuxtApp();
const iconColor = computed(() => {
  return $colorMode.value === "dark" ? "#fff" : "#000";
});

const menuExpand = ref(false);

const openMenu = () => {
  menuExpand.value = !menuExpand.value;
};
</script>

<style>
.mobile-head {
  filter: drop-shadow(0 5px 5px rgb(0 0 0 / 0.45));
}
</style>
