// https://nuxt.com/docs/api/configuration/nuxt-config

import yaml from '@rollup/plugin-yaml'

export default defineNuxtConfig({

  
  plugins: [
  ],
  modules: ['@nuxt/ui', '@virenbar/nuxt-lanyard'],
  css: ['./assets/css/main.css'],
  
  compatibilityDate: "2024-05-07",
  devtools: { enabled: true },
  vite: {
    server: {
      fs: {
        allow: [
          '.', // allows project root
          '/home/asker', // allows access to /home/asker and subdirectories
        ]
      }
    }
  }
   
})
