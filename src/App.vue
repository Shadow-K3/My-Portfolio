<template>
  <div
    class="bg-[#0A192F] text-slate-400 font-mono text-lg min-h-screen relative selection:bg-teal-400/30 selection:text-teal-200">
    <FixedLeftSocials />

    <div class="max-w-5xl bg-[#4E4E4E]/10 mx-auto px-4 md:px-8">
      <Header />
      <router-view /> 

    </div>
    <BackToTop />

    <Footer />
  </div>
</template>

<script setup>
import Header from './Components/Header.vue'
import Footer from './Components/Footer.vue'
import FixedLeftSocials from './Components/FixedLeftSocials.vue'
import { createIcons, icons } from "lucide";
import { onMounted, nextTick } from 'vue';
import { initializeAnimations, initializeDropdowns, initializeMobileMenu } from './assets/index.js';
import BackToTop from './Components/BackToTop.vue';


onMounted(async () => {
  await nextTick();
  createIcons({ icons }); 
  initializeAnimations(); 
  initializeDropdowns();
  initializeMobileMenu();
});
</script>


<style>
    /* Pour toute la page (scrollbar du navigateur entier) */
    html,
    body {
      scrollbar-color: teal #222;
      /* thumb (curseur) puis track (fond) */
      scrollbar-width: normal;
      /* thin / auto / none */
    }

    /* Ou pour un élément spécifique (ex: une div avec overflow) */
    .ma-div-avec-scroll {
      scrollbar-color: teal #3e70ba;
      /* exemple : teal pour le curseur, fond sombre */
      scrollbar-width: thin;
    }
</style>