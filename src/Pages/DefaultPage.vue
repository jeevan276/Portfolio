<script>
import NavBar from "@/components/Navigation-Bar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<template>
  <div class="pb-25 lg:pb-10">
    <RouterView />
  </div>
  <NavBar />
</template>
<div class="min-h-screen"></div>
