<template>
  <section id="skills" class="relative mb-32 overflow-hidden lg:overflow-visible">
    <div class="flex items-center gap-4 mb-12">
      <h2 class="flex items-center text-3xl font-bold tracking-tight text-white cursor-default group">
        <span class="text-teal-400 transition-transform group-hover:translate-x-1">#</span>
        {{ $t('skills.title') }}
      </h2>
      <div class="h-[1px] bg-slate-800 flex-grow max-w-[250px] relative overflow-hidden">
         <div class="absolute inset-0 bg-teal-400/40 translate-x-[-100%] animate-[slide_4s_infinite]"></div>
      </div>
    </div>

    <div class="flex flex-col items-start gap-12 lg:flex-row">
      
      <div class="w-full lg:w-1/3 relative hidden lg:block min-h-[350px]">
        <div class="absolute top-0 left-0 text-slate-700/40 leading-[0.8] tracking-[0.5em] text-xs font-mono select-none">
          <p v-for="i in 6" :key="i">010101010101</p>
        </div>
        
        <div class="absolute inset-0 flex items-center justify-center opacity-60">
          <svg width="200" height="200" viewBox="0 0 156 156" fill="none" class="filter drop-shadow-[0_0_8px_rgba(45,212,191,0.2)]">
            <defs>
              <filter id="glow-skills"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#1e293b" stroke-width="1" />
            <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#1e293b" stroke-width="1" />
            <path d="M77.5 78.5H38.75V117.25H77.5V156H0V39.75H77.5V78.5Z" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="40 120" filter="url(#glow-skills)">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M155 117.25H77.5V78.5H116.25V39.75H77.5V1H155V117.25Z" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="40 120" filter="url(#glow-skills)">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" begin="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        <div class="absolute w-16 h-16 rotate-45 border bottom-4 right-10 border-slate-800"></div>
      </div>

      <div class="grid w-full grid-cols-1 gap-4 lg:w-2/3 md:grid-cols-2 lg:grid-cols-3">
        
        <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group">
          <h3 class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
            <span class="mr-2 font-bold text-teal-400">></span>{{ $t('skills.categories.languages') }}
          </h3>
          <div class="flex flex-wrap gap-2 p-4">
            <span v-for="s in ['PHP', 'DART', 'JS', 'TS',]" :key="s" class="font-mono text-sm transition-colors cursor-default text-slate-400 hover:text-teal-400">
              {{ s }}
            </span>
          </div>
        </div>

        <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group">
          <h3 class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
            <span class="mr-2 font-bold text-teal-400">></span>{{ $t('skills.categories.frameworks') }}
          </h3>
          <div class="flex flex-wrap gap-2 p-4 font-mono text-sm text-slate-400">
            React • Vue • Laravel • Flutter • 
          </div>
        </div>

        <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group lg:row-span-1">
          <h3 class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
            <span class="mr-2 font-bold text-teal-400">></span>{{ $t('skills.categories.databases') }}
          </h3>
          <div class="p-4 font-mono text-sm text-slate-400">
            SQLite • MariaDB •
          </div>
        </div>

        <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group md:col-span-2">
          <h3 class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
            <span class="mr-2 font-bold text-teal-400">></span>{{ $t('skills.categories.tools') }}
          </h3>
          <div class="flex flex-wrap p-4 font-mono text-sm gap-x-6 gap-y-2 text-slate-400">
            <span>VSCODE</span> <span>LINUX (KALI/ARCH)</span> <span>FIGMA</span> <span>GIT</span> <span>DOCKER</span>
          </div>
        </div>

        <div class="transition-all border border-slate-800 bg-slate-900/20 hover:border-teal-400/30 group">
          <h3 class="p-3 font-mono text-sm tracking-widest text-white uppercase border-b border-slate-800 bg-slate-900/40">
            <span class="mr-2 font-bold text-teal-400">></span>{{ $t('skills.categories.webCore') }}
          </h3>
          <div class="p-4 font-mono text-sm text-slate-400">
            HTML5 • CSS3 • TailwindCSS • Bootstrap
          </div>
        </div>

      </div>
    </div>
  </section>
</template>