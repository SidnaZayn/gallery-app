<template>
  <div>
    <IconsIconMoon
      v-if="$colorMode.preference !== 'dark'"
      @click="toggleDarkMode"
      id="to-dark"
      class="cursor-pointer"
      :class="[onRotate ? 'animate-spin' : '']"
      color="#000"
      width="1.5em"
      height="1.5em"
    />

    <IconsIconSun
      v-else
      @click="toggleDarkMode"
      id="to-light"
      class="cursor-pointer"
      :class="[onRotate ? 'animate-spin' : '']"
      color="#fff"
      width="1.5em"
      height="1.5em"
    />
  </div>
</template>

<script setup>
import gsap from "gsap";
const { $colorMode } = useNuxtApp();
const onRotate = ref(false);

const toggleDarkMode = () => {
  onRotate.value = true;
  if ($colorMode.preference === "system") {
    $colorMode.preference = "dark";
  } else if ($colorMode.preference === "dark") {
    $colorMode.preference = "light";
  } else {
    $colorMode.preference = "dark";
  }
  const timeout = $colorMode.preference === "dark" ? 500 : 1000;
  setTimeout(() => {
    onRotate.value = false;
  }, timeout);
};
</script>
