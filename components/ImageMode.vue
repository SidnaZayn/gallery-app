<template>
  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white dark:bg-slate-800 cursor-pointer"
    id="grid-mode"
    :class="{ 'drop-shadow-img-mode': modeOpen === 1 }"
    @click="toGrid()"
    title="Grid Mode"
  >
    <span><IconsIconGrid width="2em" height="2em" :color="iconColor" /></span>
  </div>

  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white dark:bg-slate-800 cursor-pointer"
    id="backtop-mode"
    :class="{ 'drop-shadow-img-mode': modeOpen === 1 }"
    @click="toTop()"
    title="Back To Top"
  >
    <span
      ><IconsIconArrowUp width="2em" height="2em" :color="iconColor"
    /></span>
  </div>

  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white dark:bg-slate-800 cursor-pointer"
    id="zoomout-mode"
    :class="{ 'drop-shadow-img-mode': modeOpen === 1 }"
    @click="zoomInOut()"
    :title="storeIndex.ImageZoomIn ? 'Zoom Out' : 'Zoom In'"
  >
    <span v-if="!storeIndex.ImageZoomIn"
      ><IconsIconFullscreen width="2em" height="2em" :color="iconColor"
    /></span>
    <span v-else
      ><IconsIconZoomOut width="2em" height="2em" :color="iconColor"
    /></span>
  </div>

  <div
    class="fixed bottom-[5%] left-[90%] z-10 w-fit p-3 rounded-full bg-white dark:bg-slate-800 drop-shadow-img-mode cursor-pointer"
    @click="openMode()"
  >
    <span><IconsImage width="2em" height="2em" :color="iconColor" /></span>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { useStoreIndex } from "@/stores/StoreIndex";
const { $colorMode } = useNuxtApp();

const modeOpen = ref(0);
const storeIndex = useStoreIndex();
const emit = defineEmits(["to-carousel"]);

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

function zoomInOut() {
  storeIndex.ImageZoomIn = !storeIndex.ImageZoomIn; //console.log(storeIndex.ImageZoomIn);
  const tlZoom = gsap.timeline().to("#img-panel", {
    scale: storeIndex.ImageZoomIn ? 1 : 0.7,
  });
  closeMode("zoomout");
}

function toTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMode("grid");
}

function toGrid() {
  storeIndex.ImageGrid = !storeIndex.ImageGrid;
  const sections = gsap.utils.toArray(".panel");

  if (storeIndex.ImageGrid) {
    gsap.timeline().killTweensOf(sections);
    closeMode("grid");
  } else {
    emit("to-carousel");
    closeMode("grid");
    //   tl.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".container-gsap",
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     end: () => "+=" + document.querySelector(".container-gsap").offsetWidth,
    //   },
    // });
  }
}

const iconColor = computed(() => {
  return $colorMode.value === "dark" ? "#fff" : "#000";
});
</script>

<style>
.drop-shadow-img-mode {
  filter: drop-shadow(0 5px 5px rgb(0 0 0 / 0.45));
}
</style>
