<script>
import BlogCardParent from "./BlogCardParent.vue";

export default {
  components: {
    BlogCardParent,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div
    class="pt-20 px-10 lg:pr-30 py-10 min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-500"
  >
    <div class="relative text-center flex justify-center items-center">
      <h1
        class="absolute text-5xl sm:text-7xl md:text-8xl text-neutral-300 dark:text-neutral-800 opacity-40 -z-0 font-bold tracking-widest"
      >
        POSTS
      </h1>
      <h1 class="text-3xl md:text-4xl font-extrabold z-10">
        <span class="text-neutral-600 dark:text-neutral-300">MY </span>
        <span class="text-amber-400">BLOGS</span>
      </h1>
    </div>
    <div
      class="flex flex-wrap justify-center gap-6 px-4 sm:px-10 lg:px-20 py-10"
    >
      <BlogCardParent />
    </div>
  </div>
</template>
