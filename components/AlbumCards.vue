<template>
  <div
    class="flex hover:cursor-pointer w-min h-fit shadow-sm"
    @mouseover="albumHover"
    @mouseleave="albumBack"
    >
    <NuxtImg
      v-for="(img, i) in albumimgs"
      :src="img.img"
      alt="image"
      class="absolute rounded-lg border-2 shadow-sm w-24 object-cover max-h-16 transition-all"
      :class="`translate-x-${i * translateVal}`"
      quality="25"
    />
    <p class="mt-16 w-full font-josefin">{{ title ? title : "Albums" }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  coverImgs: Array,
  componentId: { required: true },
  title: { type: String },
});

const translateVal = ref(4);

const albumimgs = computed(() => {
  const ret = [];
  props.coverImgs.forEach((img, i) => {
    if (i < 4) {
      ret.push(img);
    }
  });
  return ret;
});

const albumHover = () => {
  translateVal.value = 8;
};

const albumBack = () => {
  translateVal.value = 4
};
</script>
