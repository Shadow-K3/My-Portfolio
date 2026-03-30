<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>

<template>
  <section id="contacts" class="relative mb-32">
    
    <div class="flex items-center gap-4 mb-16">
        <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
        <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
        {{ t('contact.title') }}
      </h2>
      <div class="h-[1px] bg-slate-800 flex-grow max-w-[150px] relative overflow-hidden">
        <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_3s_infinite]"></div>
      </div>
    </div>

    <div class="flex flex-col items-start justify-between gap-16 md:flex-row">
      <div class="w-full space-y-6 md:w-1/2 lg:w-3/5">
          <p class="font-mono text-xl text-white opacity-90">
          <span class="font-bold text-teal-400">></span> {{ t('contact.connection') }}
        </p>
        
        <div class="max-w-md text-lg leading-relaxed text-slate-400">
          <i18n-t keypath="contact.subtitle" tag="p">
              <template #freelance>
              <span class="text-white border-b border-teal-500/30">{{ t('contact.freelance') }}</span>
            </template>
          </i18n-t>
        </div>
        
        <div class="hidden pt-8 md:block">
           <div class="flex gap-2">
              <div v-for="i in 3" :key="i" class="w-12 h-1 overflow-hidden rounded-full bg-slate-800">
                 <div class="h-full bg-teal-500/50 animate-[loading_2s_infinite]" :style="{animationDelay: `${i*0.2}s`}"></div>
              </div>
           </div>
        </div>
      </div>

      <div class="relative w-full group md:w-auto">
        <div class="absolute transition-opacity opacity-25 -inset-1 bg-gradient-to-r from-teal-500/20 to-transparent blur group-hover:opacity-50"></div>
        
        <div class="relative border border-slate-800 p-8 min-w-[320px] shadow-2xl transition-all duration-500 group-hover:border-teal-400/30 bg-[#0B1120]/50 backdrop-blur-sm">
          <h3 class="mb-8 text-sm font-mono uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
            {{ t('contact.cardTitle') }}
          </h3>
          
          <div class="flex flex-col gap-8">
            <a href="https://wa.me/237652423743" target="_blank"
               class="flex items-start gap-4 transition-all group/link">
              <div class="p-2 transition-colors border bg-slate-900 border-slate-800 text-slate-500 group-hover/link:text-teal-400 group-hover/link:border-teal-400/40">
                <i data-lucide="message-square" class="w-5 h-5" stroke-width="1.5"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{{ t('contact.whatsappLabel') }}</span>
                <span class="transition-colors text-slate-400 group-hover/link:text-white">
                  +237 652 423 743<br>
                  +237 654 972 496
                </span>
              </div>
            </a>

            <a href="mailto:tchoumiberol816@gmail.com" 
               class="flex items-start gap-4 transition-all group/link">
              <div class="p-2 transition-colors border bg-slate-900 border-slate-800 text-slate-500 group-hover/link:text-teal-400 group-hover/link:border-teal-400/40">
                <i data-lucide="mail" class="w-5 h-5" stroke-width="1.5"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{{ t('contact.emailLabel') }}</span>
                <span class="text-slate-400 group-hover/link:text-white transition-colors truncate max-w-[200px] lg:max-w-none">
                  tchoumiberol816@gmail.com
                </span>
              </div>
            </a>
          </div>

          <div class="flex items-center justify-between pt-4 mt-8 border-t border-slate-800/50">
             <span class="text-[8px] font-mono text-slate-700 tracking-[0.5em]">{{ t('contact.status') }}</span>
             <i data-lucide="shield-check" class="w-3 h-3 text-slate-800"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>