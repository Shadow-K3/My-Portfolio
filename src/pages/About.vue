<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Animation Globe
const globeWrapper = ref<HTMLElement | null>(null)
let rafId: number | null = null
let currentRotation = 0
let targetRotation = 0
let lastScrollY = window.scrollY
let isScrolling = false
let scrollTimeout: any = null

const AUTO_ROTATE_SPEED = 0.10
const SCROLL_MULTIPLIER = -0.16
const LERP_FACTOR = 0.07

const animate = () => {
    if (!isScrolling) targetRotation += AUTO_ROTATE_SPEED
    currentRotation += (targetRotation - currentRotation) * LERP_FACTOR
    if (globeWrapper.value) {
        globeWrapper.value.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`
    }
    rafId = requestAnimationFrame(animate)
}

const onScroll = () => {
    isScrolling = true
    if (scrollTimeout) clearTimeout(scrollTimeout)
    const currentScrollY = window.scrollY
    const delta = currentScrollY - lastScrollY
    targetRotation += delta * SCROLL_MULTIPLIER
    lastScrollY = currentScrollY
    scrollTimeout = setTimeout(() => { isScrolling = false }, 150)
}

// Données Skills & Education
const skills = {
    Languages: "PHP TypeScript JavaScript Dart Python",
    FrontEnd: "Vue 3 React TailwindCSS Bootstrap CSS/HTML",
    BackEnd: "Laravel Node.js MySQL PostgreSQL Firebase",
    Tools: "Figma VSCode Linux Git Docker UML",
    Security: "OWASP Top 10 Web Pentesting Nmap BurpSuite"
}

// Pour l'éducation, on utilise des clés de traduction pour la description si tu veux, 
// ou on les laisse en dur si elles ne changent pas beaucoup. 
// Ici, je les garde simples mais tu peux utiliser $t().
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
  // ... ajoute les autres ici
];

onMounted(() => {
    animate()
    window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    if (rafId !== null) cancelAnimationFrame(rafId)
})
</script>

<template>
    <div class="max-w-[1100px] mx-auto px-6 py-12 relative z-10">
        
        <div class="mb-16">
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                <span class="text-teal-400">/</span>{{ $t('aboutMe.skillsTitle') }}
            </h1>
            <p class="font-mono text-lg italic text-slate-400">{{ $t('aboutMe.whoami') }}</p>
        </div>

        <section class="relative flex flex-col items-center gap-12 mb-32 md:flex-row lg:gap-24">
            
            <div ref="globeWrapper" class="absolute top-1/2 left-1/2 pointer-events-none w-[100vw] h-[100vw] max-w-[800px] max-h-[800px] opacity-10">
                <svg viewBox="0 0 200 200" class="w-full h-full stroke-teal-400 stroke-[0.2] fill-none">
                    <circle cx="100" cy="100" r="99" />
                    <ellipse cx="100" cy="100" rx="99" ry="30" />
                    <ellipse cx="100" cy="100" rx="30" ry="99" />
                    <circle cx="100" cy="100" r="50" stroke-dasharray="2 2" />
                </svg>
            </div>

            <div class="relative z-10 flex flex-col flex-1 gap-6 text-sm leading-relaxed text-slate-300">
                <p class="font-mono text-lg text-teal-400">{{ $t('aboutMe.hello') }}</p>
                <p>
                    <i18n-t keypath="aboutMe.bio" tag="span">
                        <template #dev><span class="font-medium text-white">{{ $t('aboutMe.roles.dev') }}</span></template>
                        <template #design><span class="font-medium text-white">{{ $t('aboutMe.roles.design') }}</span></template>
                        <template #security><span class="font-bold text-indigo-400 underline decoration-indigo-400/30">{{ $t('aboutMe.roles.security') }}</span></template>
                    </i18n-t>
                </p>
                
                <div class="p-4 border-l-2 border-teal-400 bg-teal-400/5 backdrop-blur-sm">
                    <p class="mb-2 text-xs font-bold tracking-widest text-white uppercase">{{ $t('aboutMe.methodTitle') }}</p>
                    <p class="text-xs">
                        <i18n-t keypath="aboutMe.methodDesc" tag="span">
                            <template #uml><span class="font-bold text-teal-400">UML</span></template>
                        </i18n-t>
                    </p>
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
                <span class="text-teal-400">#</span>{{ $t('aboutMe.skillsTitle') }}
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
                <span class="text-teal-400">#</span>{{ $t('aboutMe.eduTitle') }}
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
                <span class="text-teal-400">#</span>{{ $t('aboutMe.factsTitle') }}
            </h2>
            <div class="flex flex-wrap gap-3">
                <div v-for="fact in $tm('aboutMe.facts')" :key="fact" class="px-4 py-2 font-mono text-xs transition-all border cursor-default border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-400">
                    {{ fact }}
                </div>
            </div>
        </section>
    </div>
</template>

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