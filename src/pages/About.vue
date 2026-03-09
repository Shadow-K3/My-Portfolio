<script setup lang="ts">
import FixedLeftSocials from '../Components/FixedLeftSocials.vue';

</script>

<template>
   



    <!-- Decorative Dot Grids (Left & Right) -->
    <div class="fixed left-2 top-1/2 transform -translate-y-1/2 text-[#ABB2BF]/30 font-mono leading-[0.5] tracking-[0.4em] hidden xl:block pointer-events-none text-lg">
        <div>.....</div><div>.....</div><div>.....</div><div>.....</div><div>.....</div>
    </div>
    <div class="fixed right-4 bottom-1/3 text-[#ABB2BF]/30 font-mono leading-[0.5] tracking-[0.4em] hidden xl:block pointer-events-none text-lg">
        <div>.....</div><div>.....</div><div>.....</div><div>.....</div><div>.....</div>
    </div>
    
    <div class="fixed right-4 top-40 w-16 h-24 border-l border-b border-t border-[#ABB2BF]/20 hidden xl:block pointer-events-none"></div>
    <div class="fixed left-0 bottom-1/2 w-8 h-16 border-r border-b border-t border-[#ABB2BF]/20 hidden xl:block pointer-events-none"></div>

    <!-- Main Container -->
    <div class="max-w-[1000px] mx-auto px-6 sm:pl-24 sm:pr-8 py-8 relative">
        
      

        <!-- Page Title -->
        <div class="mb-12 md:mb-16">
            <h1 class="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
                <span class="text-[#55B6C2]">/</span>about-me
            </h1>
            <p class="text-xl text-[#ABB2BF] font-light">Who am I?</p>
        </div>

        <!-- About Content -->
        <section class="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24 md:mb-32 items-center md:items-start">
            <!-- Text -->
            <div class="flex-1 text-[#ABB2BF] text-xl leading-relaxed flex flex-col gap-8 font-light mt-4">
                <p>Hello, i'm Berol!</p>
                <p>I am a full-stack developer (web and mobile, front-end and back-end), UI/UX designer, and junior web pentester, trained at Getsmarter, based in Douala, Cameroon. I also perform UML analysis to design and structure robust applications before implementation.</p>
                <p>I build modern, responsive, and secure applications from scratch, focusing on user-friendly and efficient experiences. Over the past year, I have applied my training and skills to help clients and personal projects establish a strong online presence. I am passionate about leveraging the latest technologies, frameworks, and security practices to create well-designed, functional, and secure solutions.</p>
            </div>
            
            <!-- Image Section -->
            <div class="flex-1 relative flex justify-center w-full max-w-md md:mt-0 mt-12">
                <!-- Dots Top Left -->
                <div class="absolute -top-6 left-0 md:left-4 text-[#ABB2BF]/50 font-mono leading-[0.5] tracking-[0.4em] z-0 text-xl pointer-events-none">
                    <div>.....</div><div>.....</div><div>.....</div><div>.....</div><div>.....</div>
                </div>
                <!-- Dots Right Bottom -->
                <div class="absolute top-2/3 -right-6 text-[#ABB2BF]/50 font-mono leading-[0.5] tracking-[0.4em] z-0 hidden md:block text-xl pointer-events-none">
                    <div>.....</div><div>.....</div><div>.....</div><div>.....</div>
                </div>
                
                <!-- Main Image Container -->
                <div class="relative z-10 w-[280px] h-[360px] md:w-[320px] md:h-[420px] border-b border-[#55B6C2] overflow-hidden">
                    <img src="../assets/images/image20h.png" alt="Berol" class="w-full h-full object-cover object-center  object-fit  filter grayscale contrast-110">
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="mb-24 md:mb-32">
            <h2 class="text-3xl font-light tracking-tight text-white mb-12 flex items-center">
                <span class="text-[#55B6C2] mr-2">#</span>skills
            </h2>

            <div class="flex flex-wrap items-start gap-4">
                <!-- Languages -->
                <div class="border border-[#ABB2BF]/30 min-w-[150px]">
                    <h3 class="p-3 border-b border-[#ABB2BF]/30 text-white font-medium text-lg">Languages</h3>
                    <div class="p-3 text-[#ABB2BF] text-lg leading-relaxed font-light">
                        TypeScript<br>JavaScript
                    </div>
                </div>
                
                <!-- Other -->
                <div class="border border-[#ABB2BF]/30 min-w-[150px]">
                    <h3 class="p-3 border-b border-[#ABB2BF]/30 text-white font-medium text-lg">Other</h3>
                    <div class="p-3 text-[#ABB2BF] text-lg leading-relaxed font-light">
                        HTML EJS SCSS<br>Tailwindcss
                    </div>
                </div>
                
                <!-- Tools -->
                <div class="border border-[#ABB2BF]/30 min-w-[180px]">
                    <h3 class="p-3 border-b border-[#ABB2BF]/30 text-white font-medium text-lg">Tools</h3>
                    <div class="p-3 text-[#ABB2BF] text-lg leading-relaxed font-light">
                        VSCode Linux<br>XFCE Arch<br>Git Font Awesome<br>KDE fish
                    </div>
                </div>
                
                <!-- Databases -->
                <div class="border border-[#ABB2BF]/30 min-w-[150px]">
                    <h3 class="p-3 border-b border-[#ABB2BF]/30 text-white font-medium text-lg">Databases</h3>
                    <div class="p-3 text-[#ABB2BF] text-lg leading-relaxed font-light">
                        MySQL
                    </div>
                </div>
                
                <!-- Frameworks -->
                <div class="border border-[#ABB2BF]/30 min-w-[180px]">
                    <h3 class="p-3 border-b border-[#ABB2BF]/30 text-white font-medium text-lg">Frameworks</h3>
                    <div class="p-3 text-[#ABB2BF] text-lg leading-relaxed font-light">
                        React.js<br>Discord.js<br>Flask Express.js
                    </div>
                </div>
            </div>
        </section>

        <!-- Fun Facts Section -->
        <section class="mb-32">
            <h2 class="text-3xl font-light tracking-tight text-white mb-12 flex items-center">
                <span class="text-[#55B6C2] mr-2">#</span>my-fun-facts
            </h2>

            <div class="flex flex-col md:flex-row gap-12 justify-between items-start">
                <div class="flex flex-wrap gap-4 max-w-2xl">
                    <div class="border border-[#ABB2BF]/30 px-3 py-2 text-[#ABB2BF] text-lg font-light">I like winter more than summer</div>
                    <div class="border border-[#ABB2BF]/30 px-3 py-2 text-[#ABB2BF] text-lg font-light">I often bike with my friends</div>
                    <div class="border border-[#ABB2BF]/30 px-3 py-2 text-[#ABB2BF] text-lg font-light">I like <span class="text-[#55B6C2]">pizza</span> and <span class="text-[#55B6C2]">pasta</span></div>
                    <div class="border border-[#ABB2BF]/30 px-3 py-2 text-[#ABB2BF] text-lg font-light">I love my country</div>
                    <div class="border border-[#ABB2BF]/30 px-3 py-2 text-[#ABB2BF] text-lg font-light">I am a student at getmarter</div>
                    <div class="border border-[#ABB2BF]/30 px-3 py-2 text-[#ABB2BF] text-lg font-light">I am still in school</div>
                    <div class="border border-[#ABB2BF]/30 px-3 py-2 text-[#ABB2BF] text-lg font-light">I don't have any siblings</div>
                </div>
                
                <!-- Decorative Elements -->
                <div class="hidden md:flex flex-col items-end gap-6 relative w-48 pt-4">
                    <!-- Dots -->
                    <div class="text-[#ABB2BF]/50 font-mono leading-[0.5] tracking-[0.4em] text-xl absolute top-4 left-4">
                        <div>...</div><div>...</div><div>...</div><div>...</div>
                    </div>
                    <!-- Intersecting Squares -->
                    <div class="relative w-24 h-24 mt-16 mr-8">
                        <div class="absolute top-0 left-0 w-14 h-14 border border-[#ABB2BF]/50"></div>
                        <div class="absolute bottom-0 right-0 w-14 h-14 border border-[#55B6C2]"></div>
                    </div>
                </div>
            </div>
        </section>

    </div>

   

  

</template>
