<script>
export default {
  data() {
    return {
      Skills: [
        { image: "/images/html.png", language: "HTML", isHovered: false },
        { image: "/images/css.png", language: "CSS", isHovered: false },
        {
          image: "/images/javascript.png",
          language: "JavaScript",
          isHovered: false,
        },
        {
          image: "/images/tailwind.webp",
          language: "Tailwind",
          isHovered: false,
        },
        { image: "/favicon.ico", language: "Vue.js", isHovered: false },

        { image: "/images/vercel.webp", language: "Vercel", isHovered: false },
        {
          image: "/images/git.webp",
          language: "Git",
          isHovered: false,
        },
        { image: "/images/npm.webp", language: "NPM", isHovered: false },
        {
          image: "/images/github.webp",
          language: "Github",
          isHovered: false,
        },
      ],
    };
  },
  methods: {
    toggleHover(index, value) {
      this.Skills[index].isHovered = value;
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-10 items-center px-4 sm:px-8 lg:px-20 mt-10">
    <h1
      class="text-neutral-600 dark:text-neutral-300 text-2xl sm:text-3xl md:text-4xl font-extrabold"
    >
      TOOL & STACK
    </h1>

    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-14 gap-x-10 place-items-center"
    >
      <div
        v-for="(skill, i) in Skills"
        :key="i"
        class="relative flex justify-center"
      >
        <div
          class="absolute px-4 py-1 text-sm sm:text-base bg-neutral-400 dark:bg-amber-400 text-white dark:text-black rounded-lg transform transition-all duration-500 ease-in-out opacity-0"
          :class="{ 'translate-y-9 opacity-100 z-30': skill.isHovered }"
        >
          {{ skill.language }}
        </div>

        <div
          @mouseover="toggleHover(i, true)"
          @mouseleave="toggleHover(i, false)"
          class="p-2 sm:p-3 rounded-xl bg-neutral-300 dark:bg-neutral-800 transform transition-all duration-500 ease-in-out"
          :class="{ '-translate-y-8 shadow-xl': skill.isHovered }"
        >
          <img
            :src="skill.image"
            alt="tools"
            class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: make image size uniform */
.size-10 {
  width: 40px;
  height: 40px;
}
</style>
