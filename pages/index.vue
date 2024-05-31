<template>
  <div>
    <div class="flex justify-center items-center w-full min-h-screen">
      <div class="text-center">
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
    </div>
    <div v-if="storeIndex.ImageZoomIn">
      <div class="container-gsap flex min-w-max">
        <div
          v-for="(img, i) in thisAlbum"
          :key="i"
          class="panel w-screen h-screen"
          id="img-panel"
        >
          <img
            v-if="!img.group"
            :src="'/albums/' + img.id"
            :alt="`${img.id}_${i}`"
            class="w-full h-full max-h-screen object-cover"
            :class="[storeIndex.ImageZoomIn ? '' : 'shadow']"
          />
          <img
            v-else
            :src="`/albums/${img.group}/${img.id}`"
            :alt="`${img.id}_${i}`"
            class="w-full h-full max-h-screen object-cover"
            :class="[storeIndex.ImageZoomIn ? '' : 'shadow']"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="grid grid-cols-4">
        <div v-for="(img, i) in thisAlbum" :key="i" class="h-full w-full">
          <img
            v-if="!img.group"
            :src="'/albums/' + img.id"
            :alt="`${img.id}_${i}`"
            class="w-full h-full max-h-screen object-cover"
            :class="[storeIndex.ImageZoomIn ? '' : 'shadow']"
          />
          <img
            v-else
            :src="`/albums/${img.group}/${img.id}`"
            :alt="`${img.id}_${i}`"
            class="w-full h-full max-h-screen object-cover"
            :class="[storeIndex.ImageZoomIn ? '' : 'shadow']"
          />
        </div>
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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let sections = ref([]);
let widthPercent = ref(500);
const storeIndex = useStoreIndex();
// let tl = gsap.timeline();

onMounted(() => {
  sections.value = gsap.utils.toArray(".panel");
  widthPercent.value = (sections.value.length + 1) * 100;

  storeIndex.tl = storeIndex.tl.to(sections.value, {
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
