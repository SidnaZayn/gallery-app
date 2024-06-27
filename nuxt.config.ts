// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  css: ["~/assets/style.css"],
  app: {
    head: {
      title:'Galéria - Gallery App',
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "easy use gallery app",
        },
        {
          name:'keywords',
          content:'gallery, images, nuxt'
        },
        {
          name:'author',
          content:'Sidna Muhammad Zen'
        },
        
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/app-icon.png" }],
    },
  },
});
