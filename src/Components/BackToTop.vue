<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const liquidContainer = ref(null)
const backToTopBtn   = ref(null)
const backToTopWrapper = ref(null)

const { t } = useI18n()

let rafId = null

// ────────────────────────────────────────────────
//  Custom smooth scroll to top with easing
// ────────────────────────────────────────────────
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)          // starts fast → slows down gently (very smooth feel)
const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5)          // even more gentle deceleration
// const easeOutExpo  = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)  // very dramatic slow-down (try if you want luxury feel)

// You can pick one — easeOutCubic is a great default for "very smooth"
const easing = easeOutCubic

function smoothScrollToTop(duration = 1200) {   // ← increase to 1400–1800 ms for even slower/softer
  const startY = window.scrollY || document.documentElement.scrollTop
  if (startY === 0) return

  const startTime = performance.now()

  function animate(time) {
    const elapsed = time - startTime
    const progress = Math.min(elapsed / duration, 1)   // 0 → 1

    const eased = easing(progress)
    const newY = startY * (1 - eased)   // from startY → 0

    window.scrollTo(0, newY)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

// Your existing updateLiquid and scrollHandler stay the same
const updateLiquid = () => {
  if (!backToTopWrapper.value || !liquidContainer.value) return

  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  if (scrollTop > 50) {
    backToTopWrapper.value.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none')
    backToTopWrapper.value.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto')
  } else {
    backToTopWrapper.value.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none')
    backToTopWrapper.value.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto')
  }

  const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
  const topPosition = 100 - (scrollPercent * 1.15)
  liquidContainer.value.style.top = `${topPosition}%`

  rafId = requestAnimationFrame(updateLiquid)
}

const scrollHandler = () => {
  if (!rafId) {
    rafId = requestAnimationFrame(updateLiquid)
  }
}

const scrollToTop = () => {
  smoothScrollToTop(1400)   // ← tune this number: 1000 = quick, 1800 = very dreamy/slow
}

onMounted(() => {
  updateLiquid()
  window.addEventListener('scroll', scrollHandler, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandler)
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
})
</script>

<template>
  <!-- Your template stays exactly the same -->
  <div
    ref="backToTopWrapper"
    class="fixed z-50 transition-all duration-500 translate-y-4 opacity-0 pointer-events-none bottom-8 right-8"
  >
    <button
      ref="backToTopBtn"
      class="relative w-14 h-14 md:w-16 md:h-16 bg-[#0A192F] rounded-full flex items-center justify-center overflow-hidden shadow-2xl ring-1 ring-white/10 hover:scale-105 active:scale-95 transition-transform group focus:outline-none cursor-pointer"
      @click="scrollToTop"
    >
      <p style="display:inline-block; transform: rotate(-90deg);" class="z-50 text-xl font-bold text-teal-700">~~></p>

      <div
        ref="liquidContainer"
        class="absolute left-0 w-full h-[150%] transition-all duration-150 ease-out z-10"
        :style="{ top: '100%' }"
      >
        <svg
          viewBox="0 0 200 24"
          class="w-[200%] h-6 absolute top-0 left-0 text-teal-200"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 12 Q 25 20 50 12 T 100 12 T 150 12 T 200 12 L 200 24 L 0 24 Z"
            fill="currentColor"
            opacity="0.4"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-100 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M 0 12 Q 25 4 50 12 T 100 12 T 150 12 T 200 12 L 200 24 L 0 24 Z"
            fill="currentColor"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-100 0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <div class="absolute left-0 w-full h-full bg-teal-200 top-6"></div>
      </div>
    </button>
  </div>
</template>