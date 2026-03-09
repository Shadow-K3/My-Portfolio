
<!-- <script setup>
import image6 from '../assets/images/image6.png'
import back from '../assets/images/back.avif'
</script> -->


<template>
      <!-- Hero Section -->
        <section
          class="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-24 mb-24 relative gap-12"
        >
          <!-- Hero Text -->
          <div class="md:w-1/2 z-10">
            <h1
              class="text-4xl md:text-[2rem] font-medium tracking-tight text-teal-400 mb-8 leading-tight"
            >
              Berol is a web designer and full-stack developer
            </h1>
            <p
              class="text-lg text-slate-400 mb-8 max-w-[28rem] leading-relaxed"
            >
              He crafts responsive websites where technologies meet creativity
            </p>
            <button
              class="border border-slate-800 text-slate-600 px-6 py-2 hover:bg-slate-800/30 transition-colors text-lg font-normal"
            >
              Contact me !!
            </button>
          </div>

          <!-- Hero Image & Decorations -->
          <div class="md:w-1/2 relative flex justify-center md:justify-end">
            <div class="relative w-80 h-96">
              <!-- Animated Snake Shape -->

              <div
                class="absolute top-0 right-12 md:right-24 z-0 w-64 h-64 opacity-80 pointer-events-none"
              >
                <svg
                  width="156"
                  height="156"
                  viewBox="0 0 156 156"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <!-- Glow effect -->
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <!-- Track 1 -->
                  <path
                    d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z"
                    stroke="#334155"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />

                  <!-- Snake 1 -->
                  <path
                    d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z"
                    stroke="#2dd4bf"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    pathLength="100"
                    stroke-dasharray="30 70"
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="100"
                      to="0"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  <!-- Track 2 -->
                  <path
                    d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z"
                    stroke="#334155"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />

                  <!-- Snake 2 -->
                  <path
                    d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z"
                    stroke="#2dd4bf"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    pathLength="100"
                    stroke-dasharray="30 70"
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="100"
                      to="0"
                      dur="2.5s"
                      begin="1.2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
              <!-- Decor: Dots Top -->
              <div
                class="absolute top-24 -right-8 text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm z-20"
              >
                .....<br />.....<br />.....<br />.....<br />.....
              </div>
              <!-- Decor: Dots Bottom Right -->
              <div
                class="absolute bottom-16 -right-12 text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm z-20"
              >
                .....<br />.....<br />.....<br />.....<br />.....
              </div>

              <!-- Main Image Placeholder -->
              <div
                class="w-full h-full relative z-10 flex items-end justify-center overflow-hidden"
              >
                <img
                  src="../assets/images/image6.png"
                  alt="Berol"
                  class="w-[95%] -top-[18%] relative h-[95%] object-cover object-top filter grayscale contrast-120 brightness-[90%]"
                />
              </div>

              <!-- Badge -->
              <div
                class="absolute bottom-11 left-[-2rem] md:left-2 border border-slate-700 p-1 pl-4 pr-6 flex items-center gap-3 text-xs text-slate-400 z-30 shadow-xl shadow-black/50"
              >
                <div class="w-4 h-4 bg-teal-400 border border-[#0B1120]"></div>
                Currently working on
                <span class="text-white font-medium tracking-tight"
                  >SafeWatch360</span
                >
              </div>
            </div>
          </div>
        </section>
</template>