<template>
   

   

    <!-- Decorative Dot Grids (Left & Right) -->
    <div class="fixed left-2 top-1/2 transform -translate-y-1/2 text-[#ABB2BF]/30 font-mono leading-[0.5] tracking-[0.4em] hidden xl:block pointer-events-none">
        <div>.....</div><div>.....</div><div>.....</div><div>.....</div><div>.....</div>
    </div>
    <div class="fixed right-4 bottom-1/3 text-[#ABB2BF]/30 font-mono leading-[0.5] tracking-[0.4em] hidden xl:block pointer-events-none">
        <div>.....</div><div>.....</div><div>.....</div><div>.....</div><div>.....</div>
    </div>
    
    <div class="fixed right-4 top-40 w-16 h-24 border-l border-b border-t border-[#ABB2BF]/20 hidden xl:block pointer-events-none"></div>
    <div class="fixed left-0 bottom-1/2 w-8 h-16 border-r border-b border-t border-[#ABB2BF]/20 hidden xl:block pointer-events-none"></div>

    <!-- Main Container -->
    <div class="max-w-[1000px] mx-auto px-6 sm:pl-24 sm:pr-8 py-8 relative">
        
    

        <!-- Page Title -->
        <div class="mb-20">
            <h1 class="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
                <span class="text-[#55B6C2]">/</span>projects
            </h1>
            <p class="text-lg text-[#ABB2BF]">List of my projects</p>
        </div>

        <!-- Complete Apps Section -->
        <section class="mb-24">
            <h2 class="text-3xl font-normal tracking-tight text-white mb-12 flex items-center">
                <span class="text-[#55B6C2] mr-2">#</span>complete-apps
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Project 1: ChertNodes -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="h-48 border-b border-[#ABB2BF]/30 relative overflow-hidden bg-[#2C313A]">
                        <!-- Abstract placeholder matching the vibe -->
                        <div class="absolute inset-0 flex items-center justify-center p-6">
                            <div class="w-full h-full border border-orange-500/30 rounded flex items-center p-4 gap-4 bg-orange-500/5">
                                <div class="w-12 h-12 bg-orange-500 rounded-sm flex items-center justify-center text-white font-semibold">CN</div>
                                <div>
                                    <div class="text-orange-500 font-semibold tracking-tight text-xl mb-1">ChertNodes</div>
                                    <div class="h-1 w-16 bg-orange-500/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        HTML SCSS Python Flask
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">ChertNodes</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Minecraft servers hosting</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal">
                                Live <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                            <a href="#" class="border border-[#ABB2BF]/50 px-4 py-2 text-[#ABB2BF] hover:bg-[#ABB2BF]/10 transition-colors flex items-center gap-2 text-base font-normal">
                                Cached <span class="font-mono text-[#ABB2BF]">&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Project 2: Kahoot Answers -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="h-48 border-b border-[#ABB2BF]/30 relative overflow-hidden bg-[#4B2875] flex items-center justify-center">
                        <div class="text-3xl font-normal text-white tracking-tight text-center">
                            Kahoot<span class="text-purple-300">!</span><br>Answers
                        </div>
                    </div>
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        CSS Express Node.js
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Kahoot Answers Viewer</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Get answers to your kahoot quiz</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal">
                                Live <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Project 3: ProtectX -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="h-48 border-b border-[#ABB2BF]/30 relative overflow-hidden bg-[#24292E] flex items-center justify-between px-6">
                        <div class="text-xl font-normal text-slate-300 tracking-tight border border-slate-600 px-3 py-1">PROTECTX</div>
                        <div class="w-16 h-16 border-2 border-green-500 flex items-center justify-center rounded-sm text-green-500">
                            <i data-lucide="lock" stroke-width="1.5" class="w-8 h-8"></i>
                        </div>
                    </div>
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        React Express Discord.js Node.js
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">ProtectX</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Discord anti-crash bot</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#ABB2BF]/50 px-4 py-2 text-[#ABB2BF] hover:bg-[#ABB2BF]/10 transition-colors flex items-center gap-2 text-base font-normal">
                                Cached <span class="font-mono text-[#ABB2BF]">&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Project 4: Kotik Bot -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="h-48 border-b border-[#ABB2BF]/30 relative overflow-hidden bg-[#2C2E33] flex items-center justify-center gap-4">
                        <div class="w-16 h-16 rounded-full bg-yellow-900/50 overflow-hidden border-2 border-yellow-600/50 flex items-center justify-center">
                           <span class="text-2xl">🐱</span>
                        </div>
                        <div class="text-2xl font-normal text-white tracking-tight">BOT KOTIK</div>
                    </div>
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        HTML CSS JS
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Kotik Bot</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Multi-functional discord bot</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal">
                                Live <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Project 5: Portfolio -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="h-48 border-b border-[#ABB2BF]/30 relative overflow-hidden bg-[#1E2227] flex items-center justify-center">
                        <div class="w-full h-full border-8 border-[#282C33] bg-[#3E4451] flex items-center justify-center text-slate-500 font-mono text-sm relative">
                            <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 to-transparent"></div>
                            Elias Portfolio
                        </div>
                    </div>
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        Vue TS Less
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Portfolio</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">You're using it rn</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal">
                                Github <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <!-- Small Projects Section -->
        <section class="mb-32">
            <h2 class="text-3xl font-normal tracking-tight text-white mb-12 flex items-center">
                <span class="text-[#55B6C2] mr-2">#</span>small-projects
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Small Project 1 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        Discord.js TS JS
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Bot boilerplate</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Start creating scalable discord.js bot with typescript in seconds</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Github <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Small Project 2 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        VUE CSS JS
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">My blog</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Front-end of my future blog website written in vue</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Github <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Small Project 3 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        Figma
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Chess pro</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Figma landing page about service for viewing chess tournaments</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Figma <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Small Project 4 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        Figma
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Crash protect website</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Figma template for website about anti-raid, anti-crash discord bot</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Figma <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Small Project 5 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        HTML CSS
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">CSS experiments</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Collection of my different little projects in css</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Live <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Small Project 6 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        Lua NeoVim
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Web Dev nvim config</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Config for neovim perfect for web developer</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Github <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Small Project 7 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        Python Quart HTML
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">Ooku</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Simple link shortener with auth</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Live <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Small Project 8 -->
                <article class="border border-[#ABB2BF]/30 flex flex-col bg-[#282C33] group hover:border-[#55B6C2]/50 transition-colors">
                    <div class="p-3 border-b border-[#ABB2BF]/30 text-base text-[#ABB2BF] font-mono leading-relaxed">
                        Figma
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="text-2xl font-normal text-white tracking-tight mb-3">School website</h3>
                        <p class="text-lg text-[#ABB2BF] mb-6 flex-grow leading-relaxed">Figma template website for my school</p>
                        <div class="flex gap-4">
                            <a href="#" class="border border-[#55B6C2] px-4 py-2 text-white hover:bg-[#55B6C2]/10 transition-colors flex items-center gap-2 text-base font-normal w-fit">
                                Figma <span class="font-mono text-[#ABB2BF]">&lt;~&gt;</span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>

    </div>

 

 

</template>

