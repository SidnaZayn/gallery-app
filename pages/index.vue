<template>
  <div>
    <div class="flex justify-center items-center w-full min-h-screen bg-slate-400">
      <div class="text-center">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
    </div>
    <div class="container-gsap flex min-w-max">
      <div v-for="(img, i) in imgs" :key="i" class="panel w-screen h-screen">
        <img :src="img" :alt="`${img}_${i}`" class="w-full h-full max-h-screen object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let sections = ref([]);
let widthPercent = ref(500);
onMounted(() => {
  sections.value = gsap.utils.toArray(".panel");
  widthPercent.value = (sections.value.length + 1) * 100;
  
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

const imgs = ["emotions.jpg", "lake.jpg", "ocean.jpg", "polynesia.jpg", "village.jpg"];
</script>
