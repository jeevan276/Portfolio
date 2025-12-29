<script>
import {
  Briefcase,
  Home,
  MailOpen,
  MessageSquare,
  User,
  Sun,
  Moon,
} from "lucide-vue-next";

export default {
  components: {
    Home,
    User,
    Briefcase,
    MailOpen,
    MessageSquare,
    Sun,
    Moon,
  },
  data() {
    return {
      activePage: "home",
      isDarkMode: false,
    };
  },
  mounted() {
    // Check localStorage OR system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      this.isDarkMode = true;
      document.documentElement.classList.add("dark");
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove("dark");
    }

    // Set active page based on current route on refresh
    const path = this.$route.path.replace("/", "") || "home";
    this.activePage = path;
  },
  methods: {
    showSection(section) {
      this.activePage = section;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        // Instead of classList, we set the dataset attribute
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>

<template>
  <div
    class="hidden fixed right-10 top-1/2 transform -translate-y-1/2 lg:flex flex-col gap-5 z-50"
  >
    <button
      @click="toggleTheme"
      class="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-yellow-400 shadow-md flex items-center justify-center transition-all duration-500 hover:rotate-90 active:scale-90"
    >
      <Moon v-if="!isDarkMode" size="20" />
      <Sun v-else size="20" />
    </button>

    <nav class="flex flex-col gap-5">
      <div
        v-for="link in [
          { id: 'home', path: '/', icon: 'Home', label: 'Home' },
          { id: 'about', path: '/about', icon: 'User', label: 'About' },
          {
            id: 'works',
            path: '/works',
            icon: 'Briefcase',
            label: 'Portfolio',
          },
          {
            id: 'contact',
            path: '/contact',
            icon: 'MailOpen',
            label: 'Contact',
          },
          {
            id: 'blogs',
            path: '/blogs',
            icon: 'MessageSquare',
            label: 'Blogs',
          },
        ]"
        :key="link.id"
        class="relative group inline-block"
      >
        <RouterLink
          :to="link.path"
          @click="showSection(link.id)"
          class="size-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-white"
          :class="
            activePage === link.id
              ? 'bg-yellow-400 text-white'
              : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
          "
        >
          <component :is="link.icon" size="20" />
        </RouterLink>

        <div
          class="absolute right-14 top-1/2 -translate-y-1/2 px-4 py-2 bg-yellow-400 text-white text-sm font-medium rounded-lg opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
        >
          {{ link.label }}
        </div>
      </div>
    </nav>
  </div>

  <div class="fixed bottom-0 left-0 w-full lg:hidden z-50">
    <div class="relative flex justify-end pr-6">
      <button
        @click="toggleTheme"
        class="absolute -top-15 p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-yellow-400 shadow-lg transition-all active:scale-90"
      >
        <Moon v-if="!isDarkMode" size="20" />
        <Sun v-else size="20" />
      </button>
    </div>

    <nav
      class="flex justify-around bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 w-full transition-colors duration-300"
    >
      <RouterLink
        v-for="link in [
          { id: 'home', path: '/', icon: 'Home' },
          { id: 'about', path: '/about', icon: 'User' },
          { id: 'works', path: '/works', icon: 'Briefcase' },
          { id: 'contact', path: '/contact', icon: 'MailOpen' },
          { id: 'blogs', path: '/blogs', icon: 'MessageSquare' },
        ]"
        :key="link.id"
        :to="link.path"
        @click="showSection(link.id)"
        class="size-11 rounded-full flex items-center justify-center transition-all duration-300"
        :class="
          activePage === link.id
            ? 'bg-yellow-400 text-white'
            : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
        "
      >
        <component :is="link.icon" size="20" />
      </RouterLink>
    </nav>
  </div>
</template>
