<script>
import NavBar from "@/components/Navigation-Bar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<template>
  <RouterView />
  <NavBar />
</template>
