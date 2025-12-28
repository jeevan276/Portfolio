<script>
export default {
  data() {
    return {
      cardDetails: [
        { count: 6, text: "months of experience" },
        { count: 2, text: "completed projects" },
        { count: 2, text: "happy customers" },
        { count: 0, text: "awards won" },
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
      <h1 class="text-5xl font-bold text-amber-400">
        {{ card.count }}<sup>+</sup>
      </h1>
      <hr class="w-10 border-neutral-300 dark:border-neutral-700 my-2" />
      <h2
        class="uppercase text-center font-semibold text-gray-700 dark:text-neutral-400"
      >
        {{ card.text }}
      </h2>
    </div>
  </div>
</template>
