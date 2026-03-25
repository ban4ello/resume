import colors from 'vuetify/es5/util/colors'
// const base = process.env.NODE_ENV === 'gh-pages' ? '/resume/' : '/'

export default {
  router: {
    base: '/'
  },
  build: {
    publicPath: '/static/',
    extend (config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      })
    }
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'vue-scrollto/nuxt',
      {
        duration: 1500,
        offset: -200
      }
    ],
    '@nuxtjs/svg-sprite',
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '96067791',
        webvisor: true
        // clickmap: boolean,
        // debug: boolean,
        // noJS: boolean,
        // disabled: boolean
      }
    ]
  ],

  svgSprite: {
    input: '~/assets/icons'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true
      },
      dark: true,
      themes: {
        dark: {
          primary: '#04293A',
          accent: '#041C32',
          secondary: '#064663',
          info: '#ECB365',
          disabled: '#464646',
          tender: '#f2cfda',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },

        light: {
          primary: '#CDC2AE',
          accent: '#ECE5C7',
          secondary: '#C2DED1',
          info: '#354259',
          tender: '#f2cfda',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   publicPath: '/nuxt/'
  // }
}
