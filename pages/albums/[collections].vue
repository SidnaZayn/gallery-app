<template>
  <div>
    <ImageViewer
      :image-link="`/albums/${selectedImage.group}/${selectedImage.id}`"
      v-if="imageViewerActive"
      @close="imageViewerActive = false"
    />
    <div class="w-10/12 mx-auto py-10 min-h-[90vh] h-fit">
      <div class="rounded-xl shadow-2xl p-10">
        <div class="text-center mb-10">
          <h1 class="text-5xl font-yeseva tracking-widest">
            {{ collections }}
          </h1>
        </div>
        <!-- image list -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="grid gap-4 h-fit" v-for="(img, i) in thisAlbum" :key="i">
            <img
              :src="`/albums/${img.group}/${img.id}`"
              :alt="`${img.group}/${img.id}`"
              :id="`${img.group}_${i}`"
              class="min-h-[60vh] max-w-full rounded-lg object-cover cursor-pointer"
              @mouseenter="imgHover(img.group, i)"
              @mouseleave="imgBack(img.group, i)"
              @click="imgClick(img.group, i)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

const { collections } = useRoute().params;
const tl = gsap.timeline();
const selectedImage = ref({
  group: "",
  id: "",
});
const imageViewerActive = ref(false);

const albums = import.meta.glob("../../public/albums/**/*", {
  query: "?url",
  import: "default",
  eager: true,
});

const thisAlbum = computed(() => {
  const ret = [];
  Object.keys(albums).forEach((album, i) => {
    const al = album.replace("../../public/albums/", "");
    const group = al.split("/")[0];

    if (group == collections) {
      const id = al.split("/")[1];
      ret.push({ id: id, group: group });
    }
  });
  return ret;
});

const imgHover = (group, i) => {
  tl.to(`#${group}_${i}`, {
    duration: 0.3,
    scale: 1.1,
  },0);
};

const imgBack = (group, i) => {
  tl.to(`#${group}_${i}`, {
    duration: 0.3,
    scale: 1,
  });
};

const imgClick = (group, i) => {
  imageViewerActive.value = true;
  selectedImage.value = { group: group, id: i };
};
</script>
