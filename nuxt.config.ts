// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image"
  ],
  css:["~/assets/style.css"],
  app:{
    head:{
      link:[
        {rel:"icon",type:"image/x-icon",href:"/app-icon.png"}
      ]
    }
  }
})