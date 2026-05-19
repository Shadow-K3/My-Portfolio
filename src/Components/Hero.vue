<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
// import back from '@/assets/images/back.png'
import backImg from '@/assets/images/back.png';
import meImg from '@/assets/images/me.png';

const { t, locale } = useI18n({ useScope: 'global' })

const displayedTitle = ref("")
const titleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = ref(100)

// Fonction pour récupérer le titre actuel de manière sécurisée
const getCurrentFullText = () => {
  return t(`hero.titles[${titleIndex.value}]`)
}

const typeEffect = () => {
  const currentFullText = getCurrentFullText()
  
  if (isDeleting.value) {
    displayedTitle.value = currentFullText.substring(0, charIndex.value - 1)
    charIndex.value--
    typingSpeed.value = 50 
  } else {
    displayedTitle.value = currentFullText.substring(0, charIndex.value + 1)
    charIndex.value++
    typingSpeed.value = 100
  }

  // Logique de pause et de changement
  if (!isDeleting.value && charIndex.value === currentFullText.length) {
    isDeleting.value = true
    typingSpeed.value = 2000 
  } else if (isDeleting.value && charIndex.value === 0) {
    isDeleting.value = false
    titleIndex.value = (titleIndex.value + 1) % 4 
    typingSpeed.value = 500 
  }

  setTimeout(typeEffect, typingSpeed.value)
}

// Reset si on change de langue pour éviter les bugs d'index
watch(locale, () => {
  charIndex.value = 0
  isDeleting.value = false
  displayedTitle.value = ""
})

onMounted(() => {
  typeEffect()
})
</script>

<template>
  <div class="overflow-hidden font-sans text-white">
    
    <section 
      class="container px-6 flex flex-col md:flex-row items-center justify-between mb-24 gap-12 relative min-h-[80vh] bg-cover bg-center bg-no-repeat mx-auto"
      :style="{ backgroundImage: `url(${backImg})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/95 to-transparent z-0 opacity-95"></div>

      <div class="relative z-10 md:w-1/2">
        <div class="min-h-[140px] md:min-h-[160px]">
          <h1 class="text-3xl md:text-[2.5rem] font-bold tracking-tight text-white mb-2 leading-tight">
            {{ t('hero.isA') }}
          </h1>
          <h2 class="text-4xl md:text-[3rem] font-bold tracking-tight text-teal-400 leading-tight flex items-center">
            {{ displayedTitle }}
            <span class="inline-block w-1 h-10 ml-2 bg-teal-400 animate-pulse"></span>
          </h2>
        </div>
        
        <p class="text-lg text-slate-300 mt-6 mb-10 max-w-[28rem] leading-relaxed">
          {{ t('hero.description') }}
        </p>
        
        <button class="px-8 py-3 font-mono text-lg transition-all border border-slate-700 text-slate-300 hover:bg-teal-400/10 hover:text-teal-400 hover:border-teal-400/50 group">
          {{ t('hero.cta') }} <span class="inline-block transition-transform group-hover:translate-x-1">>_</span>
        </button>
      </div>

      <div class="relative z-10 flex justify-center md:w-1/2 md:justify-end">
        <div class="relative w-80 h-96">
          
          <div class="absolute -top-8 right-32 z-0 w-64 h-64 pointer-events-none opacity-60 filter drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
            <svg width="100%" height="100%" viewBox="0 0 156 156" fill="none">
              <defs>
                <filter id="glow-skills"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#1e293b" stroke-width="1" />
              <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#1e293b" stroke-width="1" />
              <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="40 120" filter="url(#glow-skills)">
                <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="40 120" filter="url(#glow-skills)">
                <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" begin="2s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>

          <div class="relative z-10 flex items-end justify-center w-full h-full overflow-hidden rounded-lg shadow-2xl group shadow-black/70 bg-[#0B1120]/50 build-border">
            <div class="absolute z-20 w-4 h-4 transition-opacity border-t-2 border-l-2 border-teal-400 opacity-0 top-2 left-2 group-hover:opacity-100"></div>
            <div class="absolute z-20 w-4 h-4 transition-opacity border-b-2 border-r-2 border-teal-400 opacity-0 bottom-2 right-2 group-hover:opacity-100"></div>
            
            <img
              :src="meImg"
              alt="Berol"
              class="w-[95%] -top-[15%] relative h-[95%] object-cover object-top group-hover:scale-105 transition-all duration-700"
            />
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent bg-[length:100%_10px] animate-scan pointer-events-none"></div>
          </div>

          <div class="absolute bottom-11 left-[-2rem] md:left-2 border border-slate-700 bg-[#0B1120] p-1 pl-4 pr-6 flex items-center gap-3 text-xs text-slate-400 z-30 shadow-xl shadow-black/50 rounded">
            <div class="w-3 h-3 bg-teal-400 animate-pulse"></div>
            {{ t('hero.currentProject') }}
            <span class="font-mono font-bold text-indigo-400">SafeWatch360</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>