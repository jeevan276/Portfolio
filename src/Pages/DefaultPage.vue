<script>
import NavBar from "@/components/Navigation-Bar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <div :class="{ 'pb-20': $route.path !== '/' }" class="lg:pb-0">
    <RouterView />
  </div>

  <NavBar />
</template>
