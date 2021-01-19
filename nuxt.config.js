export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Persona Diseño | Julieta Mercerat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Persona Diseño | Julieta Mercerat Diseñadora' }
    ],
    link: [
      // { rel: 'icon', type: 'image/gif', href: '/gifcolores.gif' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Sorts+Mill+Goudy:ital@0;1&family=Ubuntu:wght@300&display=swap',
      }

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/scroll-out', ssr: false },
    { src: '@/plugins/in-viewport', ssr: false },
    '@/plugins/vue-typed-js',

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    "nuxt-compress"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  i18n: {
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   onlyOnRoot: true,  // recommended
    // },
    locales: [
      { code: 'en', iso: 'en-US', name: 'En', file: 'en-US.js' },
      { code: 'fr', iso: 'fr-FR', name: 'Fr', file: 'fr-FR.js' },
      { code: 'es', iso: 'es-ES', name: 'Es', file: 'es-ES.js' }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: 'es',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  }
}
