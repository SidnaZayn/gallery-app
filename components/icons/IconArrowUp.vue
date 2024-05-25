<script setup lang="ts">
import { defineComponent } from "vue";

const props = defineProps({
    width: String,
    height: String,
    color:String
})

defineComponent({
  name: "RiArrowUpSLine",
});
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <path
      :fill="color"
      d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"
    />
  </svg>
</template>
