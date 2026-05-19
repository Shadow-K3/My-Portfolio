<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { createIcons, Github, ExternalLink, FileText, Download } from 'lucide';

const { t, locale } = useI18n({ useScope: 'global' });
const isDownloading = ref(false);
const downloadProgress = ref(0);

const { t } = useI18n()

// Gestion des icônes Lucide
const refreshIcons = () => {
  setTimeout(() => {
    createIcons({ icons: { Github, ExternalLink, FileText, Download } });
  }, 50);
};

onMounted(refreshIcons);
watch(locale, refreshIcons);

// Tableaux utilisant les CLÉS de traduction
const completeApps = [
  { title: 'News Letter page', descKey: 'projectsPage.news', tech: 'VUE.js TAILWINDCSS LARAVEL', image: new URL('../assets/images/articles.png', import.meta.url).href, secure: true },
  { title: 'Coffee Shop Website', descKey: 'projectsPage.coffee', tech: 'FIGMA TAILWINDCSS JAVASCRIPT', image: new URL('../assets/images/coffee.png', import.meta.url).href, secure: true },
  { title: 'EliteStore E-commerce', descKey: 'projectsPage.elite', tech: 'FIGMA TAILWINDCSS JAVASCRIPT', image: new URL('../assets/images/EliteStore.png', import.meta.url).href, secure: true },
  { title: 'Energy Management Dashboard', descKey: 'projectsPage.energy', tech: 'FIGMA TAILWINDCSS JAVASCRIPT', image: new URL('../assets/images/Energy.png', import.meta.url).href, secure: true },
  { title: 'Modern Portfolio', descKey: 'projectsPage.port', tech: 'VUE.js THREE.JS TAILWIND', image: new URL('../assets/images/portfolio.png', import.meta.url).href, secure: true }
];

const smallProjects = [
  { title: 'Facebook Clone', tech: 'HTML CSS JS', descKey: 'projectsPage.fb' },
  { title: 'Orange Cam Clone', tech: 'TAILWIND JS', descKey: 'projectsPage.orange' },
  { title: 'Instagram Mobile', tech: 'DART FLUTTER', descKey: 'projectsPage.insta' },
  { title: 'Medinova Hospital', tech: 'TAILWIND JS', descKey: 'projectsPage.medi' },
  { title: 'UBA Website Clone', tech: 'TAILWIND JS', descKey: 'projectsPage.uba' },
  { title: 'Camtel Clone', tech: 'HTML CSS JS', descKey: 'projectsPage.camtel' }
];

const downloadCV = () => {
  if (isDownloading.value) return;
  isDownloading.value = true;
  const interval = setInterval(() => {
    downloadProgress.value += 10;
    if (downloadProgress.value >= 100) {
      clearInterval(interval);
      const link = document.createElement('a');
      link.href = '/CV_BEROL.pdf'; 
      link.download = 'CV_BEROL.pdf';
      link.click();
      setTimeout(() => { isDownloading.value = false; downloadProgress.value = 0; }, 1000);
    }
  }, 100);
};
</script>

<template>
  <div class="min-h-screen font-sans text-slate-300 selection:bg-teal-500/30">
    
    <div class="max-w-[1100px] mx-auto  pt-24 pb-12 relative z-10">
      
      <div class="mb-20">
        <router-link to="/" class="flex items-center gap-2 mb-8 font-mono text-sm text-teal-400 transition-colors hover:text-white group">
          <span class="transition-transform group-hover:-translate-x-1"><~~</span> {{ t('projectsPage.backHome') }}
        </router-link>
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-white uppercase md:text-5xl">
          <span class="text-teal-400">/</span>{{ t('projectsPage.title') }}
        </h1>
        <p class="font-mono text-lg italic text-slate-400">{{ t('projectsPage.subtitle') }}</p>
      </div>

      <section class="mb-24">
        <h2 class="flex items-center gap-4 mb-12 font-mono text-2xl font-bold text-white uppercase">
          <span class="text-teal-400">#</span>{{ t('projectsPage.apps') }}
          <div class="h-[1px] flex-1 bg-slate-800"></div>
        </h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="app in completeApps" :key="app.title" class="relative flex flex-col border border-slate-800 bg-slate-900/50 hover:border-teal-400/50 group">
            <div v-if="app.secure" class="absolute z-30 flex items-center gap-2 px-2 py-1 border top-3 right-3 bg-slate-900/90 border-teal-500/50">
                <span class="text-[9px] font-mono text-teal-400 uppercase font-bold">SECURE_CORE</span>
            </div>
            <div class="relative h-48 overflow-hidden border-b border-slate-800">
              <!-- Image modifiée : grayscale uniquement sur desktop (md:) -->
              <img :src="app.image" :alt="app.title" class="object-cover w-full h-full transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110" />
            </div>
            <div class="p-2 border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80">
              {{ app.tech }}
            </div>
            <div class="flex flex-col flex-grow p-6">
              <h3 class="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{ app.title }}</h3>
              <p class="flex-grow mb-6 text-sm leading-relaxed text-slate-400">{{ t(app.descKey) }}</p>
              <a href="#" class="flex items-center gap-2 px-4 py-2 font-mono text-xs text-white border border-teal-400 hover:bg-teal-400/10 w-fit">
                <i data-lucide="github" class="w-3.5 h-3.5"></i> SOURCE_CODE <span class="text-teal-400">~~></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-24">
        <h2 class="flex items-center gap-4 mb-12 font-mono text-2xl font-bold text-white uppercase">
          <span class="text-teal-400">#</span>{{ t('projectsPage.small') }}
          <div class="h-[1px] flex-1 bg-slate-800"></div>
        </h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="p in smallProjects" :key="p.title" class="p-5 border border-l-2 border-slate-800 bg-slate-900/30 hover:border-teal-400/30 hover:border-l-teal-400 group">
            <div class="text-[10px] font-mono text-teal-400/70 mb-2 uppercase">{{ p.tech }}</div>
            <h3 class="mb-2 text-lg font-bold text-white">{{ p.title }}</h3>
            <p class="mb-4 text-xs italic text-slate-400">{{ t(p.descKey) }}</p>
            <a href="#" class="flex items-center gap-2 text-[10px] font-mono text-slate-500 hover:text-teal-400 uppercase">
              <i data-lucide="external-link" class="w-3 h-3"></i> Open_Source
            </a>
          </div>
        </div>
      </section>

      <section class="relative p-8 border border-slate-800 bg-slate-900/40 md:p-12 group/cv">
          <div class="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                  <h2 class="flex items-center gap-3 mb-2 font-mono text-2xl font-bold text-white">
                    <i data-lucide="file-text" class="text-teal-400"></i>
                    <span class="text-teal-400">></span> {{ t('projectsPage.cv.filename') }}
                  </h2>
                  <p class="text-slate-400">{{ t('projectsPage.cv.desc') }}</p>
              </div>
              <button @click="downloadCV" class="relative px-10 py-4 font-mono text-white border border-teal-400 hover:bg-teal-400/10 active:scale-95">
                  <span v-if="!isDownloading" class="flex items-center gap-3 italic uppercase">
                    <i data-lucide="download" class="w-4 h-4"></i> {{ t('projectsPage.cv.btn') }}
                  </span>
                  <span v-else class="text-teal-400 uppercase">
                    {{ t('projectsPage.cv.loading') }} {{ downloadProgress }}%
                  </span>
                  <div :style="{ width: downloadProgress + '%' }" class="absolute bottom-0 left-0 h-[2px] bg-teal-400 transition-all duration-300"></div>
              </button>
          </div>
      </section>

    </div>
  </div>
</template>