<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const displayedTitle = ref("")
const titleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = ref(100)

// Fonction pour récupérer le titre actuel de manière sécurisée
const getCurrentFullText = () => {
  // On récupère le titre à l'index actuel (ex: hero.titles.0, hero.titles.1)
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
    // On passe au titre suivant (il y a 4 titres : 0, 1, 2, 3)
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
      style="background-image: url('/src/assets/images/back.avif');" 
    >
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/95 to-transparent z-0 opacity-95"></div>

      <div class="relative z-10 md:w-1/2">
        <div class="min-h-[140px] md:min-h-[160px]">
          <h1 class="text-3xl md:text-[2.5rem] font-bold tracking-tight text-white mb-2 leading-tight">
            {{ $t('hero.isA') }}
          </h1>
          <h2 class="text-4xl md:text-[3rem] font-bold tracking-tight text-teal-400 leading-tight flex items-center">
            {{ displayedTitle }}
            <span class="inline-block w-1 h-10 ml-2 bg-teal-400 animate-pulse"></span>
          </h2>
        </div>
        
        <p class="text-lg text-slate-300 mt-6 mb-10 max-w-[28rem] leading-relaxed">
          {{ $t('hero.description') }}
        </p>
        
        <button class="px-8 py-3 font-mono text-lg transition-all border border-slate-700 text-slate-300 hover:bg-teal-400/10 hover:text-teal-400 hover:border-teal-400/50 group">
          {{ $t('hero.cta') }} <span class="inline-block transition-transform group-hover:translate-x-1">>_</span>
        </button>
      </div>

      <div class="relative z-10 flex justify-center md:w-1/2 md:justify-end">
        <div class="relative w-80 h-96">
          
          <div class="absolute top-0 z-0 w-64 h-64 pointer-events-none right-12 md:right-24 opacity-80">
            </div>

          <div class="relative z-10 flex items-end justify-center w-full h-full overflow-hidden rounded-lg shadow-2xl group shadow-black/70">
            <div class="absolute z-20 w-4 h-4 transition-opacity border-t-2 border-l-2 border-teal-400 opacity-0 top-2 left-2 group-hover:opacity-100"></div>
            <div class="absolute z-20 w-4 h-4 transition-opacity border-b-2 border-r-2 border-teal-400 opacity-0 bottom-2 right-2 group-hover:opacity-100"></div>
            
            <img
              src="/src/assets/images/me.png"
              alt="Berol"
              class="w-[95%] -top-[15%] relative h-[95%] object-cover object-top group-hover:scale-105 transition-all duration-700"
            />
            
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent bg-[length:100%_10px] animate-scan pointer-events-none"></div>
          </div>

          <div class="absolute bottom-11 left-[-2rem] md:left-2 border border-slate-700 bg-[#0B1120] p-1 pl-4 pr-6 flex items-center gap-3 text-xs text-slate-400 z-30 shadow-xl shadow-black/50 rounded">
            <div class="w-3 h-3 bg-teal-400 animate-pulse"></div>
            {{ $t('hero.currentProject') }}
            <span class="font-mono font-bold text-indigo-400">SafeWatch360</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>