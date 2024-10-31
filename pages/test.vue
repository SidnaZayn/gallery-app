<template>
  <div>
    <div class="flex justify-center items-center min-h-screen">
      <div class="text-center z-20">
        <h1 class="font-yeseva text-5xl tracking-widest">Galéria</h1>
        <h3 class="font-josefin m-0 mt-10 p-0">Scroll</h3>
        <span class="mx-auto inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            style="display: inline"
            class="animate-bounce"
          >
            <path
              fill="#bf1d1d"
              d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
            />
          </svg>
        </span>
      </div>
      <!-- <div class="absolute inset-0 z-10 w-full h-full bg-white dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50"></div> -->
      <div class="absolute z-0 inset-0 overflow-hidden h-full">
        <div class="z-0 inset-0">
          <video height="1000" width="100%" autoplay loop muted class="w-full h-full">
            <source src="/hero-images/hero-vid-f.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import transitionConfig from '../helpers/transitionConfig';

definePageMeta({
  pageTransition: transitionConfig,
});
</script>
