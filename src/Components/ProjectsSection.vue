<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="works" class="relative mb-32">
    
    <div class="flex items-center justify-between mb-12">
      <div class="flex items-center flex-grow gap-4">
        <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
          <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
          {{ t('projects.title') }}
        </h2>
        <div class="h-[1px] bg-slate-800 flex-grow max-w-[400px] relative overflow-hidden">
          <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_3s_infinite]"></div>
        </div>
      </div>
      <router-link to="/projects" class="items-center hidden gap-2 font-mono text-sm transition-colors text-slate-400 hover:text-white whitespace-nowrap md:flex">
        {{ t('projects.viewAll') }} <span class="text-teal-400">~~></span>
      </router-link>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      
      <!-- Projet AI -->
      <div class="relative flex flex-col overflow-hidden transition-all border border-slate-800 bg-slate-900/40 hover:border-teal-400/40 group">
        <div class="absolute z-20 flex items-center gap-2 px-2 py-1 border top-3 right-3 bg-slate-900/90 backdrop-blur-sm border-teal-500/30">
          <span class="text-[8px] font-mono text-teal-400 uppercase tracking-tighter">{{ t('projects.list.ai.badge') }}</span>
        </div>
        <div class="relative h-48 overflow-hidden border-b border-slate-800 bg-slate-950">
          <img 
            src="../assets/images/Ai.png" 
            alt="Ai" 
            class="object-cover w-full h-full transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105" 
          />
        </div>
        <div class="p-2 border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80">
          FIGMA TAILWINDCSS JAVASCRIPT
        </div>
        <div class="flex flex-col flex-grow p-6">
          <h3 class="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{ t('projects.list.ai.title') }}</h3>
          <p class="flex-grow mb-6 text-sm leading-relaxed text-slate-400">{{ t('projects.list.ai.desc') }}</p>
          <button class="flex items-center gap-2 px-4 py-2 font-mono text-xs text-white transition-all border border-teal-400/50 hover:bg-teal-400/10 w-fit">
            {{ t('projects.demo') }} <span class="text-teal-400">&lt;~&gt;</span>
          </button>
        </div>
      </div>

      <!-- Projet Neura -->
      <div class="relative flex flex-col overflow-hidden transition-all border border-slate-800 bg-slate-900/40 hover:border-teal-400/40 group">
        <div class="absolute z-20 flex items-center gap-2 px-2 py-1 border top-3 right-3 bg-slate-900/90 backdrop-blur-sm border-teal-500/30">
          <span class="relative flex h-1.5 w-1.5">
            <span class="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
          </span>
          <span class="text-[8px] font-mono text-teal-400 uppercase tracking-tighter">{{ t('projects.list.neura.badge') }}</span>
        </div>
        <div class="relative h-48 overflow-hidden border-b border-slate-800 bg-slate-950">
          <img 
            src="../assets/images/Neura.png" 
            alt="Neura" 
            class="object-contain w-full h-full p-4 transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105" 
          />
        </div>
        <div class="p-2 border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80">
          FIGMA UI/UX DESIGN
        </div>
        <div class="flex flex-col flex-grow p-6">
          <h3 class="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{ t('projects.list.neura.title') }}</h3>
          <p class="flex-grow mb-6 text-sm leading-relaxed text-slate-400">{{ t('projects.list.neura.desc') }}</p>
          <button class="flex items-center gap-2 px-4 py-2 font-mono text-xs text-white transition-all border border-teal-400/50 hover:bg-teal-400/10 w-fit">
            {{ t('projects.design') }} <span class="text-teal-400">&lt;~&gt;</span>
          </button>
        </div>
      </div>

      <!-- Projet Saveurs -->
      <div class="relative flex flex-col overflow-hidden transition-all border border-slate-800 bg-slate-900/40 hover:border-teal-400/40 group">
        <div class="relative h-48 overflow-hidden border-b border-slate-800 bg-slate-950">
          <img 
            src="../assets/images/Saveurs.png" 
            alt="Saveurs" 
            class="object-cover w-full h-full transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105" 
          />
        </div>
        <div class="p-2 border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80">
          PHP LARAVEL TAILWIND SQL
        </div>
        <div class="flex flex-col flex-grow p-6">
          <h3 class="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{ t('projects.list.saveurs.title') }}</h3>
          <p class="flex-grow mb-6 text-sm leading-relaxed text-slate-400">{{ t('projects.list.saveurs.desc') }}</p>
          <button class="flex items-center gap-2 px-4 py-2 font-mono text-xs text-white transition-all border border-teal-400/50 hover:bg-teal-400/10 w-fit">
            {{ t('projects.root') }} <span class="text-teal-400">&lt;~&gt;</span>
          </button>
        </div>
      </div>

    </div>

    <!--  -->
  </section>
</template>

<style scoped>
/* Animation existante pour la barre de titre */
@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-[slide_3s_infinite] {
  animation: slide 3s infinite;
}
</style>