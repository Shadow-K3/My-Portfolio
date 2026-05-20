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
import { currentLocale } from '@/composables/useLocale';

const route = useRoute();
let observer = null;

const runScripts = () => {
  const animElements = document.querySelectorAll('.animate-on-scroll');
  if (animElements.length > 0) {
    createIcons({ icons }); 
    initializeAnimations(); 
    initializeDropdowns();
    initializeMobileMenu();
    
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }
};

const initWithRetry = async () => {
  await nextTick();
  runScripts();

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

// Re-initialize scripts on route change (page navigation)
watch(() => route.path, () => {
  setTimeout(initWithRetry, 100);
});

// Re-initialize scripts when locale changes (but do NOT rebuild the whole app)
watch(currentLocale, () => {
  // Small delay to let the DOM update with new translations
  setTimeout(() => {
    runScripts();
  }, 50);
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