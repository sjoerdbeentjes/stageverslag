module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'stage-proces',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700" rel="stylesheet' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global styles
  */
  css: [
    '~/scss/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
   ** Loaders
   */
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'weekIndex',
        path: '/:month/:week',
        component: 'pages/index.vue'
      })
    }
  },

  plugins: [
    '~plugins/vuex-router-sync.js'
  ]
}
