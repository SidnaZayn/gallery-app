import {gsap} from "gsap";
import { defineStore } from "pinia";

export const useStoreIndex = defineStore("index", () => {
  const ImageZoomIn = ref(true);
  const tl = gsap.timeline()
  
  return { ImageZoomIn, tl };
});
