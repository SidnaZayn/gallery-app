<template>
  <div>
    <IconsIconMoon
      v-if="$colorMode.preference !== 'dark'"
      @click="toggleDarkMode"
      class="cursor-pointer toggle"
      color="#000"
      width="1.5em"
      height="1.5em"
    />

    <IconsIconSun
      v-else
      @click="toggleDarkMode"
      class="cursor-pointer toggle"
      color="#fff"
      width="1.5em"
      height="1.5em"
    />
  </div>
</template>

<script setup>
import gsap from "gsap";
const { $colorMode } = useNuxtApp();
const toggleAnim = ref();
const toggleAnimCount = ref(0);

const toggleDarkMode = () => {
  if (toggleAnimCount.value === 0) {
    toggleAnim.value = gsap.timeline().to(
      ".toggle",
      {
        rotate: 360,
        duration: 0.5,
      },
      0
    );
    toggleAnimCount.value = 1;
  } else {
    toggleAnim.value.reverse();
    toggleAnimCount.value = 0;
  }

  if ($colorMode.preference === "system") {
    $colorMode.preference = "dark";
  } else if ($colorMode.preference === "dark") {
    $colorMode.preference = "light";
  } else {
    $colorMode.preference = "dark";
  }
};
</script>
