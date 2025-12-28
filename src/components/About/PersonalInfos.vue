<script>
import { Download } from "lucide-vue-next";

import PersonalInfosCard from "./PersonalInfosCard.vue";

export default {
  components: {
    Download,
    PersonalInfosCard,
  },

  methods: {
    downloadCV() {
      window.open("/JeevanKamiResume.pdf", "_blank");
    },
  },
};
</script>

<template>
  <div class="flex flex-col justify-center gap-10 lg:gap-16">
    <div class="relative text-center flex justify-center items-center">
      <h1
        class="absolute text-7xl md:text-8xl text-neutral-300 dark:text-neutral-800 opacity-40 -z- 0 font-bold"
      >
        RESUME
      </h1>
      <h1 class="text-3xl md:text-4xl font-extrabold z-10">
        <span class="text-neutral-600 dark:text-neutral-300">ABOUT </span>
        <span class="text-amber-400">ME</span>
      </h1>
    </div>

    <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-30">
      <div class="flex-1 justify-center">
        <h2
          class="uppercase text-neutral-600 dark:text-neutral-400 font-bold text-xl mb-5"
        >
          Personal Infos
        </h2>
        <div
          class="flex flex-wrap lg:flex-nowrap gap-5 md:gap-15 text-gray-700 dark:text-neutral-300"
        >
          <div class="flex flex-col gap-5">
            <div class="flex gap-2">
              <span>First Name:</span
              ><span class="font-semibold text-black dark:text-white"
                >Jeevan</span
              >
            </div>
            <div class="flex gap-2">
              <span>Last Name:</span
              ><span class="font-semibold text-black dark:text-white"
                >Kami</span
              >
            </div>
            <div class="flex gap-2">
              <span>Age:</span
              ><span class="font-semibold text-black dark:text-white"
                >19 Years</span
              >
            </div>
            <div class="flex gap-2">
              <span>Nationality:</span
              ><span class="font-semibold text-black dark:text-white"
                >Nepalese</span
              >
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex gap-2">
              <span>Freelance:</span
              ><span class="font-semibold text-black dark:text-white"
                >Available</span
              >
            </div>
            <div class="flex gap-2">
              <span>Address:</span
              ><span class="font-semibold text-black dark:text-white"
                >Sunwal, Nepal</span
              >
            </div>
            <div class="flex gap-2">
              <span>Email:</span
              ><span
                class="font-semibold text-black dark:text-white text-sm sm:text-base"
                >digitaljeevan6@gmail.com</span
              >
            </div>
            <div class="flex gap-2">
              <span>Languages:</span
              ><span class="font-semibold text-black dark:text-white"
                >Nepali, English, Hindi</span
              >
            </div>
          </div>
        </div>

        <div class="mt-10">
          <button
            @click="downloadCV()"
            class="relative group flex items-center gap-3 px-4 pr-14 py-2 border border-yellow-300 rounded-full cursor-pointer overflow-hidden"
          >
            <span
              class="group-hover:text-white font-bold text-neutral-600 dark:text-neutral-300 z-10"
              >DOWNLOAD CV</span
            >
            <div
              class="absolute inset-y-0 right-0 w-12 bg-amber-400 rounded-full group-hover:w-full transition-all duration-300 -z-0"
            ></div>
            <Download
              class="absolute right-2 size-7 bg-amber-400 text-white rounded-full z-20"
            />
          </button>
        </div>
      </div>

      <PersonalInfosCard />
    </div>
  </div>
</template>
