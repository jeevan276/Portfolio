<script>
import {
  Briefcase,
  Home,
  MailOpen,
  MessageSquare,
  User,
} from "lucide-vue-next";

export default {
  components: {
    Home,
    User,
    Briefcase,
    MailOpen,
    MessageSquare,
  },
  data() {
    return {
      activePage: "home",
    };
  },
  methods: {
    showSection(section) {
      this.activePage = section;
    },
  },
};
</script>
<template>
  <!-- for desktop view -->
  <div
    class="hidden fixed right-10 top-1/2 transform -translate-y-1/2 lg:flex flex-col gap-5"
  >
    <nav class="flex flex-col gap-5">
      <div class="relative group inline-block">
        <!-- Icon -->
        <RouterLink
          to="/"
          @click.native="showSection('home')"
          class="size-12 bg-neutral-200 rounded-full text-neutral-600 flex items-center justify-center group-hover:bg-yellow-300 group-hover:text-white"
          :class="activePage === 'home' ? 'bg-yellow-300 text-white' : ''"
        >
          <Home />
        </RouterLink>

        <!-- Hover label -->
        <div
          class="absolute right-10 top-1/2 -translate-y-1/2 translate-x-10 px-7 pr-15 py-3 bg-yellow-300 text-white rounded-full opacity-0 pointer-events-none transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-100 group-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto hover:translate-x-10 -z-10"
        >
          Home
        </div>
      </div>

      <div class="relative group inline-block">
        <!-- Icon -->
        <RouterLink
          to="/about"
          @click.native="showSection('about')"
          class="size-12 bg-neutral-200 rounded-full text-neutral-600 flex items-center justify-center group-hover:bg-yellow-300 group-hover:text-white"
          :class="activePage === 'about' ? 'bg-yellow-300 text-white' : ''"
        >
          <User />
        </RouterLink>

        <!-- Hover label -->
        <div
          class="absolute right-10 top-1/2 -translate-y-1/2 translate-x-10 px-7 pr-15 py-3 bg-yellow-300 text-white rounded-full opacity-0 pointer-events-none transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-100 group-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto hover:translate-x-10 -z-10"
        >
          About
        </div>
      </div>

      <div class="relative group inline-block">
        <!-- Icon -->
        <RouterLink
          to="/works"
          @click.native="showSection('works')"
          class="size-12 bg-neutral-200 rounded-full text-neutral-600 flex items-center justify-center group-hover:bg-yellow-300 group-hover:text-white"
          :class="activePage === 'works' ? 'bg-yellow-300 text-white' : ''"
        >
          <Briefcase />
        </RouterLink>

        <!-- Hover label -->
        <div
          class="absolute right-10 top-1/2 -translate-y-1/2 translate-x-10 px-7 pr-15 py-3 bg-yellow-300 text-white rounded-full opacity-0 pointer-events-none transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-100 group-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto hover:translate-x-10 -z-10"
        >
          Portfolio
        </div>
      </div>

      <div class="relative group inline-block">
        <!-- Icon -->
        <RouterLink
          to="/contact"
          @click.native="showSection('contact')"
          class="size-12 bg-neutral-200 rounded-full text-neutral-600 flex items-center justify-center group-hover:bg-yellow-300 group-hover:text-white"
          :class="activePage === 'contact' ? 'bg-yellow-300 text-white' : ''"
        >
          <MailOpen />
        </RouterLink>

        <!-- Hover label -->
        <div
          class="absolute right-10 top-1/2 -translate-y-1/2 translate-x-10 px-7 pr-15 py-3 bg-yellow-300 text-white rounded-full opacity-0 pointer-events-none transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-100 group-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto hover:translate-x-10 -z-10"
        >
          Contact
        </div>
      </div>

      <div class="relative group inline-block">
        <!-- Icon -->
        <RouterLink
          to="/blogs"
          @click.native="showSection('blogs')"
          class="size-12 bg-neutral-200 rounded-full text-neutral-600 flex items-center justify-center group-hover:bg-yellow-300 group-hover:text-white"
          :class="activePage === 'blogs' ? 'bg-yellow-300 text-white' : ''"
        >
          <MessageSquare />
        </RouterLink>

        <!-- Hover label -->
        <div
          class="absolute right-10 top-1/2 -translate-y-1/2 translate-x-10 px-7 pr-15 py-3 bg-yellow-300 text-white rounded-full opacity-0 pointer-events-none transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-100 group-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto hover:translate-x-10 -z-10"
        >
          Blogs
        </div>
      </div>
    </nav>
  </div>

  <!--For Mobile View -->
  <div class="fixed bottom-0 left-0 w-full lg:hidden z-50">
    <nav class="flex justify-around bg-white px-6 py-3 w-full shadow-t-2xl">
      <RouterLink
        to="/"
        @click.native="showSection('home')"
        class="size-12 rounded-full flex items-center justify-center"
        :class="
          activePage === 'home'
            ? 'bg-yellow-300 text-white'
            : 'bg-neutral-200 text-neutral-600'
        "
      >
        <Home />
      </RouterLink>

      <RouterLink
        to="/about"
        @click.native="showSection('about')"
        class="size-12 rounded-full flex items-center justify-center"
        :class="
          activePage === 'about'
            ? 'bg-yellow-300 text-white'
            : 'bg-neutral-200 text-neutral-600'
        "
      >
        <User />
      </RouterLink>

      <RouterLink
        to="/works"
        @click.native="showSection('works')"
        class="size-12 rounded-full flex items-center justify-center"
        :class="
          activePage === 'works'
            ? 'bg-yellow-300 text-white'
            : 'bg-neutral-200 text-neutral-600'
        "
      >
        <Briefcase />
      </RouterLink>

      <RouterLink
        to="/contact"
        @click.native="showSection('contact')"
        class="size-12 rounded-full flex items-center justify-center"
        :class="
          activePage === 'contact'
            ? 'bg-yellow-300 text-white'
            : 'bg-neutral-200 text-neutral-600'
        "
      >
        <MailOpen />
      </RouterLink>

      <RouterLink
        to="/blogs"
        @click.native="showSection('blogs')"
        class="size-12 rounded-full flex items-center justify-center"
        :class="
          activePage === 'blogs'
            ? 'bg-yellow-300 text-white'
            : 'bg-neutral-200 text-neutral-600'
        "
      >
        <MessageSquare />
      </RouterLink>
    </nav>
  </div>
</template>
