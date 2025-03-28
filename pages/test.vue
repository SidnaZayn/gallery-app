<template>
  <div v-for="(img, i) in albums" :key="i">
    <AdvancedImage v-for="(j) in 4" :key="j"
      :cld-img="cloudinary.createImageInstance(`Galeria/${img}/${img}_${j + 1}`)"
      :plugins="cloudinary.plugins" />
  </div>
</template>

<script setup>
import { AdvancedImage } from "@cloudinary/vue";
const cloudinary = useCloudinary();
const albums = ['balloons']
</script>
