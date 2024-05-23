<template>
  <!-- <div class="flex hover:cursor-pointer bg-blue-200 h-[10%]" @mouseover="albumHover"> -->
  <div class="flex hover:cursor-pointer bg-blue-200 w-fit h-fit rounded-lg border-2 shadow-sm" @mouseover="albumHover"
    @mouseleave="albumBack">
    <img v-for="(img, i) in coverImgs" :src="img.img" alt="image"
      class="absolute rounded-lg border-2 shadow-sm w-24 object-cover" :class="getImageClass(i)"
      :id="`img_${i}_${componentId}`" />
  </div>
</template>

<script setup>
import gsap from "gsap";

const props = defineProps({
  coverImgs: [],
  componentId: { type: String, required: true },
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
        translateX += 20
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
