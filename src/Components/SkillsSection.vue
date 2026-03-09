<template>
     <!-- Skills Section -->
        <section class="mb-32 relative">
          <div class="flex items-center gap-4 mb-12">
            <h2
              class="text-3xl font-medium tracking-tight text-white flex items-center"
            >
              <span class="text-teal-400">#</span>skills
            </h2>
            <div class="h-px bg-teal-400/40 flex-grow max-w-[250px]"></div>
          </div>

          <div class="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <!-- Decorations Left -->
            <div class="w-1/3 relative hidden lg:block min-h-[300px]">
              <div
                class="absolute top-4 left-4 text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
              >
                .....<br />.....<br />.....<br />.....<br />.....
              </div>
              <div
                class="absolute top-8 right-16 w-20 h-20 border border-slate-700"
              ></div>
              <div class="absolute bottom-16 left-8">
                <svg
                  width="146"
                  height="146"
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
              <div
                class="absolute bottom-20 right-8 text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
              >
                .....<br />.....<br />.....<br />.....<br />.....
              </div>
              <div
                class="absolute top-[40%] right-0 w-12 h-12 border border-slate-700"
              ></div>
            </div>

            <!-- Skills Grid -->
            <div
              class="w-full lg:w-2/3 flex flex-wrap lg:flex-nowrap gap-4 items-start justify-end"
            >
              <div
                class="flex flex-col gap-4 w-full md:w-[calc(50%-0.5rem)] lg:w-44"
              >
                <div class="border border-slate-700 bg-[#0B1120]">
                  <h3
                    class="p-2 px-3 border-b border-slate-700 text-white font-medium text-lg tracking-tight"
                  >
                    Languages
                  </h3>
                  <p class="p-3 text-slate-400 text-lg leading-relaxed">
                    TypeScript Lua<br />Python JavaScript
                  </p>
                </div>
              </div>

              <div
                class="flex flex-col gap-4 w-full md:w-[calc(50%-0.5rem)] lg:w-44"
              >
                <div class="border border-slate-700 bg-[#0B1120]">
                  <h3
                    class="p-2 px-3 border-b border-slate-700 text-white font-medium text-lg tracking-tight"
                  >
                    Databases
                  </h3>
                  <p class="p-3 text-slate-400 text-lg leading-relaxed">
                    SQLite PostgreSQL<br />Mongo
                  </p>
                </div>
                <div class="border border-slate-700 bg-[#0B1120]">
                  <h3
                    class="p-2 px-3 border-b border-slate-700 text-white font-medium text-lg tracking-tight"
                  >
                    Other
                  </h3>
                  <p class="p-3 text-slate-400 text-lg leading-relaxed">
                    HTML CSS EJS SCSS<br />REST Jinja
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-4 w-full md:w-full lg:w-52">
                <div class="border border-slate-700 bg-[#0B1120]">
                  <h3
                    class="p-2 px-3 border-b border-slate-700 text-white font-medium text-lg tracking-tight"
                  >
                    Tools
                  </h3>
                  <p class="p-3 text-slate-400 text-lg leading-relaxed">
                    VSCode Neovim Linux<br />Figma XFCE Arch<br />Git Font
                    Awesome
                  </p>
                </div>
                <div class="border border-slate-700 bg-[#0B1120]">
                  <h3
                    class="p-2 px-3 border-b border-slate-700 text-white font-medium text-lg tracking-tight"
                  >
                    Frameworks
                  </h3>
                  <p class="p-3 text-slate-400 text-lg leading-relaxed">
                    React Vue<br />Disnake Discord.js<br />Flask Express.js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
</template>