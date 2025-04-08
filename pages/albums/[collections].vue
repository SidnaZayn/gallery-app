<template>
  <div>
    <ImageViewer
      :image-link="`${selectedImage.group}`"
      v-if="imageViewerActive"
      @close="imageViewerActive = false"
    />
    <div class="flex justify-center items-center h-[100vh]">
      <div class="w-10/12 mx-auto py-12 h-fit">
        <div class="rounded-xl shadow-2xl px-10 py-14">
          <div class="text-center mb-10">
            <h1 class="text-5xl font-yeseva tracking-widest">
              {{ collections }}
            </h1>
          </div>
          <!-- image list -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              class="grid gap-4 h-fit"
              v-for="(img, i) in thisAlbum"
              :key="i"
            >
              <NuxtImg
                :src="img"
                :alt="`${collections}/${i}`"
                :id="`${collections}_${i}`"
                class="min-h-[60vh] max-w-full rounded-lg object-cover cursor-pointer"
                @mouseenter="imgHover(collections, i)"
                @mouseleave="imgBack(collections, i)"
                @click="imgClick(img, i)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import transitionConfig from "../../helpers/transitionConfig";

definePageMeta({
  pageTransition: transitionConfig,
});

const cloudinary = useCloudinary();

const { collections } = useRoute().params;
const tl = gsap.timeline();
const selectedImage = ref({
  group: "",
  id: "",
});
const imageViewerActive = ref(false);

const thisAlbum = computed(() => {
  const ret = [];
  for (let i = 1; i < 5; i++) {
    const img = cloudinary.createImageInstance(
      `Galeria/${collections}/${collections}_${i}`
    );
    ret.push(img);
  }
  return ret;
});

const imgHover = (group, i) => {
  tl.to(
    `#${group}_${i}`,
    {
      duration: 0.3,
      scale: 1.1,
    },
    0
  );
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
