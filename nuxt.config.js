import { getHighlighter, IHighlighterPaths } from 'shiki'
import getRoutes from './utils/getRoutes'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'MIPDEVP blog - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'VOLQl5-7me5iMWVWN2eOYt71o-RxfaAlPlKrgYYHhcA',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'mipdevp-blog',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@mipdevp' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://mipdevp.com/blog/favicon.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://mipdevp.com/blog/favicon.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtJS',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://mipdevp.com/blog/favicon.png',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.png' }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5313997000460681',
        async: true,
        crossorigin: 'anonymous',
      },
    ],
    htmlAttrs: {
      lang: 'id',
    },
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
    exclude: ['/articles'],
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`
        return route
      })
    },
  },

  pageTransition: 'page',
}
