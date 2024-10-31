<template>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[0%]" id="coba_1"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[10%]" id="coba_2"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[20%]" id="coba_3"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[30%]" id="coba_4"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[40%]" id="coba_5"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[50%]" id="coba_6"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[60%]" id="coba_7"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[70%]" id="coba_8"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[80%]" id="coba_9"></div>
  <div class="fixed z-50 bg-teal-900 h-[100vh] w-[10vw] right-[90%]" id="coba_10"></div>
  <div class="bg-white dark:bg-slate-900 transition-colors duration-1000">
    <Header />
    <slot />
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

const { toggleTransitionComplete } = useTransitionComposable();

useSeoMeta({
  title: 'Galéria - Gallery App',
  ogImage: 'https://galeria-zyn.netlify.app/mockup.png',
  ogUrl: 'https://galeria-zyn.netlify.app',
  ogDescription: 'easy use gallery app',
});
onMounted(() => {
  const el1 = document.getElementById('coba_1');
  const el2 = document.getElementById('coba_2');
  const el3 = document.getElementById('coba_3');
  const el4 = document.getElementById('coba_4');
  const el5 = document.getElementById('coba_5');
  const el6 = document.getElementById('coba_6');
  const el7 = document.getElementById('coba_7');
  const el8 = document.getElementById('coba_8');
  const el9 = document.getElementById('coba_9');
  const el10 = document.getElementById('coba_10');
  gsap
    .timeline({ paused: true, onComplete: () => toggleTransitionComplete(true) })
    .to(el1, { top: '-100%', duration: 0.3, delay: 0.3 })
    .to(el2, { top: '-100%', duration: 0.3, delay: -0.1 })
    .to(el3, { top: '-100%', duration: 0.5, delay: -0.4 })
    .to(el4, { top: '-100%', duration: 0.6, delay: -0.6 })
    .to(el5, { top: '-100%', duration: 0.2, delay: -0.2 })
    .to(el6, { top: '-100%', duration: 0.7, delay: -0.4 })
    .to(el7, { top: '-100%', duration: 0.2, delay: -0.6 })
    .to(el8, { top: '-100%', duration: 0.8, delay: -0.7 })
    .to(el9, { top: '-100%', duration: 0.3, delay: -0.9 })
    .to(el10, { top: '-100%', duration: 0.1, delay: -0.8 })
    .play();
});
// definePageMeta({
//   pageTransition: {
//     name: 'page-transiton',
//     mode: 'out-in',
//     onEnter: (el, done) => {
//       gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
//       gsap
//         .timeline({
//           paused: true,
//           onComplete() {
//             toggleTransitionComplete(true);
//             done();
//           },
//         })
//         .to(el, { autoAlpha: 1, xPercent: 0, duration: 3 })
//         .to(el, { scale: 1, duration: 3 })
//         .play();
//     },
//     onLeave: (el, done) => {
//       toggleTransitionComplete(false);
//       gsap
//         .timeline({ paused: true, onComplete: done })
//         .to(el, { scale: 0.8, duration: 3 })
//         .to(el, { xPercent: 100, autoAlpha: 0, duration: 3 })
//         .play();
//     },
//   },
// });
</script>
