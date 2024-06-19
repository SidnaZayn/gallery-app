<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" :width="width" :height="height">
    <path
      fill="none"
      :stroke="color"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="48"
      d="M88 152h336M88 256h336M88 360h336"
    />
  </svg>
</template>

<script setup>
defineProps({
  width: String,
  height: String,
  color: String,
});
</script>
