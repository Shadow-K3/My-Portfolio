<template>
  <section id="about-me" class="relative py-12 mb-32">
    <div class="flex items-center gap-4 mb-16">
      <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
        <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
        {{ $t('about.title') }}
      </h2>
      <div class="h-[1px] bg-slate-800 flex-grow max-w-[350px] relative overflow-hidden">
        <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_4s_infinite]"></div>
      </div>
    </div>

    <div class="flex flex-col items-start gap-16 lg:flex-row">
      <div class="w-full space-y-6 lg:w-3/5">
        <div class="space-y-4">
          <p class="font-mono text-xl text-white">
            <span class="text-teal-400">></span> {{ $t('about.greeting') }}
          </p>
          <div class="space-y-6 font-sans text-lg leading-relaxed text-slate-400">
            <i18n-t keypath="about.description" tag="p">
              <template #role1>
                <span class="italic font-medium text-white">{{ $t('about.role1') }}</span>
              </template>
              <template #role2>
                <span class="italic font-medium text-white">{{ $t('about.role2') }}</span>
              </template>
            </i18n-t>
          </div>
        </div>

        <router-link to="/about" 
          class="relative flex items-center gap-4 px-8 py-3 overflow-hidden font-mono text-sm text-white transition-all border group border-teal-400/50 hover:bg-teal-400/10 w-fit">
          <span class="relative z-10 font-bold tracking-widest uppercase">{{ $t('about.cta') }}</span>
          <i data-lucide="arrow-right" class="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-2" stroke-width="2"></i>
          <div class="absolute inset-0 transition-transform duration-300 -translate-x-full bg-teal-400/5 group-hover:translate-x-0"></div>
        </router-link>
      </div>

      <div class="relative flex justify-center w-full lg:w-2/5 lg:justify-end">
        <div class="relative w-full max-w-[380px]">
          
          <div class="absolute -top-10 -left-10 text-slate-700/40 leading-[0.8] tracking-[0.6em] text-[10px] font-mono select-none">
            <p v-for="i in 5" :key="i">.....</p>
          </div>

          <div class="relative z-10 p-8 transition-all duration-500 border-2 shadow-2xl border-slate-800 hover:border-teal-400/30 group">
            <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
               <div class="flex gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-red-500/50 transition-colors"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-yellow-500/50 transition-colors"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-teal-500/50 transition-colors"></div>
               </div>
               <span class="text-[10px] font-mono text-slate-600 uppercase tracking-tighter">sys_audit.log</span>
            </div>

            <div class="space-y-3 font-mono text-xs md:text-sm">
                <p class="flex items-center gap-2 text-teal-400">
                  <span class="opacity-50">01</span> /* {{ $t('about.log.title') }} */
                </p>
                <p class="flex items-center gap-2 text-slate-500">
                  <span class="opacity-50">02</span> <span class="text-slate-300">> {{ $t('about.log.env') }}:</span> Production
                </p>
                <p class="flex items-center gap-2 text-slate-500">
                  <span class="opacity-50">03</span> <span class="text-slate-300">> Core:</span> Vue 3 / Vite / Laravel
                </p>
                <p class="flex items-center gap-2 text-slate-500">
                  <span class="opacity-50">04</span> <span class="text-slate-300">> {{ $t('about.log.security') }}:</span> Junior Pentester
                </p>
                <p class="flex items-center gap-2 text-slate-500">
                  <span class="opacity-50">05</span> <span class="text-slate-300">> {{ $t('about.log.loc') }}:</span> Douala, CM (237)
                </p>
                <div class="flex items-center justify-between pt-4 mt-6 border-t border-slate-800/50">
                   <span class="text-teal-500/80 animate-pulse text-[10px]">SCANNING_ACTIVE...</span>
                   <i data-lucide="shield-check" class="w-4 h-4 text-teal-500/50"></i>
                </div>
            </div>
          </div>

          <div class="absolute w-full h-full transition-transform duration-500 border -bottom-6 -right-6 border-slate-800 -z-10 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>
      </div>
    </div>

    <div class="absolute hidden font-mono text-4xl pointer-events-none select-none top-1/2 -left-24 text-slate-800/20 xl:block">
       <p v-for="i in 4" :key="i">::::::::::</p>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide {
  from { transform: translateX(-100%); }
  to { transform: translateX(300%); }
}
</style>