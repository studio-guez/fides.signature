// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  app: {
    baseURL: '/fides.signature/',
  },

  css: [
    "@/assets/___main.scss",
  ],

  compatibilityDate: "2025-01-30",
})
