<template>
  <div
    class="flex hover:cursor-pointer w-min-[300px] h-fit shadow-sm"
    @mouseover="albumHover"
    @mouseleave="albumBack"
  >
    <NuxtImg
      v-for="(img, i) in imgsDisplay"
      :src="`${img}`"
      alt="image"
      class="absolute rounded-lg border-2 shadow-sm w-24 object-cover max-h-16 transition-all"
      :class="`translate-x-${i * translateVal}`"
      :style="{ 'z-index': 4 - i }"
    />
    <p class="mt-16 w-full font-josefin">{{ title ? title : "Albums" }}</p>
  </div>
</template>

<script setup>

const cloudinary = useCloudinary();
const props = defineProps({
  coverImgs: Array,
  componentId: { required: true },
  title: { type: String },
});

const translateVal = ref(0);

const imgsDisplay = computed(() => {
  return props.coverImgs.map((img, i) => {
    return cloudinary.createMiniImage(img.img)
  });
});

const albumHover = () => {
  translateVal.value = 4;
};

const albumBack = () => {
  translateVal.value = 0;
};
</script>

<style>
.translate-x-0 {
  transform: translateX(0);
}

.translate-x-4 {
  transform: translateX(1rem);
}

.translate-x-8 {
  transform: translateX(2rem);
}

.translate-x-12 {
  transform: translateX(3rem);
}
</style>
