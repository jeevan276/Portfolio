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
          img: "/images/time.webp",
          title: "Mastering Time Management for Productivity",
          author: "Digital Jeevan",
          date: "28 Dec 2025",
          tags: "productivity, time management, self improvement",
          contents: {
            firstParagraph:
              "Time management is all about making the most of your day. It’s not just about planning every minute, but about knowing what is important and focusing on that first. When you learn to organize your tasks well, you reduce stress and feel more in control of your life. Simple habits like setting priorities, making a list of what to do, and keeping track of your progress can make a big difference in your productivity.",
            secondParagraph:
              "There are many tools that can help you manage time effectively. You can use calendars, planners, or even simple notebooks to plan your day. Digital tools like Google Calendar or task apps make it easy to schedule work, set reminders, and track deadlines. By following a clear plan, you can spend less time worrying about what to do next and more time actually getting things done.",
            thirdParagraph:
              "Breaking big tasks into smaller steps is another great way to manage your time. When tasks seem too large, it is easy to feel overwhelmed and procrastinate. But by dividing them into smaller, manageable parts, you can tackle them one by one. This approach makes even complex projects feel achievable and helps you stay motivated as you complete each step.",
            fourthParagraph:
              "The key to improving your productivity is consistency. Try to review your tasks at the end of each day or week. Reflect on what you did well and what can be improved. By doing this regularly, you will learn better ways to organize your time and develop habits that make you more efficient. Over time, these small improvements will add up and help you achieve your goals more effectively.",
          },
        },
        {
          img: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=800&q=80",
          title: "How to Stay Motivated While Learning New Skills",
          author: "Digital Jeevan",
          date: "28 Dec 2025",
          tags: "learning, motivation, personal growth",
          contents: {
            firstParagraph:
              "Learning new skills can sometimes feel overwhelming, especially when progress is slow. It’s normal to feel discouraged, but the key is to stay motivated. One way to do this is to set small, achievable goals. Celebrate each milestone, no matter how small, because it reminds you that your efforts are making a difference.",
            secondParagraph:
              "Another important strategy is to maintain a consistent schedule. Dedicating even a small amount of time every day to learning will help you develop a habit. Over time, these small daily sessions add up and you will notice significant progress.",
            thirdParagraph:
              "It also helps to find inspiration from others. Join communities, read success stories, or connect with mentors who can guide you. Surrounding yourself with people who share your goals can keep you motivated and make the learning journey more enjoyable.",
            fourthParagraph:
              "Finally, be patient with yourself. Learning is a process, and setbacks are part of growth. Focus on progress, not perfection, and remember that persistence is more important than speed. Every step forward counts and brings you closer to mastery.",
          },
        },
        {
          img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",

          title: "Simple Tips to Improve Daily Productivity",
          author: "Digital Jeevan",
          date: "28 Dec 2025",
          tags: "productivity, habits, efficiency",
          contents: {
            firstParagraph:
              "Being productive doesn’t mean working non-stop. It’s about working smart and managing your time well. Start your day by listing your most important tasks and focus on completing them first. This helps you use your energy on what matters most.",
            secondParagraph:
              "Another tip is to remove distractions. Put your phone on silent, close unnecessary tabs, and create a workspace where you can focus. Even small distractions can waste a lot of time if they happen repeatedly.",
            thirdParagraph:
              "Break your work into smaller tasks to avoid feeling overwhelmed. Completing each small task gives a sense of achievement and motivates you to continue. It also helps you stay organized and track your progress effectively.",
            fourthParagraph:
              "Finally, take breaks and rest when needed. Short breaks between tasks refresh your mind and improve concentration. Remember, productivity is not about doing more, but about doing things effectively and maintaining balance.",
          },
        },
        {
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",

          title: "Why Networking is Important for Career Growth",
          author: "Digital Jeevan",
          date: "28 Dec 2025",
          tags: "networking, career, growth",
          contents: {
            firstParagraph:
              "Networking is one of the most powerful tools for career growth. Building connections with professionals in your field can open doors to opportunities that are not advertised publicly. It also allows you to learn from others’ experiences and gain valuable advice.",
            secondParagraph:
              "Attending events, joining online communities, and reaching out to mentors are effective ways to grow your network. Even small interactions, like asking a question or sharing insights, can leave a lasting impression.",
            thirdParagraph:
              "Networking is not just about receiving, it’s also about giving. Help others, share knowledge, and support your peers. This builds trust and strengthens relationships, which can benefit both parties in the long run.",
            fourthParagraph:
              "Consistency is key. Networking should be a regular activity, not something you do only when looking for a job. Over time, a strong network becomes a reliable support system for career growth and personal development.",
          },
        },

        {
          img: "/images/nepalipool.png",
          title: "NepaliPool – Connecting Students and Mentors",
          author: "Digital Jeevan",
          date: "28 Dec 2025",
          tags: "education, mentorship, web development, Vue.js",
          contents: {
            firstParagraph:
              "NepaliPool is an online mentorship platform designed to connect students with other students and experienced mentors. It helps learners find guidance, share knowledge, and collaborate on projects. The platform makes learning more interactive and supportive, giving students access to a community where they can ask questions and get answers quickly.",
            secondParagraph:
              "The website is built using HTML, CSS, JavaScript, Vue.js, and Next.js which allows for dynamic content and a smooth user experience. Students can create profiles, search for mentors or peer learners, and track their learning progress. The platform focuses on simplicity and usability so that users of all ages can navigate it easily.",
            thirdParagraph:
              "One of the main features of NepaliPool is connecting students to mentors based on their interests and goals. Mentors can share advice, resources, and personalized guidance, while students can also collaborate with peers for group learning. This dual connection encourages a supportive learning environment and fosters skill development.",
            fourthParagraph:
              "By combining modern web technologies with a user-friendly design, NepaliPool successfully bridges the gap between learners and mentors. It shows how a thoughtfully designed platform can make education more accessible, interactive, and effective for students across Nepal.",
          },
        },
        {
          img: "/images/haatMaKanun.png",
          title: "Haat Ma Kanun – Making Legal Help Accessible",
          author: "Digital Jeevan",
          date: "28 Dec 2025",
          tags: "legal, hackathon, web development, Vue.js",
          contents: {
            firstParagraph:
              "Haat Ma Kanun is a web platform created during a hackathon to provide easy access to legal information and assistance. The idea behind the project is to help users understand their rights and find legal resources quickly, without having to navigate complex processes. It makes legal help more approachable and user-friendly.",
            secondParagraph:
              "The website is built using HTML, CSS, JavaScript, and Vue.js. Its clean and responsive design ensures that users can access information from any device. The platform includes features like searchable legal topics, guidelines for common legal issues, and easy navigation to find relevant content.",
            thirdParagraph:
              "Haat Ma Kanun emphasizes simplicity and clarity. Legal jargon can be confusing for many users, so the platform presents information in a straightforward manner. Users can quickly learn about their rights, understand legal procedures, and find helpful resources without stress or confusion.",
            fourthParagraph:
              "This project demonstrates how technology can be used to make important services like legal assistance more accessible. By using modern web tools and focusing on user experience, Haat Ma Kanun provides a practical solution to a common problem and highlights the impact of web development in solving real-world issues.",
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
