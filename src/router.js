import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "./Pages/NotFoundPage.vue";
import DefaultPage from "./Pages/DefaultPage.vue";
import AboutPage from "./components/About/AboutPage.vue";
import BlogPage from "./components/Blogs/BlogPage.vue";
import ContactPage from "./components/Contact/ContactPage.vue";
import Works from "./components/Portfolio/Works.vue";
import LandingPage from "./components/Home/LandingPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultPage,
    children: [
      { path: "", component: LandingPage },
      { path: "about", component: AboutPage },
      { path: "blogs", component: BlogPage },
      { path: "contact", component: ContactPage },
      { path: "works", component: Works },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Back / forward navigation
    if (savedPosition) {
      return savedPosition;
    }

    // Hash anchor scrolling
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // Default: scroll to top
    return { top: 0 };
  },
});

export default router;
