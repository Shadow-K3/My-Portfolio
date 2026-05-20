<template>
  <div class="overflow-hidden font-sans text-white">
    <!-- ========== HERO SECTION ========== -->
    <section
      class="container px-6 flex flex-col md:flex-row items-center justify-between mb-24 gap-12 relative min-h-[80vh] bg-cover bg-center bg-no-repeat mx-auto"
      :style="{ backgroundImage: `url(${backImg})` }">
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/95 to-transparent z-0 opacity-95">
      </div>

      <div class="relative z-10 md:w-1/2">
        <div class="min-h-[140px] md:min-h-[160px]">
          <h1 class="text-3xl md:text-[2.5rem] font-bold tracking-tight text-white mb-2 leading-tight">
            {{ m.hero_isA() }}
          </h1>
          <h2 class="text-4xl md:text-[3rem] font-bold tracking-tight text-teal-400 leading-tight flex items-center">
            {{ displayedTitle }}
            <span class="inline-block w-1 h-10 ml-2 bg-teal-400 animate-pulse"></span>
          </h2>
        </div>

        <p class="text-lg text-slate-300 mt-6 mb-10 max-w-[28rem] leading-relaxed">
          {{ m.hero_description() }}
        </p>

        <router-link to="/contact"
          class="px-8 cursor-pointer py-3 font-mono text-lg transition-all border border-slate-700 text-slate-300 hover:bg-teal-400/10 hover:text-teal-400 hover:border-teal-400/50 group">
          {{ m.hero_cta() }} <span class="inline-block transition-transform group-hover:translate-x-1">>_</span>

        </router-link>
      </div>

      <div class="relative z-10 flex justify-center md:w-1/2 md:justify-end">
        <div class="relative w-80 h-96">
          <div
            class="absolute -top-8 right-32 z-0 w-64 h-64 pointer-events-none opacity-60 filter drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
            <svg width="100%" height="100%" viewBox="0 0 156 156" fill="none">
              <defs>
                <filter id="glow-skills">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#1e293b" stroke-width="1" />
              <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#1e293b" stroke-width="1" />
              <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#2dd4bf" stroke-width="2"
                stroke-dasharray="40 120" filter="url(#glow-skills)">
                <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#2dd4bf" stroke-width="2"
                stroke-dasharray="40 120" filter="url(#glow-skills)">
                <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" begin="2s"
                  repeatCount="indefinite" />
              </path>
            </svg>
          </div>

          <div
            class="relative z-10 flex items-end justify-center w-full h-full overflow-hidden rounded-lg shadow-2xl group shadow-black/70 bg-[#0B1120]/50 build-border">
            <div
              class="absolute z-20 w-4 h-4 transition-opacity border-t-2 border-l-2 border-teal-400 opacity-0 top-2 left-2 group-hover:opacity-100">
            </div>
            <div
              class="absolute z-20 w-4 h-4 transition-opacity border-b-2 border-r-2 border-teal-400 opacity-0 bottom-2 right-2 group-hover:opacity-100">
            </div>

            <img :src="meImg" alt="Berol"
              class="w-[95%] -top-[15%] relative h-[95%] object-cover object-top group-hover:scale-105 transition-all duration-700" />

            <div
              class="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent bg-[length:100%_10px] animate-scan pointer-events-none">
            </div>
          </div>

          <div
            class="absolute bottom-8 left-[1.5rem] md:left-8 border border-slate-700 bg-[#0B1120] p-1 pl-4 pr-6 flex items-center gap-3 text-xs text-slate-400 z-30 shadow-xl shadow-black/50 rounded">
            <div class="w-3 h-3 bg-teal-400 animate-pulse"></div>
            {{ m.hero_currentProject() }}
            <span class="font-mono font-bold text-indigo-400">SafeWatch360</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== QUOTE SECTION ========== -->
    <section class="relative flex flex-col items-center justify-center mt-20 mb-48 group">
      <div
        class="absolute inset-0 bg-teal-500/5 blur-[100px] rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      </div>

      <div class="relative w-fit max-w-[90%] md:max-w-2xl">
        <div
          class="border-2 border-slate-800 p-10 md:p-12 relative z-10 bg-[#0B1120]/80 backdrop-blur-sm group-hover:border-teal-500/30 transition-colors duration-500">
          <span
            class="absolute -top-6 left-8 bg-[#0B1120] px-3 text-5xl text-teal-400 font-serif italic font-black select-none">"</span>
          <h2
            class="font-mono text-xl italic font-medium leading-relaxed tracking-tight text-white uppercase md:text-3xl">
            {{ m.quote_part1() }}
            <span class="text-teal-400">{{ m.quote_highlight() }}</span>
            {{ m.quote_part2() }}
          </h2>
          <span
            class="absolute -bottom-10 right-8 bg-[#0B1120] px-3 text-5xl text-teal-400 font-serif italic font-black select-none">"</span>
        </div>
        <div
          class="border-2 border-slate-800 border-t-0 p-4 text-white font-mono text-sm absolute -bottom-[54px] right-0 w-64 text-right bg-[#0B1120] z-20 flex items-center justify-end gap-3 group-hover:border-teal-500/30 transition-colors duration-500">
          <span class="font-bold text-teal-500 animate-pulse">></span>
          <span class="tracking-[0.2em] uppercase">{{ m.quote_author() }}</span>
        </div>
      </div>
      <div class="absolute -top-10 -left-[5vw] w-20 h-20 border border-slate-800/40 rotate-12 pointer-events-none">
      </div>
      <div
        class="absolute top-0 right-[-8vw] w-32 h-32 border border-teal-500/5 -rotate-12 pointer-events-none hidden lg:block">
      </div>
    </section>

    <!-- ========== PROJECTS SECTION ========== -->
    <section id="works" class="relative mb-32">
      <div class="flex items-center justify-between mb-12">
        <div class="flex items-center flex-grow gap-4">
          <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
            <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
            {{ m.projects_title() }}
          </h2>
          <div class="h-[1px] bg-slate-800 flex-grow max-w-[400px] relative overflow-hidden">
            <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_3s_infinite]"></div>
          </div>
        </div>
        <router-link to="/projects"
          class="items-center hidden gap-2 font-mono text-sm transition-colors text-slate-400 hover:text-white whitespace-nowrap md:flex">
          {{ m.projects_viewAll() }} <span class="text-teal-400">~~></span>
        </router-link>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Projet AI -->
        <div
          class="relative flex flex-col overflow-hidden transition-all border border-slate-800 bg-slate-900/40 hover:border-teal-400/40 group">
          <div
            class="absolute z-20 flex items-center gap-2 px-2 py-1 border top-3 right-3 bg-slate-900/90 backdrop-blur-sm border-teal-500/30">
            <span class="text-[8px] font-mono text-teal-400 uppercase tracking-tighter">{{ m.projects_list_ai_badge()
              }}</span>
          </div>
          <div class="relative h-48 overflow-hidden border-b border-slate-800 bg-slate-950">
            <img src="../assets/images/Ai.png" alt="Ai"
              class="object-cover w-full h-full transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105" />
          </div>
          <div
            class="p-2 border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80">
            FIGMA TAILWINDCSS JAVASCRIPT
          </div>
          <div class="flex flex-col flex-grow p-6">
            <h3 class="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{
              m.projects_list_ai_title() }}</h3>
            <p class="flex-grow mb-6 text-sm leading-relaxed text-slate-400">{{ m.projects_list_ai_desc() }}</p>
            <button
              class="flex items-center gap-2 px-4 py-2 font-mono text-xs text-white transition-all border border-teal-400/50 hover:bg-teal-400/10 w-fit">
              {{ m.projects_demo() }} <span class="text-teal-400">&lt;~&gt;</span>
            </button>
          </div>
        </div>

        <!-- Projet Neura -->
        <div
          class="relative flex flex-col overflow-hidden transition-all border border-slate-800 bg-slate-900/40 hover:border-teal-400/40 group">
          <div
            class="absolute z-20 flex items-center gap-2 px-2 py-1 border top-3 right-3 bg-slate-900/90 backdrop-blur-sm border-teal-500/30">
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
            </span>
            <span class="text-[8px] font-mono text-teal-400 uppercase tracking-tighter">{{ m.projects_list_neura_badge()
              }}</span>
          </div>
          <div class="relative h-48 overflow-hidden border-b border-slate-800 bg-slate-950">
            <img src="../assets/images/Neura.png" alt="Neura"
              class="object-contain w-full h-full p-4 transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105" />
          </div>
          <div
            class="p-2 border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80">
            FIGMA UI/UX DESIGN
          </div>
          <div class="flex flex-col flex-grow p-6">
            <h3 class="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{
              m.projects_list_neura_title() }}</h3>
            <p class="flex-grow mb-6 text-sm leading-relaxed text-slate-400">{{ m.projects_list_neura_desc() }}</p>
            <button
              class="flex items-center gap-2 px-4 py-2 font-mono text-xs text-white transition-all border border-teal-400/50 hover:bg-teal-400/10 w-fit">
              {{ m.projects_design() }} <span class="text-teal-400">&lt;~&gt;</span>
            </button>
          </div>
        </div>

        <!-- Projet Saveurs -->
        <div
          class="relative flex flex-col overflow-hidden transition-all border border-slate-800 bg-slate-900/40 hover:border-teal-400/40 group">
          <div class="relative h-48 overflow-hidden border-b border-slate-800 bg-slate-950">
            <img src="../assets/images/Saveurs.png" alt="Saveurs"
              class="object-cover w-full h-full transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105" />
          </div>
          <div
            class="p-2 border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-900/80">
            PHP LARAVEL TAILWIND SQL
          </div>
          <div class="flex flex-col flex-grow p-6">
            <h3 class="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-400">{{
              m.projects_list_saveurs_title() }}</h3>
            <p class="flex-grow mb-6 text-sm leading-relaxed text-slate-400">{{ m.projects_list_saveurs_desc() }}</p>
            <button
              class="flex items-center gap-2 px-4 py-2 font-mono text-xs text-white transition-all border border-teal-400/50 hover:bg-teal-400/10 w-fit">
              {{ m.projects_root() }} <span class="text-teal-400">&lt;~&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SKILLS SECTION ========== -->
    <section id="skills" class="relative mb-32 overflow-hidden lg:overflow-visible">
      <div class="flex items-center gap-4 mb-12">
        <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
          <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
          {{ m.skills_title() }}
        </h2>
        <div class="h-[1px] bg-slate-800 flex-grow max-w-[250px] relative overflow-hidden">
          <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_4s_infinite]"></div>
        </div>
      </div>

      <div class="flex flex-col items-start gap-12 lg:flex-row">
        <div class="w-full lg:w-1/3 relative hidden lg:block min-h-[350px]">
          <div
            class="absolute top-0 left-0 text-slate-700/40 leading-[0.8] tracking-[0.5em] text-xs font-mono select-none">
            <p v-for="i in 6" :key="i">010101010101</p>
          </div>
          <div class="absolute inset-0 flex items-center justify-center opacity-60">
            <svg width="200" height="200" viewBox="0 0 156 156" fill="none"
              class="filter drop-shadow-[0_0_8px_rgba(45,212,191,0.2)]">
              <defs>
                <filter id="glow-skills2">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#1e293b" stroke-width="1" />
              <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#1e293b" stroke-width="1" />
              <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#2dd4bf" stroke-width="2"
                stroke-dasharray="40 120" filter="url(#glow-skills2)">
                <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#2dd4bf" stroke-width="2"
                stroke-dasharray="40 120" filter="url(#glow-skills2)">
                <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" begin="2s"
                  repeatCount="indefinite" />
              </path>
            </svg>
          </div>
          <div class="absolute w-16 h-16 rotate-45 border bottom-4 right-10 border-slate-800"></div>
        </div>

        <div class="grid w-full grid-cols-1 gap-4 lg:w-2/3 md:grid-cols-2 lg:grid-cols-3">
          <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group">
            <h3
              class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
              <span class="mr-2 font-bold text-teal-400">></span>{{ m.skills_categories_languages() }}
            </h3>
            <div class="flex flex-wrap gap-2 p-4">
              <span v-for="s in ['PHP', 'DART', 'JS', 'TS']" :key="s"
                class="font-mono text-sm transition-colors cursor-default text-slate-400 hover:text-teal-400">{{ s
                }}</span>
            </div>
          </div>

          <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group">
            <h3
              class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
              <span class="mr-2 font-bold text-teal-400">></span>{{ m.skills_categories_frameworks() }}
            </h3>
            <div class="flex flex-wrap gap-2 p-4 font-mono text-sm text-slate-400">
              React • Vue • Laravel • Flutter •
            </div>
          </div>

          <div
            class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group lg:row-span-1">
            <h3
              class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
              <span class="mr-2 font-bold text-teal-400">></span>{{ m.skills_categories_databases() }}
            </h3>
            <div class="p-4 font-mono text-sm text-slate-400">SQLite • MariaDB •</div>
          </div>

          <div
            class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group md:col-span-2">
            <h3
              class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
              <span class="mr-2 font-bold text-teal-400">></span>{{ m.skills_categories_tools() }}
            </h3>
            <div class="flex flex-wrap p-4 font-mono text-sm gap-x-6 gap-y-2 text-slate-400">
              <span>VSCODE</span> <span>LINUX (KALI/ARCH)</span> <span>FIGMA</span> <span>GIT</span> <span>DOCKER</span>
            </div>
          </div>

          <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group">
            <h3
              class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
              <span class="mr-2 font-bold text-teal-400">></span>{{ m.skills_categories_webCore() }}
            </h3>
            <div class="p-4 font-mono text-sm text-slate-400">HTML5 • CSS3 • TailwindCSS • Bootstrap</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== ABOUT SECTION ========== -->
    <section id="about-me" class="relative py-12 mb-32">
      <div class="flex items-center gap-4 mb-16">
        <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
          <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
          {{ m.about_title() }}
        </h2>
        <div class="h-[1px] bg-slate-800 flex-grow max-w-[350px] relative overflow-hidden">
          <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_4s_infinite]"></div>
        </div>
      </div>

      <div class="flex flex-col items-start gap-16 lg:flex-row">
        <div class="w-full space-y-6 lg:w-3/5">
          <div class="space-y-4">
            <p class="font-mono text-xl text-white"><span class="text-teal-400">></span> {{ m.about_greeting() }}</p>
            <div class="space-y-6 font-sans text-lg leading-relaxed text-slate-400">
              <p v-html="aboutDescription"></p>
            </div>
          </div>
          <router-link to="/about"
            class="relative flex items-center gap-4 px-8 py-3 overflow-hidden font-mono text-sm text-white transition-all border group border-teal-400/50 hover:bg-teal-400/10 w-fit">
            <span class="relative z-10 font-bold tracking-widest uppercase">{{ m.about_cta() }}</span>
            <i data-lucide="arrow-right" class="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-2"
              stroke-width="2"></i>
            <div
              class="absolute inset-0 transition-transform duration-300 -translate-x-full bg-teal-400/5 group-hover:translate-x-0">
            </div>
          </router-link>
        </div>

        <div class="relative flex justify-center w-full lg:w-2/5 lg:justify-end">
          <div class="relative w-full max-w-[380px]">
            <div
              class="absolute -top-10 -left-10 text-slate-700/40 leading-[0.8] tracking-[0.6em] text-[10px] font-mono select-none">
              <p v-for="i in 5" :key="i">.....</p>
            </div>
            <div
              class="relative z-10 p-8 transition-all duration-500 border-2 shadow-2xl border-slate-800 hover:border-teal-400/30 group">
              <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div class="flex gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-red-500/50 transition-colors"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-yellow-500/50 transition-colors">
                  </div>
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-800 group-hover:bg-teal-500/50 transition-colors"></div>
                </div>
                <span class="text-[10px] font-mono text-slate-600 uppercase tracking-tighter">sys_audit.log</span>
              </div>
              <div class="space-y-3 font-mono text-xs md:text-sm">
                <p class="flex items-center gap-2 text-teal-400"><span class="opacity-50">01</span> /* {{
                  m.about_log_title() }} */</p>
                <p class="flex items-center gap-2 text-slate-500"><span class="opacity-50">02</span> <span
                    class="text-slate-300">> {{ m.about_log_env() }}:</span> Production</p>
                <p class="flex items-center gap-2 text-slate-500"><span class="opacity-50">03</span> <span
                    class="text-slate-300">> Core:</span> Vue 3 / Vite / Laravel</p>
                <p class="flex items-center gap-2 text-slate-500"><span class="opacity-50">04</span> <span
                    class="text-slate-300">> {{ m.about_log_security() }}:</span> Junior Pentester</p>
                <p class="flex items-center gap-2 text-slate-500"><span class="opacity-50">05</span> <span
                    class="text-slate-300">> {{ m.about_log_loc() }}:</span> Douala, CM (237)</p>
                <div class="flex items-center justify-between pt-4 mt-6 border-t border-slate-800/50">
                  <span class="text-teal-500/80 animate-pulse text-[10px]">SCANNING_ACTIVE...</span>
                  <i data-lucide="shield-check" class="w-4 h-4 text-teal-500/50"></i>
                </div>
              </div>
            </div>
            <div
              class="absolute w-full h-full transition-transform duration-500 border -bottom-6 -right-6 border-slate-800 -z-10 group-hover:translate-x-2 group-hover:translate-y-2">
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute hidden font-mono text-4xl pointer-events-none select-none top-1/2 -left-24 text-slate-800/20 xl:block">
        <p v-for="i in 4" :key="i">::::::::::</p>
      </div>
    </section>

    <!-- ========== CONTACT SECTION ========== -->
    <section id="contacts" class="relative mb-32">
      <div class="flex items-center gap-4 mb-16">
        <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
          <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
          {{ m.contact_title() }}
        </h2>
        <div class="h-[1px] bg-slate-800 flex-grow max-w-[150px] relative overflow-hidden">
          <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_3s_infinite]"></div>
        </div>
      </div>

      <div class="flex flex-col items-start justify-between gap-16 md:flex-row">
        <div class="w-full space-y-6 md:w-1/2 lg:w-3/5">
          <p class="font-mono text-xl text-white opacity-90"><span class="font-bold text-teal-400">></span> {{
            m.contact_connection() }}</p>
          <div class="max-w-md text-lg leading-relaxed text-slate-400">
            <p v-html="contactSubtitle"></p>
          </div>
          <div class="hidden pt-8 md:block">
            <div class="flex gap-2">
              <div v-for="i in 3" :key="i" class="w-12 h-1 overflow-hidden rounded-full bg-slate-800">
                <div class="h-full bg-teal-500/50 animate-[loading_2s_infinite]" :style="{ animationDelay: `${i * 0.2}s` }">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full group md:w-auto">
          <div
            class="absolute transition-opacity opacity-25 -inset-1 bg-gradient-to-r from-teal-500/20 to-transparent blur group-hover:opacity-50">
          </div>
          <div
            class="relative border border-slate-800 p-8 min-w-[320px] shadow-2xl transition-all duration-500 group-hover:border-teal-400/30 bg-[#0B1120]/50 backdrop-blur-sm">
            <h3 class="mb-8 text-sm font-mono uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
              <span class="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              {{ m.contact_cardTitle() }}
            </h3>
            <div class="flex flex-col gap-8">
              <a href="https://wa.me/237652423743" target="_blank"
                class="flex items-start gap-4 transition-all group/link">
                <div
                  class="p-2 transition-colors border bg-slate-900 border-slate-800 text-slate-500 group-hover/link:text-teal-400 group-hover/link:border-teal-400/40">
                  <i data-lucide="message-square" class="w-5 h-5" stroke-width="1.5"></i>
                </div>
                <div class="flex flex-col">
                  <span class="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{{
                    m.contact_whatsappLabel() }}</span>
                  <span class="transition-colors text-slate-400 group-hover/link:text-white">+237 652 423 743<br>+237
                    654 972 496</span>
                </div>
              </a>
              <a href="mailto:tchoumiberol816@gmail.com" class="flex items-start gap-4 transition-all group/link">
                <div
                  class="p-2 transition-colors border bg-slate-900 border-slate-800 text-slate-500 group-hover/link:text-teal-400 group-hover/link:border-teal-400/40">
                  <i data-lucide="mail" class="w-5 h-5" stroke-width="1.5"></i>
                </div>
                <div class="flex flex-col">
                  <span class="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{{ m.contact_emailLabel()
                    }}</span>
                  <span
                    class="text-slate-400 group-hover/link:text-white transition-colors truncate max-w-[200px] lg:max-w-none">tchoumiberol816@gmail.com</span>
                </div>
              </a>
            </div>
            <div class="flex items-center justify-between pt-4 mt-8 border-t border-slate-800/50">
              <span class="text-[8px] font-mono text-slate-700 tracking-[0.5em]">{{ m.contact_status() }}</span>
              <i data-lucide="shield-check" class="w-3 h-3 text-slate-800"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import * as m from '@/paraglide/messages'
