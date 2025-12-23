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
  <div
    class="relative min-h-screen flex justify-center items-center overflow-hidden bg-white/90 lg:pb-20"
  >
    <!-- Yellow diagonal background -->
    <div
      class="absolute top-0 -left-60 sm:-left-80 w-[120%] h-[40%] sm:w-[100%] sm:h-[60%] lg:w-[60%] lg:h-[300%] lg:bg-yellow-400 -rotate-12 origin-left"
    ></div>

    <div
      class="relative flex flex-col items-center px-4 sm:px-8 gap-10 lg:flex-row lg:items-start lg:mt-20 lg:ml-20"
    >
      <!-- Profile Image -->
      <div
        class="relative flex w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:absolute lg:w-96 lg:h-96 mt-10 lg:mt-5 rounded-full lg:rounded-2xl shadow-xl lg:shadow-2xl"
      >
        <img
          src="/profileJK1.png"
          alt="profile"
          class="w-full h-full object-cover rounded-full lg:rounded-2xl"
        />
      </div>

      <!-- Content -->
      <div
        class="flex flex-col text-center max-w-xl lg:text-left lg:ml-[420px] lg:mt-10"
      >
        <h1 class="font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight">
          <span
            class="text-amber-600 flex justify-center lg:justify-start gap-3 items-center"
          >
            <hr class="w-6 md:w-8 border-2" />
            I'M JEEVAN KAMI.
          </span>

          <span
            class="block bg-gradient-to-r from-gray-600 to-neutral-300 bg-clip-text text-transparent font-bold mt-2 lg:pl-14"
          >
            WEB DEVELOPER
          </span>
        </h1>

        <p class="text-neutral-600 leading-7 sm:leading-8 text-justify my-6">
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
              class="absolute inset-y-0 right-0 w-12 bg-yellow-300 rounded-full group-hover:w-full transition-all duration-300"
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
