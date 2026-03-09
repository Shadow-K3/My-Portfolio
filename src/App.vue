<template>
  <div class="bg-[#0A192F] text-slate-400 font-mono text-lg min-h-screen relative selection:bg-teal-400/30 selection:text-teal-200">
    <FixedLeftSocials />
    
    <div class="max-w-5xl bg-[#4E4E4E]/10 mx-auto px-4 md:px-8">
        <Header />
        <router-view /> <!-- This is where Home / About / Projects pages will render -->

    </div>
    

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

onMounted(async () => {
  await nextTick();
  createIcons({icons}); // renders lucide icons
  initializeAnimations(); // runs your letter animation
  initializeDropdowns();
  initializeMobileMenu();
});
</script>