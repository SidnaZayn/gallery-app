<script setup lang="ts">
import { defineComponent } from "vue";

defineProps({
  width: String,
  height: String,
  color: String,
});

defineComponent({
  name: "IcSharpDarkMode",
});
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24">
    <path
      :fill="color"
      d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"
    />
  </svg>
</template>
