<template>
  <!-- ========================= -->
  <!-- HEADER (re‑renders on locale change) -->
  <!-- ========================= -->
  <header
    :key="currentLocale"
    class="sticky top-0 left-0 z-[200] w-full max-w-full overflow-x-hidden border-b border-white/5 bg-[#081120]/90 backdrop-blur-xl font-mono"
  >
    <div
      class="mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between px-4 sm:px-5"
    >
      <!-- ========================= -->
      <!-- LOGO -->
      <!-- ========================= -->
      <router-link
        to="/"
        aria-label="Homepage"
        class="group z-[130] flex shrink-0 items-center gap-2 outline-none"
      >
        <Box
          class="w-4 h-4 text-teal-400 logo-icon"
        />

        <div
          class="flex items-center text-[14px] font-bold tracking-tight text-teal-400 sm:text-[15px]"
        >
          <div class="structure-logo">
            <span class="initial">T</span>

            <div
              class="reveal-wrapper"
              :class="{ 'is-active': isRevealed }"
            >
              <span class="reveal-content">choumi</span>
            </div>
          </div>

          <span class="w-1"></span>

          <div class="structure-logo">
            <span class="initial">B</span>

            <div
              class="reveal-wrapper delay-berol"
              :class="{ 'is-active': isRevealed }"
            >
              <span class="reveal-content">erol</span>
            </div>
          </div>
        </div>
      </router-link>

      <!-- ========================= -->
      <!-- DESKTOP NAV -->
      <!-- ========================= -->
      <nav class="hidden items-center gap-6 text-[13px] md:flex">
        <router-link
          v-for="item in navItems"
          :key="item.id"
          :to="item.path"
          exact-active-class="text-teal-400 border-teal-400/40"
          class="pb-1 border-b border-transparent nav-link text-slate-400"
        >
          <span class="mr-1 text-teal-400/50">#</span>
          {{ getNavTranslation(item.id) }}
        </router-link>

        <!-- LANG -->
        <div class="flex gap-2 pl-3 ml-3 border-l border-white/10">
          <button
            v-for="lang in languages"
            :key="lang"
            @click="selectLang(lang)"
            type="button"
            class="lang-btn text-[11px] font-bold"
            :class="
              selectedLang === lang
                ? 'text-teal-400'
                : 'text-slate-500 hover:text-white'
            "
          >
            {{ lang }}
          </button>
        </div>
      </nav>

      <!-- ========================= -->
      <!-- MOBILE BUTTON -->
      <!-- ========================= -->
      <button
        @click="toggleMenu"
        type="button"
        aria-label="Toggle Menu"
        class="z-[130] p-1 text-slate-300 md:hidden shrink-0"
      >
        <div class="relative flex flex-col justify-between w-5 h-3">
          <span
            class="burger-line"
            :class="{
              'translate-y-[5px] rotate-45 bg-teal-400': isMenuOpen
            }"
          />

          <span
            class="burger-line"
            :class="{
              'opacity-0 scale-0': isMenuOpen
            }"
          />

          <span
            class="burger-line"
            :class="{
              '-translate-y-[5px] -rotate-45 bg-teal-400': isMenuOpen
            }"
          />
        </div>
      </button>
    </div>
  </header>

  <!-- ========================= -->
  <!-- MOBILE MENU -->
  <!-- ========================= -->
  <Transition name="mobile-menu">
    <div
      v-if="isMenuOpen"
      class="fixed top-[68px] left-0 right-0 bottom-0 z-[190] flex flex-col overflow-y-auto bg-[#081120]/90 backdrop-blur-xl md:hidden"
    >
      <!-- CENTER -->
      <div
        class="flex flex-col items-center justify-center flex-1 gap-2 py-6"
      >
        <router-link
          v-for="(item, index) in navItems"
          :key="item.id"
          :to="item.path"
          exact-active-class="text-teal-400 border-teal-400/20 scale-[1.02]"
          class="mobile-card flex h-[74px] w-full max-w-[300px] flex-col items-center justify-center gap-1 border border-white/5 bg-white/[0.02] text-[14px] font-bold tracking-tight text-slate-200"
          :style="{
            transitionDelay: `${index * 70}ms`
          }"
        >
          <span
            class="text-[10px] font-normal text-teal-400/60"
          >
            0{{ index + 1 }}.
          </span>

          {{ getNavTranslation(item.id).toUpperCase() }}
        </router-link>
      </div>

      <!-- LANG -->
      <div
        class="flex items-center justify-center gap-3 pb-6"
      >
        <button
          v-for="lang in languages"
          :key="lang"
          @click="selectLang(lang)"
          type="button"
          class="lang-mobile-btn flex h-[36px] min-w-[70px] items-center justify-center rounded-full border text-[11px] font-bold"
          :class="
            selectedLang === lang
              ? 'border-teal-400 bg-teal-400/10 text-teal-400'
              : 'border-white/10 text-slate-500 hover:text-white'
          "
        >
          {{ lang }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Box } from 'lucide-vue-next'
