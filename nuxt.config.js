import StoryblokClient from 'storyblok-js-client'

const storyblokAccessToken = 'u0AhKfD6Ac52J8Vqfgl6xwtt'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Blog about high-quality software engineering',
    titleTemplate: '%s - jratzenboeck',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Jürgen Ratzenböck blogs about creating high-quality Software. He writes about how to create sustainable code bases, ease developer experience and make developers daily work better.',
      },
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
    '~/plugins/gtag.client.js',
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
        accessToken: storyblokAccessToken,
        cacheProvider: 'memory',
      },
    ],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://www.jratzenboeck.com',
    exclude: ['/privacy-policy', '/projects/**', '/home'],
    routes: async () => {
      const Storyblok = new StoryblokClient({
        accessToken: storyblokAccessToken,
      })
      const { data } = await Storyblok.get('cdn/stories', {
        starts_with: 'articles',
      })
      return data.stories.map((story) => story.full_slug)
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  loading: {
    color: '#1565c0',
  },

  generate: {
    exclude: ['/projects/**', '/home'],
    async routes() {
      const Storyblok = new StoryblokClient({
        accessToken: storyblokAccessToken,
      })
      const { data } = await Storyblok.get('cdn/stories')
      return data.stories
        .map((story) => story.full_slug)
        .filter((slug) => slug !== 'home')
    },
  },
}
