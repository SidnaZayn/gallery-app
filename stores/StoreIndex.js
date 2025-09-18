import { gsap } from "gsap";
import { defineStore } from "pinia";

export const useStoreIndex = defineStore("index", () => {
  const ImageZoomIn = ref(false);
  const ImageGrid = ref(false);
  const tl = gsap.timeline();

  return { ImageZoomIn, ImageGrid, tl };
});