<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

// --- ÉTATS RÉACTIFS ---
const dropdownOpen = ref(false)
const isMenuOpen = ref(false)
// On initialise selectedLang basé sur la locale actuelle de i18n
const selectedLang = ref(locale.value.toUpperCase())

// --- FONCTIONS ---

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const toggleDropdown = (event) => {
  event.stopPropagation()
  dropdownOpen.value = !dropdownOpen.value
}

const selectLang = (lang) => {
  selectedLang.value = lang
  locale.value = lang.toLowerCase() // Change la langue globalement
  localStorage.setItem('locale', lang.toLowerCase())
  dropdownOpen.value = false
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleClickOutside = (e) => {
  if (!e.target.closest('#lang-dropdown')) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="sticky top-0 left-0 w-full z-[100] backdrop-blur-md border-b border-white/5">
    <div class="max-w-[1200px] mx-auto flex justify-between items-center py-6 px-6">
      
      <div class="flex items-center gap-2 z-[110]">
        <i data-lucide="box" stroke-width="1.5" class="w-5 h-5 text-teal-400"></i>
        <div id="animated-name" class="flex items-center text-lg font-medium tracking-tight text-teal-400">
          <div id="full-name-wrapper" class="flex items-center name-wrapper whitespace-nowrap">
            <span class="initials">T</span>
            <span class="letters-after-t hidden sm:flex gap-0.5 ml-1">choumi</span>
            <span class="ml-2 initials">B</span>
            <span class="letters-after-b hidden sm:flex gap-0.5 ml-1">erol</span>
          </div>
        </div>
      </div>

      <nav class="items-center hidden gap-8 font-mono text-sm md:flex">
        <router-link 
          v-for="item in [
            {id:'home', p:'/'}, 
            {id:'projects', p:'/projects'}, 
            {id:'about', p:'/about'}, 
            {id:'contact', p:'/contact'}
          ]" 
          :key="item.id" :to="item.p" 
          class="pb-1 transition-all duration-300 border-b-2 border-transparent nav-link text-slate-400 hover:text-white"
        >
          <span class="text-teal-400">#</span>{{ $t(`nav.${item.id}`) }}
        </router-link>

        <div id="lang-dropdown" class="relative ml-4">
          <button @click="toggleDropdown" class="flex items-center gap-1 uppercase transition-colors outline-none text-slate-400 hover:text-white">
            {{ selectedLang }}
            <i data-lucide="chevron-down" class="w-4 h-4 transition-transform" :class="{'rotate-180': dropdownOpen}"></i>
          </button>
          
          <Transition name="dropdown">
            <ul v-if="dropdownOpen" class="absolute top-full right-0 mt-2 w-20 bg-[#1c2739] border border-white/10 rounded shadow-2xl py-1 z-50">
              <li v-for="l in ['EN', 'FR']" :key="l" 
                  @click="selectLang(l)" 
                  class="px-4 py-2 text-xs uppercase transition-colors cursor-pointer hover:bg-teal-400/10 hover:text-teal-400">
                {{ l }}
              </li>
            </ul>
          </Transition>
        </div>
      </nav>

      <button @click="toggleMenu" class="md:hidden text-slate-400 hover:text-white z-[110] relative p-2 focus:outline-none">
        <div class="relative flex flex-col justify-between w-6 h-4">
          <span :class="{'rotate-45 translate-y-1.5': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300"></span>
          <span :class="{'opacity-0 -translate-x-2': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300"></span>
          <span :class="{'-rotate-45 -translate-y-2': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300"></span>
        </div>
      </button>

      <Transition name="fade-slide">
        <div v-if="isMenuOpen" class="fixed top-0 left-0 w-screen h-[100dvh] bg-[#0B1120] z-[100] flex flex-col justify-between p-8 pt-32 pb-16">
          <nav class="flex flex-col items-center gap-8">
            <router-link 
              v-for="(item, i) in [
                {id:'home', p:'/'}, 
                {id:'projects', p:'/projects'}, 
                {id:'about', p:'/about'}, 
                {id:'contact', p:'/contact'}
              ]" 
              :key="item.id" 
              :to="item.p" 
              @click="toggleMenu"
              class="flex items-center gap-4 text-4xl font-bold tracking-tighter text-white mobile-nav-link"
            >
              <span class="font-mono text-xl text-teal-400">0{{ i + 1 }}.</span>
              {{ $t(`nav.${item.id}`).toUpperCase() }}
            </router-link>
          </nav>

          <div class="flex flex-col items-center gap-8 pt-8 font-mono border-t border-white/5">
            <div class="flex gap-8">
              <button 
                v-for="l in ['EN', 'FR']" 
                :key="l" 
                @click="selectLang(l)" 
                :class="selectedLang === l ? 'text-teal-400' : 'text-slate-500'" 
                class="text-xl tracking-widest uppercase"
              >
                {{ l }}
              </button>
            </div>
            <p class="text-[10px] text-slate-600 uppercase tracking-[0.3em]">© 2026 BEROL_DEV</p>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>