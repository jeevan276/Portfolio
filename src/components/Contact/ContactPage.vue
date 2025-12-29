<script>
import {
  Facebook,
  Instagram,
  Linkedin,
  MailOpen,
  MapPinHouse,
  Phone,
  Send,
  Youtube,
} from "lucide-vue-next";

export default {
  components: {
    MapPinHouse,
    MailOpen,
    Phone,
    Youtube,
    Facebook,
    Instagram,
    Linkedin,
    Send,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div
    class="pt-12 p-6 md:p-10 lg:pr-20 xl:pr-50 space-y-10 md:space-y-15 min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-500"
  >
    <div class="relative text-center flex justify-center items-center">
      <h1
        class="absolute text-5xl sm:text-7xl md:text-8xl text-neutral-300 dark:text-neutral-800 opacity-40 -z-0 font-bold tracking-widest"
      >
        CONTACT
      </h1>
      <h1 class="text-3xl md:text-4xl font-extrabold z-10">
        <span class="text-neutral-600 dark:text-neutral-300">GET IN </span>
        <span class="text-amber-400">TOUCH</span>
      </h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div class="flex flex-col gap-6">
        <div class="space-y-3">
          <h1
            class="text-neutral-600 dark:text-neutral-200 font-bold text-xl uppercase"
          >
            Don't be shy !
          </h1>
          <p class="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>

        <div class="space-y-5">
          <div class="flex gap-4 items-center">
            <MapPinHouse
              class="bg-amber-400 text-white size-10 p-2 shrink-0 rounded-xl"
            />
            <div>
              <h1 class="text-neutral-400 dark:text-neutral-500 text-sm">
                ADDRESS POINT
              </h1>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sunwal,+Nawalparasi,+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer hover:underline"
              >
                <p
                  class="font-bold text-neutral-600 dark:text-neutral-300 text-sm sm:text-base break-all hover:text-amber-400 transition-colors"
                >
                  Sunwal, Nawalparasi, Nepal
                </p>
              </a>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <MailOpen
              class="bg-amber-400 text-white size-10 p-2 shrink-0 rounded-xl"
            />
            <div>
              <h1 class="text-neutral-400 dark:text-neutral-500 text-sm">
                MAIL ME
              </h1>
              <a
                class="font-bold text-neutral-600 dark:text-neutral-300 break-all hover:text-amber-400 transition-colors"
                href="mailto:digitaljeevan6@gmail.com"
              >
                digitaljeevan6@gmail.com
              </a>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <Phone
              class="bg-amber-400 text-white size-10 p-2 shrink-0 rounded-xl"
            />
            <div>
              <h1 class="text-neutral-400 dark:text-neutral-500 text-sm">
                CALL ME
              </h1>
              <a
                href="tel:+977 9817487614"
                class="cursor-pointer hover:underline"
              >
                <p
                  class="font-bold text-neutral-600 dark:text-neutral-300 break-all hover:text-amber-400 transition-colors"
                >
                  +977 9817487614
                </p>
              </a>
            </div>
          </div>
        </div>

        <div class="flex gap-3 pt-2">
          <a
            v-for="(icon, index) in socialLinks"
            :key="index"
            :href="icon.url"
            class="flex justify-center items-center size-10 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-amber-400 dark:hover:bg-amber-400 transition-all duration-300 group"
          >
            <component
              :is="icon.component"
              class="size-5 text-neutral-600 dark:text-neutral-300 group-hover:text-white"
            />
          </a>
        </div>
      </div>

      <form action="/" method="POST" class="lg:col-span-2 flex flex-col gap-4">
        <div class="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="outline-none w-full h-12 px-4 border border-neutral-300 dark:border-neutral-700 bg-transparent dark:text-white rounded-3xl focus:border-amber-400 transition-colors placeholder-neutral-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            class="outline-none w-full h-12 px-4 border border-neutral-300 dark:border-neutral-700 bg-transparent dark:text-white rounded-3xl focus:border-amber-400 transition-colors placeholder-neutral-400"
          />
        </div>

        <div class="w-full">
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            class="outline-none w-full h-12 px-4 border border-neutral-300 dark:border-neutral-700 bg-transparent dark:text-white rounded-3xl focus:border-amber-400 transition-colors placeholder-neutral-400"
          />
        </div>

        <div class="w-full">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            class="outline-none w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-transparent dark:text-white rounded-3xl focus:border-amber-400 transition-colors placeholder-neutral-400"
          ></textarea>
        </div>

        <div class="pt-2">
          <button
            type="submit"
            class="relative group flex items-center gap-3 px-6 pr-16 py-3 border border-amber-400 rounded-full cursor-pointer overflow-hidden w-max bg-transparent"
          >
            <span
              class="group-hover:text-white font-bold text-neutral-600 dark:text-neutral-300 z-10 transition-colors duration-300"
            >
              SEND MESSAGE
            </span>
            <div
              class="absolute inset-y-0 right-0 w-12 bg-amber-400 group-hover:w-full transition-all duration-300"
            ></div>
            <Send
              class="absolute right-2 size-8 bg-amber-400 text-white p-1.5 rounded-full z-20"
            />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
