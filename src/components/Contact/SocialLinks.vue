<script>
import { Youtube, Github, Linkedin, Instagram } from "lucide-vue-next";

export default {
  components: {
    Youtube,
    Github,
    Linkedin,
    Instagram,
  },
  data() {
    return {
      socials: [
        {
          name: "YouTube",
          url: "https://www.youtube.com/@276jeevan",
          icon: "Youtube",
        },
        {
          name: "GitHub",
          url: "https://github.com/jeevan276",
          icon: "Github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jeevan276",
          icon: "Linkedin",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/jeevankami.02",
          icon: "Instagram",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="text-center space-y-6">
    <h1
      class="text-neutral-600 dark:text-neutral-300 text-2xl sm:text-3xl md:text-4xl font-extrabold"
    >
      SOCIAL LINKS
    </h1>

    <div class="flex justify-center gap-6">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group text-neutral-600 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
        :aria-label="social.name"
      >
        <component
          :is="social.icon"
          class="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform"
        />
      </a>
    </div>
  </div>
</template>
