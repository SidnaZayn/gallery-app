import { defineStore } from "pinia";

export const useStoreIndex = defineStore("index", () => {
  const ImageZoomIn = ref(true);
  
  return { ImageZoomIn };
});