import { currentLocale } from '@/composables/useLocale'

// Images imports
import backImg from '@/assets/images/back.png'
import meImg from '@/assets/images/me.png'

// ========== HERO TYPING ANIMATION ==========
const displayedTitle = ref("")
const titleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = ref(100)

// Pre‑fetch the title message functions as an array
const heroTitles = [
  m.hero_titles_0,
  m.hero_titles_1,
  m.hero_titles_2,
  m.hero_titles_3
]

const getCurrentFullText = () => {
  return heroTitles[titleIndex.value]()
}

const typeEffect = () => {
  const currentFullText = getCurrentFullText()

  if (isDeleting.value) {
    displayedTitle.value = currentFullText.substring(0, charIndex.value - 1)
    charIndex.value--
    typingSpeed.value = 50
  } else {
    displayedTitle.value = currentFullText.substring(0, charIndex.value + 1)
    charIndex.value++
    typingSpeed.value = 100
  }

  if (!isDeleting.value && charIndex.value === currentFullText.length) {
    isDeleting.value = true
    typingSpeed.value = 2000
  } else if (isDeleting.value && charIndex.value === 0) {
    isDeleting.value = false
    titleIndex.value = (titleIndex.value + 1) % heroTitles.length
    typingSpeed.value = 500
  }

  setTimeout(typeEffect, typingSpeed.value)
}

