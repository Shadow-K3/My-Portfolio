<template>
  <section class="relative flex flex-col items-center justify-center mt-20 mb-48 group">
    
    <div class="absolute inset-0 bg-teal-500/5 blur-[100px] rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

    <div class="relative w-fit max-w-[90%] md:max-w-2xl">
      <div class="border-2 border-slate-800 p-10 md:p-12 relative z-10 bg-[#0B1120]/80 backdrop-blur-sm group-hover:border-teal-500/30 transition-colors duration-500">
        
        <span class="absolute -top-6 left-8 bg-[#0B1120] px-3 text-5xl text-teal-400 font-serif italic font-black select-none">
          "
        </span>

        <h2 class="font-mono text-xl italic font-medium leading-relaxed tracking-tight text-white uppercase md:text-3xl">
          {{ t('quote.part1') }} 
          <span class="text-teal-400">{{ t('quote.highlight') }}</span> 
          {{ t('quote.part2') }}
        </h2>

        <span class="absolute -bottom-10 right-8 bg-[#0B1120] px-3 text-5xl text-teal-400 font-serif italic font-black select-none">
          "
        </span>
      </div>

      <div class="border-2 border-slate-800 border-t-0 p-4 text-white font-mono text-sm absolute -bottom-[54px] right-0 w-64 text-right bg-[#0B1120] z-20 flex items-center justify-end gap-3 group-hover:border-teal-500/30 transition-colors duration-500">
        <span class="font-bold text-teal-500 animate-pulse">></span>
        <span class="tracking-[0.2em] uppercase">{{ t('quote.author') }}</span>
      </div>
    </div>

    <div class="absolute -top-10 -left-[5vw] w-20 h-20 border border-slate-800/40 rotate-12 pointer-events-none"></div>
    <div class="absolute top-0 right-[-8vw] w-32 h-32 border border-teal-500/5 -rotate-12 pointer-events-none hidden lg:block"></div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Effet de glitch au survol pour le côté Hacker */
.group:hover h2 {
  text-shadow: 2px 0 #2dd4bf20, -2px 0 #ff000010;
  animation: glitch-skew 1s infinite linear alternate-reverse;
}

@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  20% { transform: skew(1deg); }
  40% { transform: skew(-1deg); }
  100% { transform: skew(0deg); }
}
</style>