<template>
  <div class="flex justify-center items-center h-[100vh]">
    <div
      class="w-10/12 mx-auto h-[50%] bg-white dark:bg-slate-800 rounded-xl shadow-2xl"
    >
      <div class="p-6 md:p-10 h-[100%]">
        <div class="text-center mb-10">
          <h1 class="text-5xl font-yeseva tracking-widest">Thè Albums</h1>
        </div>
        <!-- {{ new_albums }} -->
        <div
          class="w-full grid gap-x-24 gap-y-20 justify-center items-center"
          :class="isMobile ? 'grid-cols-2' : 'grid-cols-4'"
        >
          <template v-for="(album, i) in newAlbum" :key="i">
            <AlbumCards
              :component-id="i"
              :cover-imgs="album.imgs"
              :title="album.group"
              :cloudinaryURL="album.imgs.map((img) => img.img)"
              @click="albumClick(album.group)"
            ></AlbumCards>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
import transitionConfig from "../../helpers/transitionConfig";

definePageMeta({
  pageTransition: transitionConfig,
});

const { width } = useWindowSize();
const router = useRouter();
const isMobile = computed(() => width.value < 768);

const albums = ref(["balloons", "buildings", "horses", "warm"]);

const newAlbum = computed(() => {
  const retVal = albums.value.map((album, i) => {
    const imgsLink = [];
    const itr = 4;
    for (let num = 0; num < itr; num++) {
      imgsLink.push({ img: `Galeria/${album}/${album}_${num + 1}`, id: num });
    }
    return { group: album, imgs: imgsLink };
  });
  return retVal;
});

const albumClick = (group) => {
  router.push("/albums/" + group);
};
</script>