// ========== ABOUT DESCRIPTION (with HTML) ==========
const aboutDescription = computed(() => {
  return m.about_description({
    role1: `<span class="italic font-medium text-white">${m.about_role1()}</span>`,
    role2: `<span class="italic font-medium text-white">${m.about_role2()}</span>`
  })
})

// ========== CONTACT SUBTITLE (with HTML) ==========
const contactSubtitle = computed(() => {
  return m.contact_subtitle({
    freelance: `<span class="text-white border-b border-teal-500/30">${m.contact_freelance()}</span>`
  })
})

onMounted(() => {
  typeEffect()
})
</script>

<style scoped>
/* ========== ANIMATIONS ========== */
@keyframes slide {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(300%);
  }
}

@keyframes slide_3s_infinite {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes slide_4s_infinite {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

.animate-scan {
  animation: scan 8s linear infinite;
}

.animate-[slide_3s_infinite] {
  animation: slide_3s_infinite 3s infinite;
}

.animate-[slide_4s_infinite] {
  animation: slide_4s_infinite 4s infinite;
}

.animate-[loading_2s_infinite] {
  animation: loading 2s infinite;
}

/* ========== QUOTE HOVER EFFECT ========== */
.group:hover h2 {
  text-shadow: 2px 0 #2dd4bf20, -2px 0 #ff000010;
  animation: glitch-skew 1s infinite linear alternate-reverse;
}

@keyframes glitch-skew {
  0% {
    transform: skew(0deg);
  }

  20% {
    transform: skew(1deg);
  }

  40% {
    transform: skew(-1deg);
  }

  100% {
    transform: skew(0deg);
  }
}
</style>

<style scoped>
/* ========== ANIMATIONS ========== */
@keyframes slide {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(300%);
  }
}

@keyframes slide_3s_infinite {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes slide_4s_infinite {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

.animate-scan {
  animation: scan 8s linear infinite;
}

.animate-[slide_3s_infinite] {
  animation: slide_3s_infinite 3s infinite;
}

.animate-[slide_4s_infinite] {
  animation: slide_4s_infinite 4s infinite;
}

.animate-[loading_2s_infinite] {
  animation: loading 2s infinite;
}

/* ========== QUOTE HOVER EFFECT ========== */
.group:hover h2 {
  text-shadow: 2px 0 #2dd4bf20, -2px 0 #ff000010;
  animation: glitch-skew 1s infinite linear alternate-reverse;
}

@keyframes glitch-skew {
  0% {
    transform: skew(0deg);
  }

  20% {
    transform: skew(1deg);
  }

  40% {
    transform: skew(-1deg);
  }

  100% {
    transform: skew(0deg);
  }
}
</style>