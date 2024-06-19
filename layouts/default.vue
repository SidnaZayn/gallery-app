<template>
  <div class="bg-white dark:bg-slate-900 transition-colors duration-1000">
    <Header />
    <slot />
  </div>
</template>


<script setup>
useSeoMeta({
  title: "Galéria - Gallery App",
})
</script>
