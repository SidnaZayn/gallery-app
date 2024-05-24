<template>
  <!-- <div class="flex hover:cursor-pointer bg-blue-200 h-[10%]" @mouseover="albumHover"> -->
  <div
    class="flex hover:cursor-pointer w-min h-fit shadow-sm"
    @mouseover="albumHover"
    @mouseleave="albumBack"
  >
    <!-- {{ albumimgs }} -->
    <img
      v-for="(img, i) in albumimgs"
      :src="img.img"
      alt="image"
      class="absolute rounded-lg border-2 shadow-sm w-24 object-cover max-h-16"
      :class="getImageClass(i)"
      :id="`img_${i}_${componentId}`"
    />
    <p class="mt-16 w-full font-josefin">{{ title ? title : "Albums" }}</p>
  </div>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  coverImgs: [],
  componentId: { type: String, required: true },
  title: { type: String },
});
const albumimgs = computed(() => {
  const ret = [];
  props.coverImgs.forEach((img, i) => {
    if (i < 4) {
      ret.push(img);
    }
  });
  return ret;
});
function getImageClass(i) {
  const classes = {
    "transition-all": i !== 0,
    "translate-x-4": i === 1,
    "translate-x-8": i === 2,
    "translate-x-12": i === 3,
  };
  return classes;
}

const tl = gsap.timeline();
let hovercount = 0;

const albumHover = () => {
  if (hovercount === 0) {
    let translateX = 20;
    props.coverImgs.forEach((img, i) => {
      if (i !== 0) {
        tl.to(
          `#img_${i}_${props.componentId}`,
          {
            duration: 0.1,
            translateX: translateX,
          },
          0
        );
        translateX += 20;
      }
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
