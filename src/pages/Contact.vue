<template>
    

  

    <!-- Decorative Dot Grids -->
    <div class="fixed left-2 top-1/2 transform -translate-y-1/2 text-[#ABB2BF]/30 font-mono leading-[0.5] tracking-[0.4em] hidden xl:block pointer-events-none text-lg">
        <div>.....</div><div>.....</div><div>.....</div><div>.....</div><div>.....</div>
    </div>
    <div class="fixed right-4 bottom-1/3 text-[#ABB2BF]/30 font-mono leading-[0.5] tracking-[0.4em] hidden xl:block pointer-events-none text-lg">
        <div>.....</div><div>.....</div><div>.....</div><div>.....</div><div>.....</div>
    </div>
    
    <div class="fixed right-4 top-40 w-16 h-24 border-l border-b border-t border-[#ABB2BF]/20 hidden xl:block pointer-events-none"></div>
    <div class="fixed left-0 bottom-1/2 w-8 h-16 border-r border-b border-t border-[#ABB2BF]/20 hidden xl:block pointer-events-none"></div>

    <!-- Main Container -->
    <main class="max-w-[1000px] mx-auto px-6 sm:pl-24 sm:pr-8 py-8 relative flex-1 w-full">
        
     

        <!-- Page Title -->
        <div class="mb-16">
            <h1 class="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
                <span class="text-[#55B6C2]">/</span>contacts
            </h1>
            <p class="text-xl text-[#ABB2BF] font-light">Who am i?</p>
        </div>

        <!-- Contacts Content -->
        <section class="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24 justify-between items-start">
            
            <!-- Text -->
            <div class="flex-1 max-w-lg text-[#ABB2BF] text-xl leading-relaxed font-light mt-2">
                <p>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me</p>
            </div>
            
            <!-- Contact Boxes -->
            <div class="flex flex-col sm:flex-row gap-6 items-stretch w-full md:w-auto">
                
                <!-- Support Box -->
                <div class="border border-[#ABB2BF]/30 p-6 flex flex-col gap-4 min-w-[200px]">
                    <h3 class="text-white font-medium text-lg">Support me here</h3>
                    <div class="text-[#ABB2BF] text-lg font-light">
                        4149500120690030
                    </div>
                </div>

                <!-- Message Box -->
                <div class="border border-[#ABB2BF]/30 p-6 flex flex-col gap-4 min-w-[260px]">
                    <h3 class="text-white font-medium text-lg">Message me here</h3>
                    <div class="flex flex-col gap-3 text-[#ABB2BF] text-lg font-light">
                        <a href="#" class="flex items-center gap-2 hover:text-white transition-colors group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[#ABB2BF] group-hover:text-[#55B6C2] transition-colors"><path d="M14.82 2.41c-1.39-.56-2.9-.88-4.48-.94L10 1h-2l-.34.47c-1.58.06-3.09.38-4.48.94A19.8 19.8 0 0 0 1 14.17c2.4 1.83 4.87 2.87 7.42 3.13l1.1-1.46c-1.63-.48-3.13-1.2-4.48-2.11 1.05.67 2.16 1.25 3.32 1.74a16.63 16.63 0 0 0 8.04 0c1.16-.49 2.27-1.07 3.32-1.74-1.35.91-2.85 1.63-4.48 2.11l1.1 1.46c2.55-.26 5.02-1.3 7.42-3.13A19.8 19.8 0 0 0 14.82 2.41Z"/><circle cx="8" cy="10" r="1.5" fill="currentColor"/><circle cx="16" cy="10" r="1.5" fill="currentColor"/></svg>
                            Berol#1234
                        </a>
                        <a href="mailto:tchoumiberol@gmail.com" class="flex items-center gap-2 hover:text-white transition-colors group">
                            <i data-lucide="mail" class="w-5 h-5 text-[#ABB2BF] group-hover:text-[#55B6C2] transition-colors" stroke-width="1.5"></i>
                            tchoumiberol@gmail.com
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <!-- All Media Section -->
        <section class="mb-32">
            <h2 class="text-3xl font-light tracking-tight text-white mb-8 flex items-center">
                <span class="text-[#55B6C2] mr-2">#</span>all-media
            </h2>

            <div class="flex items-center gap-6">
                <a href="#" class="flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-colors text-lg font-light group">
                    <i data-lucide="twitter" class="w-5 h-5 text-[#ABB2BF] group-hover:text-[#55B6C2] transition-colors" stroke-width="1.5"></i>
                    @Berol
                </a>
                <a href="#" class="flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-colors text-lg font-light group">
                    <i data-lucide="twitter" class="w-5 h-5 text-[#ABB2BF] group-hover:text-[#55B6C2] transition-colors" stroke-width="1.5"></i>
                    @Berol
                </a>
            </div>
        </section>

    </main>

   

    

</template>