import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      'definePiniaStore'
    ],
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global.scss"',
        },
      },
    },
    resolve: {
      alias: {
        '@/assets': '/assets',
        '@/store': '/store',
      }
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    }
  }
})
