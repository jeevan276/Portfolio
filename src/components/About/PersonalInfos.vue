<script>
import { Download } from "lucide-vue-next";

export default {
  components: {
    Download,
  },
  data() {
    return {
      cardDetails: [
        { count: 6, text: "months of experience" },
        { count: 2, text: "completed projects" },
        { count: 2, text: "happy customers" },
        { count: 0, text: "awards won" },
      ],
    };
  },
};
</script>

<template>
  <div class="p-10 md:p-20 flex flex-col justify-center gap-10 lg:gap-16">
    <!-- Heading -->
    <div class="relative text-center flex justify-center items-center">
      <h1
        class="absolute text-7xl md:text-8xl text-neutral-300 opacity-50 -z-10 font-bold"
      >
        RESUME
      </h1>
      <h1 class="text-3xl md:text-4xl font-extrabold">
        <span class="text-neutral-600">ABOUT </span>
        <span class="text-amber-400">ME</span>
      </h1>
    </div>

    <!-- Personal Info + Cards -->
    <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-30">
      <!-- Personal Info -->
      <div class="flex-1 justify-center">
        <h2 class="uppercase text-neutral-600 font-bold text-xl mb-5">
          Personal Infos
        </h2>
        <div
          class="flex flex-wrap lg:flex-nowrap gap-5 md:gap-15 text-gray-700"
        >
          <!-- Column 1 -->
          <div class="flex flex-col gap-5">
            <div class="flex gap-2">
              <span>First Name:</span><span class="font-semibold">Jeevan</span>
            </div>
            <div class="flex gap-2">
              <span>Last Name:</span><span class="font-semibold">Kami</span>
            </div>
            <div class="flex gap-2">
              <span>Age:</span><span class="font-semibold">19 Years</span>
            </div>
            <div class="flex gap-2">
              <span>Nationality:</span
              ><span class="font-semibold">Nepalese</span>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="flex flex-col gap-5">
            <div class="flex gap-2">
              <span>Freelance:</span
              ><span class="font-semibold">Available</span>
            </div>
            <div class="flex gap-2">
              <span>Address:</span
              ><span class="font-semibold">Sunwal, Nepal</span>
            </div>
            <div class="flex gap-2">
              <span>Email:</span
              ><span class="font-semibold">digitaljeevan6@gmail.com</span>
            </div>
            <div class="flex gap-2">
              <span>Languages:</span
              ><span class="font-semibold">Nepali, English, Hindi</span>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button
            class="relative group flex items-center gap-3 px-4 pr-14 py-2 border border-yellow-300 rounded-full cursor-pointer overflow-hidden"
            @click="$router.push('/')"
          >
            <span
              class="group-hover:text-white font-bold text-neutral-600 z-10"
            >
              DOWNLOAD CV
            </span>

            <div
              class="absolute inset-y-0 right-0 w-12 bg-amber-400 rounded-full group-hover:w-full transition-all duration-300 -z-0"
            ></div>

            <Download
              class="absolute right-2 size-7 bg-amber-400 text-white rounded-full z-20"
            />
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div class="flex flex-wrap justify-center gap-5">
        <div
          v-for="(card, index) in cardDetails"
          :key="index"
          class="flex flex-col justify-center items-center w-50 h-30 p-5 border border-neutral-300 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h1 class="text-5xl font-bold text-amber-400">
            {{ card.count }} <sup>+</sup>
          </h1>
          <hr class="w-10 border-neutral-300 my-2" />
          <h2 class="uppercase text-center font-semibold text-gray-700">
            {{ card.text }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
