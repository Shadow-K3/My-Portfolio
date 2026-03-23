<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const dropdownOpen = ref(false)
const isMenuOpen = ref(false)
const selectedLang = ref(locale.value.toUpperCase())

// État pour déclencher l'animation
const isRevealed = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const selectLang = (lang) => {
  selectedLang.value = lang
  locale.value = lang.toLowerCase()
  localStorage.setItem('locale', lang.toLowerCase())
  dropdownOpen.value = false
  isMenuOpen.value = false
}

onMounted(() => {
  // Déclenchement du reveal après un court instant
  setTimeout(() => {
    isRevealed.value = true
  }, 400)
})

const navItems = [
  { id: 'home', p: '/' },
  { id: 'projects', p: '/projects' },
  { id: 'about', p: '/about' },
  { id: 'contact', p: '/contact' }
]
</script>

<template>
  <header class="sticky top-0 left-0 w-full z-[100] backdrop-blur-md border-b border-white/5 font-mono">
    <div class="max-w-[1200px] mx-auto flex justify-between items-center py-6 px-6">
      
      <router-link to="/" class="flex items-center gap-2 z-[110] group">
        <i data-lucide="box" class="w-5 h-5 text-teal-400 transition-transform duration-500 group-hover:rotate-90"></i>
        
        <div 
          class="flex items-center text-lg font-bold tracking-tighter text-teal-400"
          :class="{ 'animate-double-bounce': isRevealed }"
        >
          <div class="flex items-center overflow-hidden">
            <span class="initial">T</span>
            <div class="reveal-wrapper" :class="{ 'is-active': isRevealed }">
              <span class="reveal-content">choumi</span>
            </div>
          </div>

          <span class="w-2"></span>

          <div class="flex items-center overflow-hidden">
            <span class="initial">B</span>
            <div class="reveal-wrapper delay-berol" :class="{ 'is-active': isRevealed }">
              <span class="reveal-content">erol</span>
            </div>
          </div>
        </div>
      </router-link>

      <nav class="items-center hidden gap-8 text-sm md:flex">
        <router-link 
          v-for="item in navItems" :key="item.id" :to="item.p" 
          exact-active-class="active-link"
          class="pb-1 transition-all duration-300 border-b-2 border-transparent nav-link text-slate-400 hover:text-white"
        >
          <span class="text-teal-400/50">#</span>{{ $t(`nav.${item.id}`) }}
        </router-link>

        <div id="lang-dropdown" class="relative ml-4">
          <button @click="dropdownOpen = !dropdownOpen" class="flex items-center gap-1 uppercase outline-none text-slate-400 hover:text-white">
            {{ selectedLang }}
            <i data-lucide="chevron-down" class="w-4 h-4 transition-transform" :class="{'rotate-180': dropdownOpen}"></i>
          </button>
          <Transition name="dropdown">
            <ul v-if="dropdownOpen" class="absolute top-full right-0 mt-2 w-20 bg-[#1c2739] border border-white/10 rounded py-1 z-50 shadow-xl">
              <li v-for="l in ['EN', 'FR']" :key="l" @click="selectLang(l)" 
                  class="px-4 py-2 text-xs cursor-pointer hover:bg-teal-400/10 hover:text-teal-400"
                  :class="{'text-teal-400': selectedLang === l}">
                {{ l }}
              </li>
            </ul>
          </Transition>
        </div>
      </nav>

      <button @click="toggleMenu" class="md:hidden text-slate-400 z-[110] p-2">
        <div class="flex flex-col justify-between w-6 h-4">
          <span :class="{'rotate-45 translate-y-1.5': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300"></span>
          <span :class="{'opacity-0': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300"></span>
          <span :class="{'-rotate-45 -translate-y-2': isMenuOpen}" class="w-full h-0.5 bg-current transition-all duration-300"></span>
        </div>
      </button>

      <Transition name="fade-slide">
        <div v-if="isMenuOpen" class="fixed inset-0 bg-[#0B1120] z-[100] flex flex-col justify-center items-center gap-10">
          <router-link v-for="(item, i) in navItems" :key="item.id" :to="item.p" 
            exact-active-class="active-mobile-link" @click="toggleMenu"
            class="flex items-center gap-4 text-4xl font-bold text-white">
            <span class="text-xl text-teal-400/30">0{{ i + 1 }}.</span>
            {{ $t(`nav.${item.id}`).toUpperCase() }}
          </router-link>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
/* --- 1. LE REVEAL ULTRA SMOOTH --- */
.reveal-wrapper {
  display: inline-grid;
  grid-template-columns: 0fr;
  /* Courbe cubic-bezier pour un effet fluide et élastique */
  transition: grid-template-columns 1.2s cubic-bezier(0.77, 0, 0.175, 1);
  overflow: hidden;
}

.reveal-wrapper.is-active {
  grid-template-columns: 1fr;
}

.delay-berol {
  transition-delay: 0.5s;
}

.reveal-content {
  min-width: 0;
  white-space: nowrap;
  margin-left: 0.2rem;
  opacity: 0;
  transform: translateX(-15px);
  transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
  color: #94a3b8;
  font-weight: 400;
  text-transform: lowercase;
}

.is-active .reveal-content {
  opacity: 1;
  transform: translateX(0);
}

/* --- 2. LE DOUBLE BOUNCE (DÉCLENCHÉ À LA FIN) --- */
.animate-double-bounce {
  /* On attend que le reveal soit fini (environ 1.5s) avant de bouncer */
  animation: double-bounce 0.8s ease-in-out 1.6s 2;
}

@keyframes double-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* --- NAV ACTIVE --- */
.active-link {
  color: #fff !important;
  border-bottom-color: #2dd4bf !important;
}
.active-mobile-link {
  color: #2dd4bf !important;
}

/* --- TRANSITIONS --- */
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-10px); }

.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.4s ease; }
.fade-slide-enter-from, .fade-slide-leave-to { opacity: 0; transform: translateX(100%); }
</style>