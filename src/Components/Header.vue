<!-- <script setup>
import router from '../router.js'
</script> -->

<template>
  <!-- Header -->
  <header
    class="sticky top-0 left-0 w-full z-50 flex justify-between items-center py-8 px-6  backdrop-blur-md border-b border-white/5">
    <!-- Animated Name with Icon -->
    <div id="animated-name"
      class="text-teal-400 font-medium text-lg flex items-center gap-2 tracking-tight overflow-hidden">
      <i data-lucide="box" stroke-width="1.5" class="w-5 h-5"></i>

      <div id="animated-name"
        class="text-teal-400 font-medium text-lg flex items-center gap-2 tracking-tight overflow-hidden">
        <!-- <i data-lucide="box" stroke-width="1.5" class="w-5 h-5"></i> -->

        <!-- Entire name wrapper for sequential reveal + wave -->
        <div id="full-name-wrapper" class="name-wrapper flex items-center whitespace-nowrap ml-2">
          <!-- T fixed -->
          <span class="initials">T</span>
          <!-- Letters after T -->
          <span class="letters-after-t flex gap-0.5 ml-1">
            <span>c</span>
            <span>h</span>
            <span>o</span>
            <span>u</span>
            <span>m</span>
            <span>i</span>
          </span>

          <!-- B fixed -->
          <span class="initials ml-2">B</span>
          <!-- Letters after B -->
          <span class="letters-after-b flex gap-0.5 ml-1">
            <span>e</span>
            <span>r</span>
            <span>o</span>
            <span>l</span>
          </span>
        </div>
      </div>
    </div>

    <nav class="hidden md:flex items-center gap-8 text-lg">

      <router-link to="/" class="text-white">
        <span class="text-teal-400">#</span>home
      </router-link>

      <router-link to="/projects" class="text-slate-400 hover:text-white transition-colors">
        <span class="text-teal-400">#</span>works
      </router-link>

      <router-link to="/about" class="text-slate-400 hover:text-white transition-colors">
        <span class="text-teal-400">#</span>about-me
      </router-link>

      <router-link to="/contact" class="text-slate-400 hover:text-white transition-colors">
        <span class="text-teal-400">#</span>contacts
      </router-link>

<!-- Language Dropdown -->
  <div 
    id="lang-dropdown"
    class="relative flex items-center text-sm gap-1 text-slate-400 cursor-pointer hover:text-white transition-colors"
    @click="toggleDropdown"
  >
    {{ selectedLang }}
    <i 
      data-lucide="chevron-down" 
      class="w-4 h-4 transition-transform duration-300"
      :class="{'rotate-180': dropdownOpen}"
      stroke-width="1.5"
    ></i>

    <ul
      class="absolute text-xs top-full left-0 mt-2 w-16 bg-[#1c2739]/70 border border-white rounded-md shadow-lg transition-all duration-300"
      :class="{
        'opacity-100 pointer-events-auto translate-y-0': dropdownOpen,
        'opacity-0 pointer-events-none -translate-y-2': !dropdownOpen
      }"
    >
      <li class="px-2 py-2 hover:bg-[#1c2739]/70" @click.stop="selectLang('EN')">EN</li>
      <li class="px-2 py-2 hover:bg-[#1c2739]/70" @click.stop="selectLang('FR')">FR</li>
    </ul>
  </div>

    </nav>

    <!-- Mobile Menu Button -->
    <button id="mobile-menu-button" class="md:hidden text-slate-400 hover:text-white z-50 relative">
      <i data-lucide="menu" stroke-width="1.5" class="w-6 h-6 transition-transform duration-300"></i>
    </button>

    <!-- Mobile Menu Panel -->
    <div id="mobile-menu"
      class="fixed inset-0 bg-[#1c2739]/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 transform -translate-y-full scale-95 opacity-0 transition-all duration-500 z-40 pointer-events-none">
      <a href="#home" class="text-white text-2xl hover:text-teal-400 transition-colors">Home</a>
      <a href="#works" class="text-white text-2xl hover:text-teal-400 transition-colors">Works</a>
      <a href="#about-me" class="text-white text-2xl hover:text-teal-400 transition-colors">About Me</a>
      <a href="#contacts" class="text-white text-2xl hover:text-teal-400 transition-colors">Contacts</a>
      <!-- Optional Language Selector for Mobile -->
      <div id="mobile-lang-dropdown"
        class="relative flex items-center text-sm gap-1 text-slate-400 cursor-pointer hover:text-white transition-colors">
        EN
        <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300" stroke-width="1.5"></i>
        <ul
          class="absolute text-xs top-full left-0 mt-2 w-16 bg-[#1c2739]/70 border border-white rounded-md shadow-lg opacity-0 pointer-events-none transform -translate-y-2 transition-all duration-300">
          <li class="px-2 py-2 hover:bg-[#1c2739]/70">EN</li>
          <li class="px-2 py-2 hover:bg-[#1c2739]/70">FR</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dropdownOpen = ref(false)
const selectedLang = ref('EN')

// Toggle dropdown open/close
function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

// Select language and close dropdown
function selectLang(lang) {
  selectedLang.value = lang
  dropdownOpen.value = false
  console.log('Selected language:', lang)
}

// Close dropdown if clicked outside
function handleClickOutside(e) {
  if (!e.target.closest('#lang-dropdown')) {
    dropdownOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => window.removeEventListener('click', handleClickOutside))
</script>