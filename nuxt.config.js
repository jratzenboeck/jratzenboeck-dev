export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'jratzenboeck',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/rich-text-renderer.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: 'u0AhKfD6Ac52J8Vqfgl6xwtt',
        cacheProvider: 'memory',
      },
    ],
    [
      'nuxt-cookie-control',
      {
        controlButton: false,
        colors: {
          barBackground: '#a0aec0',
          barButtonColor: '#fff',
          barButtonBackground: '#1565c0',
          barButtonHoverBackground: '#003c8f',
          modalButtonBackground: '#1565c0',
          modalButtonHoverBackground: '#003c8f',
          checkboxActiveBackground: '#1565c0',
          checkboxInactiveBackground: '#a0aec0',
          checkboxActiveCircleBackground: '#003c8f',
          checkboxInactiveCircleBackground: '#fff',
        },
        necessary: [
          {
            name: 'Default Cookies',
            description: 'Used for cookie control.',
            cookies: [
              'cookie_control_consent',
              'cookie_control_enabled_cookies',
            ],
          },
        ],
        optional: [
          {
            name: 'Google Analytics',
            description: 'Used for statistical anyalysis about webpage visits.',
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-42874473-3',
            async: true,
            cookies: ['_gtag'],
            accepted: () => {
              window.dataLayer = window.dataLayer || []
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
              })
            },
          },
        ],
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
