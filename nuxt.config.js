const pkg = require('./package');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'PTrackERS Offer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: 'favicon.ico' },
    ],
    script: [
      { src: '/ca/ptrackers/ie.js' }
    ]
},

  /*
  ** Customize the progress-bar color
  */
  loading: false, //{ color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/css/styles.scss', lang: 'sass' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vuelidate',
    '~plugins/vue-filters',
    '~plugins/vue-youtube-embed',
    '~plugins/vue-html-to-paper',
    { src: '~plugins/vue-vimeo-player', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // ['@nuxtjs/bulma', { css: false }],
    ['nuxt-buefy', { css: false }]
  ],
  /*
  ** Router middleware
  */
  router: {
    base: '/ca/demo/',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-vimeo-player',
    ],
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    vendors: [
      'babel-polyfill', // for IE11 support
    ],
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
