<script>
import { Gauge, Layout, Puzzle, Hammer, Component } from "lucide-vue-next";

export default {
  components: {
    Layout,
    Gauge,
    Puzzle,
    Hammer,
  },
  data() {
    return {
      cardDetails: [
        { text: "Architect", icon: "Layout" },
        { text: "Optimizer", icon: "Gauge" },
        { text: "Problem-Solver", icon: "Puzzle" },
        { text: "Builder", icon: "Hammer" },
      ],
    };
  },
};
</script>

<template>
  <div class="flex flex-wrap justify-center gap-5">
    <div
      v-for="(card, index) in cardDetails"
      :key="index"
      class="flex flex-col justify-center items-center w-50 h-30 p-5 border border-neutral-300 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <Component :is="card.icon" class="w-8 h-8 text-yellow-400" />
      <hr class="w-10 border-neutral-300 dark:border-neutral-700 my-2" />
      <h2
        class="uppercase text-center font-semibold text-gray-700 dark:text-neutral-400"
      >
        {{ card.text }}
      </h2>
    </div>
  </div>
</template>
