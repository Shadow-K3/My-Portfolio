<template>
  <div class="bg-[#0A192F] text-slate-400 font-mono text-lg min-h-screen relative selection:bg-teal-400/30 selection:text-teal-200">
    <FixedLeftSocials />

    <div class="max-w-5xl bg-[#4E4E4E]/10 mx-auto px-4 md:px-8">
      <Header />
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view> 
    </div>

    <BackToTop />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, watch, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import Header from './Components/Header.vue';
import Footer from './Components/Footer.vue';
import FixedLeftSocials from './Components/FixedLeftSocials.vue';
import BackToTop from './Components/BackToTop.vue';
import { createIcons, icons } from "lucide";
import { initializeAnimations, initializeDropdowns, initializeMobileMenu } from './assets/index.js';

const route = useRoute();
let observer = null;

const runScripts = () => {
  // On vérifie si les éléments d'animation existent dans le DOM
  const animElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animElements.length > 0) {
    createIcons({ icons }); 
    initializeAnimations(); 
    initializeDropdowns();
    initializeMobileMenu();
    
    // Une fois les animations trouvées et lancées, on peut arrêter l'observer
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }
};

const initWithRetry = async () => {
  await nextTick();
  
  // 1. Essai immédiat
  runScripts();

  // 2. Observer pour guetter l'arrivée du contenu via le router-view
  if (observer) observer.disconnect();
  
  observer = new MutationObserver(() => {
    runScripts();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

onMounted(initWithRetry);

// Ré-initialiser lors du changement de page
watch(() => route.path, () => {
  setTimeout(initWithRetry, 100);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style>
    html, body {
      scrollbar-color: teal #222;
      scrollbar-width: normal;
    }
</style>