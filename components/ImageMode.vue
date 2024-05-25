<template>
  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white cursor-pointer"
    id="grid-mode"
    :class="{ 'drop-shadow-img-mode': modeOpen === 1 }"
    @click="closeMode('grid')"
    title="Grid Mode"
  >
    <span><IconsIconGrid width="2em" height="2em" color="#000" /></span>
  </div>

  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white cursor-pointer"
    id="backtop-mode"
    :class="{ 'drop-shadow-img-mode': modeOpen === 1 }"
    @click="toTop()"
    title="Back To Top"
  >
    <span><IconsIconArrowUp width="2em" height="2em" color="#000" /></span>
  </div>

  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white cursor-pointer"
    id="zoomout-mode"
    :class="{ 'drop-shadow-img-mode': modeOpen === 1 }"
    @click="closeMode('zoomout')"
    title="Zoom Out"
  >
    <span><IconsIconZoomOut width="2em" height="2em" color="#000" /></span>
  </div>

  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white drop-shadow-img-mode cursor-pointer"
    @click="openMode()"
  >
    <span><IconsImage width="2em" height="2em" color="#000" /></span>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

const modeOpen = ref(0);

const tl = gsap.timeline();
function openMode() {
  if (modeOpen.value === 0) {
    tl.to("#grid-mode", { duration: 0.1, translateY: -100 })
      .to("#backtop-mode", { duration: 0.1, translateX: -100 })
      .to("#zoomout-mode", { duration: 0.1, translateX: -50, translateY: -50 });
    modeOpen.value = 1;
  } else if (modeOpen.value === 1) {
    tl.reverse();
    modeOpen.value = 2;
  } else if (modeOpen.value === 2) {
    tl.restart();
    modeOpen.value = 1;
  }
}

function closeMode(mode) {
  modeOpen.value = 1;
  tl.reverse();
  modeOpen.value = 2;
  return mode;
}

function toTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMode("grid");
}
</script>

<style>
.drop-shadow-img-mode {
  filter: drop-shadow(0 5px 5px rgb(0 0 0 / 0.45));
}
</style>
