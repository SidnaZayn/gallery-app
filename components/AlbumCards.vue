<template>
  <!-- <div class="flex hover:cursor-pointer bg-blue-200 h-[10%]" @mouseover="albumHover"> -->
  <div
    class="flex hover:cursor-pointer bg-blue-200 w-fit h-fit rounded-lg border-2 shadow-sm"
    @mouseover="albumHover"
    @mouseleave="albumBack"
  >
    <img
      v-for="(img, i) in coverImgs"
      :src="img.img"
      alt="image"
      class="absolute rounded-lg border-2 shadow-sm w-24 object-cover"
      :class="{ 'w-24': i === 0 }"
      :id="`img_${img.id}_${componentId}`"
    />
    <!-- <img
      src="/lake.jpg"
      alt="lake.jpg_3"
      class="absolute rounded-lg border-2 shadow-sm w-24 object-cover translate-x-8 transition-all"
      :id="`img_3_${componentId}`"
    /> -->
  </div>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  coverImgs: [],
  componentId: { type: String, required: true },
});

const tl = gsap.timeline();
let hovercount = 0;
const albumHover = () => {
  if (hovercount === 0) {
    let translateX = 0;
    props.coverImgs.forEach((img) => {
      translateX += 20;
      tl.to(
        `#img_${img.id}_${props.componentId}`,
        {
          duration: 0.1,
          translateX: translateX,
        },
        0
      );
    });

    hovercount++;
  } else {
    tl.restart();
  }
};

const albumBack = () => {
  tl.reverse();
};
</script>
