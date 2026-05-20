<template>
  <div  class="max-w-[1100px] mx-auto py-12 relative z-10">
    
    <div class="mb-16">
      <router-link to="/" class="flex items-center gap-2 mb-8 font-mono text-sm text-teal-400 transition-colors hover:text-white group">
        <span class="transition-transform group-hover:-translate-x-1">&lt;~~</span> {{ m.projectsPage_backHome() }}
      </router-link>
      <h1 class="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
        <span class="text-teal-400">/</span>{{ m.aboutMe_skillsTitle() }}
      </h1>
      <p class="font-mono text-lg italic text-slate-400">{{ m.aboutMe_whoami() }}</p>
    </div>

    <section class="relative flex flex-col items-center gap-12 mb-32 md:flex-row lg:gap-24">
      <div class="relative z-10 flex flex-col flex-1 gap-6 text-sm leading-relaxed text-slate-300">
        <p class="font-mono text-lg text-teal-400">{{ m.aboutMe_hello() }}</p>
        <p v-html="bioHtml"></p>
        
        <div class="p-4 border-l-2 border-teal-400 bg-teal-400/5 backdrop-blur-sm">
          <p class="mb-2 text-xs font-bold tracking-widest text-white uppercase">{{ m.aboutMe_methodTitle() }}</p>
          <p class="text-xs" v-html="methodDescHtml"></p>
        </div>
      </div>

      <div class="relative z-10 flex-1 group">
        <div class="relative w-64 mx-auto overflow-hidden border shadow-2xl h-80 shadow-teal-900/20 border-slate-800">
          <div class="absolute inset-0 bg-slate-900">
            <img src="../assets/images/me2.png" alt="Berol Dark" class="object-cover w-full h-full grayscale brightness-50 contrast-100" />
          </div>
          <div class="absolute inset-0 scan-reveal">
            <img src="../assets/images/me2.png" alt="Berol Reveal" class="object-cover w-full h-full" />
          </div>
          <div class="absolute top-0 left-0 w-full h-[2px] bg-teal-400 shadow-[0_0_15px_#2dd4bf] z-30 scan-line"></div>
          <div class="absolute top-0 left-0 z-40 w-4 h-4 border-t-2 border-l-2 border-teal-400"></div>
          <div class="absolute bottom-0 right-0 z-40 w-4 h-4 border-b-2 border-r-2 border-teal-400"></div>
        </div>
      </div>
    </section>

    <section class="mb-32">
      <h2 class="flex items-center gap-4 mb-12 font-mono text-2xl font-bold text-white uppercase">
        <span class="text-teal-400">#</span>{{ m.aboutMe_skillsTitle() }}
        <div class="h-[1px] flex-1 bg-slate-800"></div>
      </h2>
      <div class="grid grid-cols-1 gap-6 font-mono sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(list, category) in skills" :key="category" class="transition-all border border-slate-800 hover:border-teal-400/50 group bg-slate-900/50 backdrop-blur-sm">
          <h3 class="p-3 text-xs font-bold tracking-widest text-white uppercase border-b border-slate-800 group-hover:text-teal-400">
            {{ category }}
          </h3>
          <div class="p-4 text-sm leading-loose text-slate-400">
            {{ list }}
          </div>
        </div>
      </div>
    </section>

    <section class="mb-32">
      <h2 class="flex items-center gap-4 mb-16 font-mono text-2xl font-bold text-white uppercase">
        <span class="text-teal-400">#</span>{{ m.aboutMe_eduTitle() }}
        <div class="h-[1px] flex-1 bg-slate-800"></div>
      </h2>
      <div class="relative ml-4 space-y-12 border-l border-slate-800 md:ml-8">
        <div v-for="edu in education" :key="edu.title" class="relative pl-8 group">
          <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-slate-700 group-hover:border-teal-400 transition-colors z-10">
            <div class="w-1.5 h-1.5 bg-slate-700 group-hover:bg-teal-400 rounded-full m-auto mt-[2px]"></div>
          </div>
          <div class="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
            <span class="font-mono text-sm tracking-tighter text-teal-400 shrink-0">{{ edu.year }}</span>
            <div>
              <h3 class="text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{ edu.title }}</h3>
              <p class="mb-3 font-mono text-[10px] uppercase text-slate-500 tracking-widest">{{ edu.institution }}</p>
              <p class="max-w-2xl text-sm leading-relaxed text-slate-400">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="flex items-center gap-4 mb-12 font-mono text-2xl font-bold text-white uppercase">
        <span class="text-teal-400">#</span>{{ m.aboutMe_factsTitle() }}
      </h2>
      <div class="flex flex-wrap gap-3">
        <div v-for="fact in factsArray" :key="fact" class="px-4 py-2 font-mono text-xs transition-all border cursor-default border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-400">
          {{ fact }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as m from '@/paraglide/messages'
import { currentLocale } from '@/composables/useLocale'

// Static data (no translation needed)
const skills = {
    Languages: "PHP TypeScript JavaScript Dart Python",
    FrontEnd: "Vue 3 React TailwindCSS Bootstrap CSS/HTML",
    BackEnd: "Laravel Node.js",
    Tools: "Figma VSCode Linux Git Docker UML Virtual Box",
    Security: "OWASP Top 10 Web Pentesting Nmap BurpSuite"
}

const education = [
  {
    year: '2024 - Present',
    title: 'Training in cybersecurity',
    institution: 'Getsmarter',
    description: 'Fundamentals of pentesting, vulnerability analysis, and web security.'
  },
  {
    year: '2022-2024',
    title: 'HND in Networks and Computer Security',
    institution: 'IUG Douala',
    description: 'Comprehensive training in networks and computer security.'
  }
];

// ========== Translated content with HTML interpolation ==========
const bioHtml = computed(() => {
  return m.aboutMe_bio({
    dev: `<span class="font-medium text-white">${m.aboutMe_roles_dev()}</span>`,
    design: `<span class="font-medium text-white">${m.aboutMe_roles_design()}</span>`,
    security: `<span class="font-bold text-indigo-400 underline decoration-indigo-400/30">${m.aboutMe_roles_security()}</span>`
  })
})

const methodDescHtml = computed(() => {
  return m.aboutMe_methodDesc({
    uml: `<span class="font-bold text-teal-400">UML</span>`
  })
})

// ========== Facts array from flattened messages ==========
const factsArray = [
  m.aboutMe_facts_0(),
  m.aboutMe_facts_1(),
  m.aboutMe_facts_2(),
  m.aboutMe_facts_3(),
  m.aboutMe_facts_4(),
  m.aboutMe_facts_5()
]
</script>

<style scoped>
.scan-reveal { clip-path: inset(0 0 100% 0); z-index: 20; }
.scan-line { opacity: 0; }

@media (max-width: 767px) {
    .scan-reveal { animation: reveal-down 4s ease-in-out infinite; }
    .scan-line { opacity: 1; animation: scan-move 4s ease-in-out infinite; }
}

@media (min-width: 768px) {
    .group:hover .scan-reveal { animation: reveal-down 2.5s ease-in-out infinite; }
    .group:hover .scan-line { opacity: 1; animation: scan-move 2.5s ease-in-out infinite; }
}

@keyframes scan-move { 0%, 100% { top: 0%; opacity: 0; } 5%, 95% { opacity: 1; } 50% { top: 100%; } }
@keyframes reveal-down { 0%, 100% { clip-path: inset(0 0 100% 0); } 50% { clip-path: inset(0 0 0% 0); } }
</style>