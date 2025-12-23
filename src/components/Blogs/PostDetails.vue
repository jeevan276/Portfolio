<script>
import { CalendarDays, QuoteIcon, Tags, User, XCircle } from "lucide-vue-next";

export default {
  props: {
    isVisible: Boolean,
    post: Object,
  },
  emits: ["close"],
  components: {
    User,
    CalendarDays,
    Tags,
    QuoteIcon,
    XCircle,
  },
};
</script>

<template>
  <div
    v-if="isVisible && post"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4 md:p-10"
    @click.self="$emit('close')"
  >
    <div
      class="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl relative p-6 md:p-12 shadow-2xl"
    >
      <button
        @click="$emit('close')"
        class="absolute top-5 right-5 text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer"
      >
        <XCircle :size="32" />
      </button>

      <!-- TITLE HEADER -->
      <div class="relative text-center flex justify-center items-center mb-12">
        <h1
          class="absolute text-5xl sm:text-7xl md:text-9xl text-neutral-200 opacity-40 -z-10 font-bold tracking-widest uppercase"
        >
          POSTS
        </h1>
        <h1 class="text-3xl md:text-5xl font-extrabold">
          <span class="text-neutral-600">POST </span>
          <span class="text-amber-400">DETAILS</span>
        </h1>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- META -->
        <div class="flex flex-wrap gap-6 border-y border-neutral-100 py-6 mb-8">
          <div class="flex items-center gap-2 text-neutral-500 text-sm">
            <User :size="18" class="text-amber-500" />
            <span>{{ post.author }}</span>
          </div>

          <div class="flex items-center gap-2 text-neutral-500 text-sm">
            <CalendarDays :size="18" class="text-amber-500" />
            <span>{{ post.date }}</span>
          </div>

          <div class="flex items-center gap-2 text-neutral-500 text-sm">
            <Tags :size="18" class="text-amber-500" />
            <span>{{ post.tags }}</span>
          </div>
        </div>

        <!-- TITLE -->
        <h2
          class="text-3xl md:text-4xl font-bold mb-8 text-neutral-800 leading-tight"
        >
          {{ post.title }}
        </h2>

        <!-- IMAGE -->
        <img
          :src="post.img"
          class="w-full h-64 md:h-96 object-cover rounded-2xl mb-10"
          alt="Post Image"
        />

        <!-- CONTENT -->
        <div
          class="flex flex-col gap-6 text-lg leading-relaxed text-neutral-700"
        >
          <p class="text-justify">
            {{ post.contents.firstParagraph }}
          </p>

          <div
            class="flex gap-4 bg-neutral-50 p-6 rounded-xl border-l-4 border-amber-400 my-4"
          >
            <QuoteIcon class="text-amber-400 shrink-0" :size="40" />
            <p class="italic text-neutral-600">
              {{ post.contents.secondParagraph }}
            </p>
          </div>

          <p class="text-justify">
            {{ post.contents.thirdParagraph }}
          </p>

          <p class="text-justify">
            {{ post.contents.fourthParagraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
