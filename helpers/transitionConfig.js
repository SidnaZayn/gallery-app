import gsap from 'gsap';

import { useTransitionComposable } from '../composables/useTransition';

const { toggleTransitionComplete } = useTransitionComposable();

const pageTransition = {
  name: 'page-transiton',
  mode: 'out-in',
  onEnter: (el_, done) => {
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
    // gsap.set(el1, { height: '100vh', duration: 3.5 });
    gsap
      .timeline({
        paused: true,
        onComplete() {
          toggleTransitionComplete(true);
          done();
        },
      })
      .to(el1, { top: '-100%', duration: 0.3, delay: 0.3 })
      .to(el2, { top: '-100%', duration: 0.3, delay: -0.1 })
      .to(el3, { top: '-100%', duration: 0.5, delay: -0.4 })
      .to(el4, { top: '-100%', duration: 0.6, delay: -0.6 })
      .to(el5, { top: '-100%', duration: 0.2, delay: -0.2 })
      .to(el6, { top: '-100%', duration: 0.7, delay: -0.4 })
      .to(el7, { top: '-100%', duration: 0.2, delay: -0.6 })
      .to(el8, { top: '-100%', duration: 0.4, delay: -0.7 })
      .to(el9, { top: '-100%', duration: 0.3, delay: -0.9 })
      .to(el10, { top: '-100%', duration: 0.1, delay: -0.8 })
      .play();
  },
  onLeave: (el_, done) => {
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
    toggleTransitionComplete(false);
    gsap
      .timeline({ paused: true, onComplete: done })
      .to(el1, { top: '00%', duration: 0.3, delay: 0.3 })
      .to(el2, { top: '00%', duration: 0.3, delay: -0.1 })
      .to(el3, { top: '00%', duration: 0.5, delay: -0.4 })
      .to(el4, { top: '00%', duration: 0.6, delay: -0.6 })
      .to(el5, { top: '00%', duration: 0.2, delay: -0.2 })
      .to(el6, { top: '00%', duration: 0.7, delay: -0.4 })
      .to(el7, { top: '00%', duration: 0.2, delay: -0.6 })
      .to(el8, { top: '00%', duration: 0.8, delay: -0.7 })
      .to(el9, { top: '00%', duration: 0.3, delay: -0.9 })
      .to(el10, { top: '00%', duration: 0.1, delay: -0.8 })
      .play();
  },
};

export default pageTransition;
