import { getHighlighter, IHighlighterPaths } from 'shiki'
import getRoutes from './utils/getRoutes'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mipdevp blog - Opini, Tutorial, Panduan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'VOLQl5-7me5iMWVWN2eOYt71o-RxfaAlPlKrgYYHhcA',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'blog yang terangkum informasi tentang opini-opini isu programming yang populer maupun terkini dari pandangan MIPDEVP, memberikan tutorial dan panduang yang mudah-mudahan sampai kepada para pencari tutorial ^^',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.png' }],
  },

  router: {
    base: '/blog/',
  },

  static: {
    prefix: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/disqus', '~/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxtjs/color-mode', '@nuxtjs/svg'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/dayjs',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    'vue-social-sharing/nuxt',
    '@nuxtjs/google-adsense',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      async highlighter() {
        const highlighter = await getHighlighter({
          theme: 'one-dark-pro',
        })
        return (rawCode, lang) => {
          return highlighter.codeToHtml(rawCode, { lang })
        }
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-custom-properties': false,
      },
    },
  },

  dayjs: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    plugins: ['relativeTime', 'advancedFormat'],
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },

  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    },
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: () =>
      `${process.env.BASE_URL || 'http://localhost:3000'}/sitemap.xml`,
  },

  sitemap: {
    hostname: 'https://mipdevp.com',
    routes: async () => {
      const routes = await getRoutes()
      return [...routes]
    },
  },

  'google-adsense': {
    id: 'ca-pub-5313997000460681',
  },

  pageTransition: 'page',
}
