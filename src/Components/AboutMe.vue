

<template>
     <!-- About Me Section -->
        <section id="about-me" class="mb-32 relative">
          <div class="flex items-center gap-4 mb-12">
            <h2
              class="text-3xl font-medium tracking-tight text-white flex items-center"
            >
              <span class="text-teal-400">#</span>about-me
            </h2>
            <div class="h-px bg-teal-400/40 flex-grow max-w-[350px]"></div>
          </div>

          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-1/2">
              <p class="text-slate-400 text-lg mb-6 leading-relaxed">
                Hello, i'm Berol!
              </p>
              <p class="text-slate-400 text-lg mb-6 leading-relaxed">
                A full-stack developer (web & mobile), UI/UX designer, and
                junior web pentester,trained at Getsmarter, based in Douala,
                Cameroon.
              </p>
              <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                I design, plan, and build modern, responsive, and secure
                applications, leveraging UML analysis to structure projects
                before implementation. Passionate about the latest technologies
                and security practices, I create user-friendly, functional, and
                secure digital experiences from scratch.
              </p>
              <button
                class="border border-teal-400 text-white px-6 py-2 hover:bg-teal-400/10 transition-colors text-lg font-normal flex items-center gap-3 w-fit"
              >
                Read more
                <i
                  data-lucide="arrow-right"
                  class="w-4 h-4"
                  stroke-width="1.5"
                ></i>
              </button>
            </div>

            <div
              class="w-full md:w-1/2 flex justify-center md:justify-end relative"
            >
              <div class="relative w-[300px] h-[400px]">
                <!-- Decor: Dots Left -->
                <div
                  class="absolute top-12 left-[-2rem] text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm z-20"
                >
                  .....<br />.....<br />.....<br />.....<br />.....
                </div>
                <!-- Decor: Dots Right -->
                <div
                  class="absolute bottom-24 right-[-2rem] text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm z-20"
                >
                  .....<br />.....<br />.....<br />.....<br />.....
                </div>

                <!-- Image Placeholder -->
                <div
                  class="w-full h-full border-b border-teal-400 overflow-hidden flex items-end justify-center relative z-10"
                >
                  <img
                    src="../assets/images/back.avif"
                    alt="About Me Background"
                    class="absolute inset-0 w-full h-full object-cover opacity-10"
                  />
                  <img
                    src="../assets/images/image8.png"
                    alt="Berol"
                    class="relative z-10 w-[90%] -top- h-[90%] object-fit object-top filter grayscale contrast-120"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Outline Decor Right Side -->
          <div
            class="absolute top-1/2 right-[-15vw] hidden xl:flex flex-col gap-2 opacity-50"
          >
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
          </div>
          <div
            class="absolute top-0 left-[-15vw] hidden xl:flex flex-col gap-2 opacity-50"
          >
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
            <div
              class="text-slate-600/50 leading-[0.6] tracking-[0.3em] text-sm"
            >
              .....
            </div>
          </div>
        </section>
</template>