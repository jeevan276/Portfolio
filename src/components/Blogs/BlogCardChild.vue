<script>
export default {
  emits: ["open"],
  props: {
    post: Object,
  },
};
</script>

<template>
  <div
    @click="$emit('open', post)"
    class="group w-full max-w-xs mx-auto flex flex-col rounded-lg overflow-hidden bg-gray-200 cursor-pointer border border-neutral-400 hover:border-amber-400 transition-all shadow-sm hover:shadow-lg h-full"
  >
    <div class="relative overflow-hidden aspect-video w-full shrink-0">
      <img
        :src="post.img"
        alt="blogImg"
        class="h-full w-full object-cover group-hover:scale-110 group-hover:opacity-75 transition-all duration-500"
      />
    </div>

    <div
      class="p-3 md:p-4 border-t-4 border-amber-400 bg-neutral-100 flex-grow flex flex-col gap-1"
    >
      <h1
        class="uppercase text-neutral-600 font-bold text-xs md:text-sm line-clamp-1"
      >
        {{ post.title }}
      </h1>
      <p
        class="text-neutral-500 text-[10px] md:text-xs text-justify leading-snug line-clamp-2"
      >
        {{ post.contents.firstParagraph }}
      </p>
    </div>
  </div>
</template>
