<template>
  <div>
    <div class="flex justify-center items-center min-h-screen">
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
      <div class="absolute inset-0 z-10 w-full h-full bg-white dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50"></div>
      <div class="absolute z-0 inset-0 overflow-hidden h-full">
        <div class="z-0 inset-0">
          <video height="1000" width="100%" autoplay loop class="w-full h-full object-cover">
            <source src="/hero-images/hero-vid-f.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
    <div class="min-w-max">
      <div v-for="(img, i) in thisAlbum" :key="i" class="panel w-screen h-screen" id="img-panel">
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
</template>

<script setup>
import { useWindowScroll, useWindowSize } from "@vueuse/core";
import { onMounted, watch, watchEffect } from "vue";
import { useStoreIndex } from "@/stores/StoreIndex";

const { x, y } = useWindowScroll();
const { height, width } = useWindowSize();
const imagesCount = ref(0);
const storeIndex = useStoreIndex();
const thisAlbum = ref([]);

watchEffect(() => {
  if (y.value >= 1560 && y.value % height.value == 0) {
    imagesCount.value = imagesCount.value + 1;
  }
});

onMounted(() => {
  imagesCount.value = 4;
});

const imgs_ = import.meta.glob("../public/albums/**/*", {
  query: "?url",
  import: "default",
  eager: true,
});

watch(imagesCount, () => {
  thisAlbum.value = [];
  Object.keys(imgs_).forEach((album, i) => {
    const al = album.replace("../public/albums/", "");
    const group = al.split("/")[0];
    if (i < imagesCount.value) {
      //check if last 4 letters are ".jpg" or ".png" or ".jpeg"
      if (group.split(".").length > 1) {
        thisAlbum.value.push({ id: group, group: false });
      } else {
        const id = al.split("/")[1];
        thisAlbum.value.push({ id: id, group: group });
      }
    }
  });
});
</script>
