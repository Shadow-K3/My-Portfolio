<template>
      <!-- Projects Section -->
        <section id="works" class="mb-32 relative">
          <div class="flex items-center justify-between mb-12">
            <div class="flex items-center gap-4 flex-grow">
              <h2
                class="text-3xl font-medium tracking-tight text-white flex items-center"
              >
                <span class="text-teal-400">#</span>projects
              </h2>
              <div class="h-px bg-teal-400/40 flex-grow max-w-[400px]"></div>
            </div>
            <a
              href="#"
              class="text-lg text-white hover:text-teal-400 transition-colors whitespace-nowrap hidden md:block"
              >View all ~~></a
            >
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Project 1 -->
            <div class="border border-slate-700 flex flex-col bg-[#0B1120]">
              <div
                class="h-48 border-b border-slate-700 relative overflow-hidden flex flex-col justify-center items-center bg-slate-800"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
                  alt="ChertNodes"
                  class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
                <h3 class="text-2xl font-medium text-white z-10 tracking-tight">
                  ChertNodes
                </h3>
                <p class="text-sm text-orange-400 z-10 mt-1">
                  Minecraft servers hosting
                </p>
              </div>
              <div class="p-3 border-b border-slate-700 text-slate-400 text-lg">
                HTML SCSS Python Flask
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-2xl font-medium text-white tracking-tight mb-3">
                  Neuralearn
                </h3>
                <p class="text-slate-400 text-lg mb-6 flex-grow">
                  Minecraft servers hosting
                </p>
                <div class="flex gap-4">
                  <button
                    class="border border-teal-400 text-white px-5 py-2 hover:bg-teal-400/10 text-lg font-normal transition-colors"
                  >
                    Live <span class="text-teal-400"><~></span>
                  </button>
                  <button
                    class="border border-slate-600 text-slate-400 px-5 py-2 hover:bg-slate-800 text-lg font-normal transition-colors"
                  >
                    Cached >=
                  </button>
                </div>
              </div>
            </div>

            <!-- Project 2 -->
            <div class="border border-slate-700 flex flex-col bg-[#0B1120]">
              <div
                class="h-48 border-b border-slate-700 relative overflow-hidden flex flex-col justify-center items-center bg-slate-900"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-transparent"
                ></div>
                <div class="flex items-center gap-3 z-10">
                  <i
                    data-lucide="shield-check"
                    class="w-10 h-10 text-teal-500"
                    stroke-width="1.5"
                  ></i>
                  <h3 class="text-2xl font-medium text-white tracking-tight">
                    PROTECTX
                  </h3>
                </div>
              </div>
              <div class="p-3 border-b border-slate-700 text-slate-400 text-lg">
                React Express Discord.js Node.js<br />HTML SCSS Python Flask
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-2xl font-medium text-white tracking-tight mb-3">
                  Saveurs D'ebene
                </h3>
                <p class="text-slate-400 text-lg mb-6 flex-grow">
                  Discord anti-crash bot
                </p>
                <div class="flex gap-4">
                  <button
                    class="border border-teal-400 text-white px-5 py-2 hover:bg-teal-400/10 text-lg font-normal transition-colors"
                  >
                    Live <span class="text-teal-400"><~></span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Project 3 -->
            <div class="border border-slate-700 flex flex-col bg-[#0B1120]">
              <div
                class="h-48 border-b border-slate-700 relative overflow-hidden flex flex-col justify-center items-center bg-indigo-950/50"
              >
                <h3
                  class="text-3xl font-medium text-white z-10 tracking-tight italic"
                >
                  Kahoot!
                </h3>
                <p
                  class="text-xl font-medium text-white z-10 mt-1 tracking-tight"
                >
                  Answers
                </p>
              </div>
              <div class="p-3 border-b border-slate-700 text-slate-400 text-lg">
                CSS Express Node.js
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <h3 class="text-2xl font-medium text-white tracking-tight mb-3">
                  Kahoot Answers<br />Viewer
                </h3>
                <p class="text-slate-400 text-lg mb-6 flex-grow">
                  Get answers to your kahoot quiz
                </p>
                <div class="flex gap-4">
                  <button
                    class="border border-teal-400 text-white px-5 py-2 hover:bg-teal-400/10 text-lg font-normal transition-colors"
                  >
                    Live <span class="text-teal-400"><~></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Decorative outline box -->
          <div
            class="absolute top-[40%] right-[-12vw] w-32 h-32 border border-slate-700/50 hidden xl:block"
          ></div>
        </section>
</template>