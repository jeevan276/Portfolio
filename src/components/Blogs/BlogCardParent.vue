<script>
import BlogCardChild from "./BlogCardChild.vue";
import PostDetails from "./PostDetails.vue";

export default {
  components: {
    BlogCardChild,
    PostDetails,
  },
  data() {
    return {
      CardDetails: [
        {
          img: "/portfolioImg.webp",
          title: "How to Own Your Audience by Creating an Email List",
          author: "Rio",
          date: "21 April 2022",
          tags: "wordpress, business, economy, design",
          contents: {
            firstParagraph:
              "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub...",
            secondParagraph:
              "Most photographers find it hard to see interesting pictures...",
            thirdParagraph: "Excepteur sint occaecat cupidatat non proident...",
            fourthParagraph:
              "Riosum dolor sit amet, consectetur adipiscing elit...",
          },
        },
        {
          img: "/portfolioImg.webp",
          title: "Build Brand Loyalty Through Content",
          author: "Alex",
          date: "12 May 2022",
          tags: "marketing, branding, content",
          contents: {
            firstParagraph:
              "Brand loyalty is built through consistent storytelling...",
            secondParagraph: "Good content creates emotional connections...",
            thirdParagraph: "Customers trust brands that educate...",
            fourthParagraph: "Consistency is more important than virality...",
          },
        },
      ],
      selectedPost: null,
      isModalOpen: false,
    };
  },

  methods: {
    openPost(post) {
      this.selectedPost = post;
      this.isModalOpen = true;
    },
  },
};
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <BlogCardChild
      v-for="(post, i) in CardDetails"
      :key="i"
      :post="post"
      @open="openPost"
    />
  </div>

  <PostDetails
    :isVisible="isModalOpen"
    :post="selectedPost"
    @close="isModalOpen = false"
  />
</template>
