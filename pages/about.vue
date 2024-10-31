<template>
  <div class="container pt-[10rem] w-10/12 mx-auto">
    <div class="header flex justify-center items-center gap-8">
      <div class="p-6 rounded-full bg-slate-800 opacity-0" id="nuxt-icon">
        <NuxtImg src="/nuxt-icon.png" alt="logo" class="w-32" />
      </div>
      <div class="p-8 rounded-full bg-slate-800 opacity-0" id="gsap-icon">
        <NuxtImg src="/gsap-icon.png" alt="logo" class="w-32" />
      </div>
    </div>
    <p class="w-10/12 mx-auto mt-10 text-center opacity-0" id="excerpt">
      Galéria was build on Nuxt 3, Nuxt UI, and GSAP. <br />
      all images belong to their respective owners. checkout his amazing works
      <a href="https://www.pexels.com/@musaortac/">@musaortac</a> on Pexels.
      <br />
      <br />
      <span class="italic">
        For further information and collaboration, reach me out on my socials.
      </span>
    </p>
    <div class="flex justify-center items-center flex-col mt-20 gap-4 w-10/12 mx-auto" id="socials">
      <h3 class="font-josefin font-bold text-4xl">Connect <br />With Me</h3>

      <div class="flex gap-4">
        <a href="https://github.com/sidnazayn"
          ><IconsIconGithub width="1.5rem" height="1.5rem" color="#f8f8f8"
        /></a>
        <a href="https://www.linkedin.com/in/sidna-muahammad-zen-1a0898180"
          ><IconsIconLinkedin width="1.5rem" height="1.5rem" color="#f8f8f8"
        /></a>
        <a href="https://twitter.com/talkativepeeps"
          ><IconsIconTwitterX width="1.5rem" height="1.5rem" color="#f8f8f8"
        /></a>
        <a href="https://www.instagram.com/zyn_daily/"
          ><IconsIconInstagram width="1.5rem" height="1.5rem" color="#f8f8f8"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import transitionConfig from '../helpers/transitionConfig';

const animation = () => {
  const nuxtIcon = document.getElementById('nuxt-icon');
  const gsapIcon = document.getElementById('gsap-icon');
  const excerpt = document.getElementById('excerpt');
  const socials = document.getElementById('socials');
  gsap.to(nuxtIcon, {
    opacity: 1,
    duration: 0.5,
    delay: 1,
  });
  gsap.to(gsapIcon, {
    opacity: 1,
    duration: 0.5,
    delay: 1,
  });
  gsap.to(excerpt, {
    opacity: 1,
    duration: 0.5,
    delay: 1.2,
  });
  gsap.to(socials, {
    opacity: 1,
    duration: 0.5,
    delay: 1.4,
  });
};

definePageMeta({
  pageTransition: {
    ...transitionConfig,
    onAfterEnter: () => {
      animation();
    },
  },
});

onMounted(() => {
  animation();
});
</script>
