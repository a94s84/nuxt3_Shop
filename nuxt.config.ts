// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@vueuse/nuxt"
  ],
  supabase: {
    client: {
        auth: {
            persistSession: true //or true
        }
    },
    
  }
})
