<template>
  <div>
    <ImageMode />
    <div class="flex justify-center items-center w-full min-h-screen">
      <div class="text-center z-20">
        <h1 class="font-yeseva text-5xl tracking-widest">Galéria</h1>
        <h3 class="font-josefin m-0 mt-10 p-0">Scroll</h3>
        <span class="mx-auto inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style="display: inline"
            class="animate-bounce"
          >
            <path
              fill="#bf1d1d"
              d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
            />
          </svg>
        </span>
      </div>
      <div
        class="absolute inset-0 z-10 w-full h-full bg-white dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50"
      ></div>
      <div class="absolute z-0 inset-0 h-full">
        <div class="z-0 inset-0 h-full w-full">
          <img
            v-if="width < 768"
            src="/hero-images/on-mobilepng.png"
            alt="img-bg-mobile"
            class="w-full h-full object-none object-top"
          />
          <video
            v-else
            height="1000"
            width="100%"
            autoplay
            loop
            muted
            class="w-full h-full object-cover"
          >
            <source src="/hero-images/hero-vid-f-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        class="absolute z-30 w-full h-auto bg-white dark:bg-slate-800 bottom-0 py-4"
      >
        <div
          v-if="$colorMode.preference === 'dark'"
          class="dark-spacer-pattern h-[40px]"
        ></div>
        <div v-else class="spacer-pattern h-[40px]"></div>
      </div>
    </div>
    <div>
      <div class="container-gsap flex min-w-max">
        <template v-if="imageInstances.length > 0">
          <div class="panel w-screen h-screen" id="img-panel" v-for="(img, i) in albums" :key="i">
            <NuxtImg
              :src="`https://res.cloudinary.com/dqyh4h3oi/image/upload/f_auto/v1/Galeria/${img}/${img}_1`"
              alt="image"
              class="w-full h-full max-h-screen object-cover"
              :class="[
                storeIndex.ImageZoomIn ? '' : 'drop-shadow-img-mode rounded-xl',
              ]"
              loading="lazy"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { onMounted } from "vue";
import { useStoreIndex } from "@/stores/StoreIndex";
import { useWindowSize } from "@vueuse/core";

import transitionConfig from "../helpers/transitionConfig";

const cloudinary = useCloudinary();
const albums = ["balloons", "buildings", "horses", "warm"];
const imageInstances = computed(() => {
  const ret = [];
  albums.forEach((album) => {
    for (let i = 1; i <= 4; i++) {
      ret.push(
        cloudinary.createImageInstance(`Galeria/${album}/${album}_${i}`).toURL()
      );
    }
  });
  return ret;
});

definePageMeta({
  pageTransition: transitionConfig,
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let sections = ref([]);
const storeIndex = useStoreIndex();
const { $colorMode } = useNuxtApp();
const { width } = useWindowSize();

onMounted(() => {
  sections.value = gsap.utils.toArray(".panel");
  // toCarousel;
  gsap.to(sections.value, {
    xPercent: -100 * (sections.value.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container-gsap",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.value.length - 1),
      end: () => "+=" + document.querySelector(".container-gsap").offsetWidth,
    },
  });
});

const imgs_ = import.meta.glob("../public/albums/**/*", {
  query: "?url",
  import: "default",
  eager: true,
});

const thisAlbum = computed(() => {
  const ret = [];
  Object.keys(imgs_).forEach((album, i) => {
    const al = album.replace("../public/albums/", "");
    const group = al.split("/")[0];
    //check if last 4 letters are ".jpg" or ".png" or ".jpeg"
    if (group.split(".").length > 1) {
      ret.push({ id: group, group: false });
    } else {
      const id = al.split("/")[1];
      ret.push({ id: id, group: group });
    }
  });
  return ret;
});
</script>

<style>
.spacer-pattern {
  --s: 20px;
  /* control the size*/
  --c1: #ffffff;
  --c2: #1f2a38;

  --_g: var(--c1) 90deg, #0000 90.5deg;
  background: conic-gradient(from -45deg, var(--_g)),
    conic-gradient(from 135deg, var(--_g)) calc(var(--s) / 2) 0, var(--c2);
  background-size: var(--s) var(--s);
}

.dark-spacer-pattern {
  --s: 20px;
  /* control the size*/
  --c1: #1e293b;
  --c2: #3a6961;

  --_g: var(--c1) 90deg, #0000 90.5deg;
  background: conic-gradient(from -45deg, var(--_g)),
    conic-gradient(from 135deg, var(--_g)) calc(var(--s) / 2) 0, var(--c2);
  background-size: var(--s) var(--s);
}
</style>
