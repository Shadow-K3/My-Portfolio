<template>
  <footer class="pt-20 pb-12 mt-20 border-t border-slate-800">
    <div class="max-w-[1100px] mx-auto px-6">

      <div class="flex flex-col items-start justify-between gap-12 mb-16 md:flex-row">

        <div class="space-y-6">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div>
                <i data-lucide="box" stroke-width="2" class="w-4 h-4 text-teal-400"></i>
              </div>
              <span class="font-mono text-xl font-bold tracking-tighter text-white uppercase">
                Berol<span class="text-teal-400">_</span>
              </span>
            </div>

            <div
              class="flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase bg-slate-900/50 w-fit px-3 py-1.5 rounded-full border border-white/5">
              <span class="relative flex w-2 h-2">
                <span
                  class="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                <span class="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
              </span>
              {{ t('footer.status') }}: <span class="text-teal-400">{{ t('footer.online') }}</span>
            </div>
          </div>

            <p class="max-w-sm font-mono text-sm leading-relaxed text-slate-500">
            {{ t('footer.tagline') }} <br>
            {{ t('footer.location') }}
          </p>
        </div>

        <div class="flex flex-col w-full gap-6 md:items-end md:w-auto">
          <div class="space-y-2 md:text-right">
            <span class="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{{ t('footer.reachOut') }}</span>
            <a href="mailto:tchoumiberol816@gmail.com"
              class="block text-lg text-white transition-colors hover:text-teal-400">
              tchoumiberol816@gmail.com
            </a>
          </div>

          <div class="flex gap-6 pt-2">
            <a v-for="social in footerSocials" :key="social.name" :href="social.link" target="_blank"
              rel="noopener noreferrer"
              class="transition-all text-slate-500 hover:text-white hover:-translate-y-1 group">
              <i :data-lucide="social.icon" class="w-5 h-5" stroke-width="1.5"></i>
              <span class="sr-only">{{ social.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
        <span>© 2026 ROOT_ACCESS_GRANTED</span>
        <span class="hidden text-slate-800 md:block">----------</span>
        <span>{{ t('footer.madeWith') }} <span class="text-teal-500">Vue.js</span> // No Rights Reserved</span>
      </div>

    </div>
  </footer>
</template>


<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n' // 1. Importez useI18n
import { createIcons, ArrowRight, Box, Github, Figma, Linkedin, Mail, MessageSquare, ShieldCheck } from 'lucide'

// 2. Définissez 't' ici (sans locale)
const { t } = useI18n()

// ... le reste de vos données sociales et fonctions
const footerSocials = [
  { name: 'Github', icon: 'github', link: 'https://github.com/dashboard' },
  { name: 'Figma', icon: 'figma', link: 'https://www.figma.com' },
  { name: 'LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com/feed/' }
];

const refreshIcons = () => {
  setTimeout(() => {
    createIcons({
      icons: { Box, ArrowRight, Github, Figma, Linkedin, Mail, MessageSquare, ShieldCheck }
    })
  }, 10)
}

onMounted(() => {
  refreshIcons()
})
</script>