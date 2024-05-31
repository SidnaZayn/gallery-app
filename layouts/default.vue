<template>
  <div class="bg-white dark:bg-slate-900">
    <Header />
    <ImageMode  />
    <slot />
  </div>
</template>


<script setup>
useSeoMeta({
  title: "Galéria - Gallery App",
})
</script>