import * as m from '@/paraglide/messages'
import { currentLocale, switchLocale } from '@/composables/useLocale'

const route = useRoute()

// =========================
// STATES
// =========================
const isMenuOpen = ref(false)
const isRevealed = ref(false)
const selectedLang = ref(currentLocale.value.toUpperCase())
const languages = ['EN', 'FR']

// Helper to get navigation translation from flattened keys
const getNavTranslation = (id) => {
  // Map: nav_home, nav_projects, nav_about, nav_contact
  const key = `nav_${id}`
  return m[key]()
}

// =========================
// LANGUAGE SWITCHER (using ParaglideJS)
// =========================
const selectLang = (lang) => {
  const normalizedLang = lang.toLowerCase()
  switchLocale(normalizedLang)   // updates currentLocale and localStorage internally
  selectedLang.value = lang      // update local display
  closeMenu()
}

// Watch for locale changes from outside (e.g., if localStorage changes elsewhere)
watch(currentLocale, (newLocale) => {
  selectedLang.value = newLocale.toUpperCase()
})

// =========================
// BODY SCROLL LOCK
// =========================
const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.classList.add('no-scroll')
}
const unlockBodyScroll = () => {
  document.body.style.overflow = ''
  document.body.classList.remove('no-scroll')
}

const closeMenu = () => {
  isMenuOpen.value = false
  unlockBodyScroll()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  isMenuOpen.value ? lockBodyScroll() : unlockBodyScroll()
}

// =========================
// NAV ITEMS
// =========================
const navItems = [
  { id: 'home', path: '/' },
  { id: 'projects', path: '/projects' },
  { id: 'about', path: '/about' },
  { id: 'contact', path: '/contact' }
]

// =========================
// WATCHERS
// =========================
watch(
  () => route.path,
  () => {
    closeMenu()
  }
)

// =========================
// LIFECYCLE
// =========================
onMounted(() => {
  setTimeout(() => {
    isRevealed.value = true
  }, 200)

  // Sync selectedLang with currentLocale after mount
  selectedLang.value = currentLocale.value.toUpperCase()
})

onUnmounted(() => {
  unlockBodyScroll()
})
</script>

<style scoped>
/* ========================= */
/* GLOBAL FIX */
/* ========================= */
html,
body {
  overflow-x: hidden;
}

/* ========================= */
/* LOGO */
/* ========================= */
.structure-logo {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
}

.initial {
  flex-shrink: 0;
}

.logo-icon {
  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.4s ease;
}

.group:hover .logo-icon {
  transform: rotate(180deg) scale(1.08);
}

.reveal-wrapper {
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-5px);

  transition:
    max-width 1s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.7s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-wrapper.is-active {
  max-width: 90px;
  opacity: 1;
  transform: translateX(0);
}

.delay-berol {
  transition-delay: 0.18s;
}

.reveal-content {
  display: inline-block;
  animation: logoGlow 3s ease-in-out infinite;
}

@keyframes logoGlow {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.85;
  }
}

/* ========================= */
/* NAVIGATION */
/* ========================= */
.nav-link {
  transition:
    color 0.35s ease,
    border-color 0.35s ease,
    transform 0.35s ease;
}

.nav-link:hover {
  transform: translateY(-1px);
}

.lang-btn,
.lang-mobile-btn {
  transition:
    all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ========================= */
/* BURGER */
/* ========================= */
.burger-line {
  height: 2px;
  width: 100%;
  background: currentColor;

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.35s ease,
    background-color 0.35s ease,
    scale 0.35s ease;
}

/* ========================= */
/* MOBILE MENU */
/* ========================= */
.mobile-card {
  opacity: 1;

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    background-color 0.35s ease,
    opacity 0.45s ease;
}

.mobile-card:hover {
  transform: translateY(-2px) scale(1.01);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    backdrop-filter 0.45s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-14px) scale(0.98);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* ========================= */
/* ACCESSIBILITY */
/* ========================= */
button:focus-visible,
a:focus-visible {
  outline: 2px solid rgb(45 212 191);
  outline-offset: 2px;
}

/* ========================= */
/* RESPONSIVE FIXES */
/* ========================= */
@media (max-width: 360px) {
  .reveal-wrapper.is-active {
    max-width: 68px;
  }
}
</style>