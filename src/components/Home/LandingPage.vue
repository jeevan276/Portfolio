<script>
import { ArrowRight } from "lucide-vue-next";

export default {
  components: {
    ArrowRight,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-white/90">
    <!-- Yellow diagonal background -->
    <div
      class="absolute top-0 -left-80 lg:w-[60%] lg:h-[250%] lg:bg-yellow-400 -rotate-12 origin-left"
    ></div>

    <div
      class="relative group flex flex-col items-center lg:mt-20 lg:ml-20 gap-10 lg:flex-row lg:justify-between lg:items-start md:pr-10"
    >
      <!-- Profile Image -->
      <div
        class="relative flex w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:absolute lg:w-96 lg:h-96 lg:mt-5 lg:rounded-2xl lg:shadow-2xl"
      >
        <img
          src="/profileJK1.png"
          alt="profile"
          class="w-full h-full object-cover rounded-full lg:rounded-2xl"
        />
      </div>

      <!-- Content -->
      <div
        class="flex justify-center flex-col text-center px-4 lg:ml-[420px] lg:mt-10"
      >
        <h1 class="font-bold text-3xl text-center lg:text-5xl leading-tight">
          <span class="text-amber-600 flex justify-center gap-3 items-center">
            <hr class="w-6 md:w-8 border-2" />
            I'M JEEVAN KAMI.
          </span>

          <span
            class="block bg-gradient-to-r from-gray-600 to-neutral-300 bg-clip-text text-transparent font-bold pl-14"
          >
            WEB DEVELOPER
          </span>
        </h1>

        <p
          class="text-neutral-600 text-justify leading-8 my-6 max-w-xl mx-auto lg:mx-0"
        >
          I’m a Nepal-based front-end developer dedicated to crafting clean,
          intuitive, and user-friendly web experiences. I’m passionate about
          building websites that not only look great but also make a positive
          impact on the lives of the people who use them.
        </p>

        <!-- Button -->
        <div class="flex justify-center lg:justify-start">
          <button
            class="relative group flex items-center gap-3 px-4 pr-14 py-2 border border-yellow-300 rounded-full cursor-pointer overflow-hidden"
            @click="$router.push('/about')"
          >
            <span
              class="group-hover:text-white font-bold text-neutral-600 z-10"
            >
              More About Me
            </span>

            <div
              class="absolute inset-y-0 right-0 w-12 bg-yellow-300 rounded-full group-hover:w-full transition-all duration-300 -z-0"
            ></div>

            <ArrowRight
              class="absolute right-0 size-10 bg-yellow-300 text-white rounded-full z-20"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
