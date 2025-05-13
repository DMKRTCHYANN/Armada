// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
      '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-aos'
  ],
  aos: {
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
        },
      ],
    },
  },
})
