<script>
import {
  Code,
  FileText,
  SquareArrowOutUpRight,
  User,
  X,
} from "lucide-vue-next";

export default {
  components: {
    X,
    FileText,
    User,
    Code,
    SquareArrowOutUpRight,
  },
  data() {
    return {
      selectedCard: null, // This starts as null
      cardData: [
        {
          image: "/portfolioImg.webp",
          projectName: "E-Business Project",
          project: "website",
          client: "a",
          language: "HTML,CSS,JS,VUE",
          previewLink: "https://jeevankami.com.np",
        },

        {
          image: "/portfolioImg.webp",
          projectName: "E-Business Project",
          project: "website",
          client: "a",
          language: "HTML,CSS,JS,VUE",
          previewLink: "https://jeevankami.com.np",
        },

        {
          image: "/portfolioImg.webp",
          projectName: "E-Business Project",
          project: "website",
          client: "a",
          language: "HTML,CSS,JS,VUE",
          previewLink: "https://jeevankami.com.np",
        },
        {
          image: "/portfolioImg.webp",
          projectName: "E-Business Project",
          project: "website",
          client: "a",
          language: "HTML,CSS,JS,VUE",
          previewLink: "https://jeevankami.com.np",
        },
        {
          image: "/portfolioImg.webp",
          projectName: "E-Business Project",
          project: "website",
          client: "a",
          language: "HTML,CSS,JS,VUE",
          previewLink: "https://jeevankami.com.np",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="pt-20 px-10 lg:pr-30 py-10">
    <div class="relative text-center flex justify-center items-center mb-10">
      <h1
        class="absolute text-5xl sm:text-7xl md:text-8xl text-neutral-300 opacity-50 -z-10 font-bold tracking-widest"
      >
        WORKS
      </h1>
      <h1 class="text-3xl md:text-4xl font-extrabold">
        <span class="text-neutral-600">MY </span>
        <span class="text-amber-400">PORTFOLIO</span>
      </h1>
    </div>

    <div class="flex gap-10 flex-wrap justify-center">
      <div
        v-for="(item, i) in cardData"
        :key="i"
        @click="selectedCard = item"
        class="group relative w-80 h-48 rounded-xl flex justify-center items-center overflow-hidden bg-gray-200 cursor-pointer border hover:border-amber-400 transition-all"
      >
        <img
          :src="item.image"
          class="w-full h-full object-cover transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"
        />
        <h1
          class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-bold text-gray-900"
        >
          {{ item.projectName }}
        </h1>
      </div>
    </div>
    <!--Card Details -->
    <div
      v-if="selectedCard"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
    >
      <div
        class="bg-white p-5 rounded-3xl max-w-lg w-full relative overflow-hidden shadow-2xl"
      >
        <button
          @click="selectedCard = null"
          class="absolute top-4 right-4 text-2xl font-bold hover:text-red-500 cursor-pointer"
        >
          <X />
        </button>

        <div class="p-8">
          <h1
            class="text-2xl font-bold text-amber-500 mb-4 text-center uppercase"
          >
            {{ selectedCard.projectName }}
          </h1>

          <div class="flex flex-col gap-4 text-sm mt-6">
            <div
              class="flex items-center justify-between border-b border-neutral-100 pb-2"
            >
              <span
                class="font-bold text-neutral-500 uppercase flex items-center gap-2 text-xs"
              >
                <FileText :size="16" class="text-amber-500" /> Project
              </span>
              <span class="text-neutral-800 font-medium text-right">
                {{ selectedCard.project }}
              </span>
            </div>

            <div
              class="flex items-center justify-between border-b border-neutral-100 pb-2"
            >
              <span
                class="font-bold text-neutral-500 uppercase flex items-center gap-2 text-xs"
              >
                <User :size="16" class="text-amber-500" /> Client
              </span>
              <span class="text-neutral-800 font-medium text-right">
                {{ selectedCard.client }}
              </span>
            </div>

            <div
              class="flex items-center justify-between border-b border-neutral-100 pb-2"
            >
              <span
                class="font-bold text-neutral-500 uppercase flex items-center gap-2 text-xs"
              >
                <Code :size="16" class="text-amber-500" /> Language
              </span>
              <span class="text-amber-600 font-semibold text-right">
                {{ selectedCard.language }}
              </span>
            </div>

            <div class="flex items-center justify-between pb-2">
              <span
                class="font-bold text-neutral-500 uppercase flex items-center gap-2 text-xs"
              >
                <SquareArrowOutUpRight :size="16" class="text-amber-500" />
                Preview
              </span>
              <a
                :href="selectedCard.previewLink"
                target="_blank"
                class="text-blue-500 hover:underline font-medium text-right truncate max-w-[150px] sm:max-w-none"
              >
                {{ selectedCard.previewLink }}
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <img :src="selectedCard.image" class="w-100 h-60 rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
