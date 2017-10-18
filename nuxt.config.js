const WorkboxBuildWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'stageverslag',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Libre+Baskerville|Rubik:300,400,400i,500,700,900', rel: 'stylesheet' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
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

  css: [
    // Load a node module directly (here it's a SASS file)
    '@/scss/main.scss'
  ],

  modules: [
    ['@nuxtjs/pwa', {
      workbox: {
        swSrc: './sw/sw.js'
      }
    }]
  ],

  manifest: {
    'name': 'Stageverslag',
    'short_name': 'Verslag',
    'theme_color': '#eddd3e',
    'background_color': '#eddd3e',
    'display': 'browser',
    'Scope': '/',
    'start_url': '/',
    'icons': [
      {
        'src': '/images/icons/icon-72x72.png',
        'sizes': '72x72',
        'type': 'image/png'
      },
      {
        'src': '/images/icons/icon-96x96.png',
        'sizes': '96x96',
        'type': 'image/png'
      },
      {
        'src': '/images/icons/icon-128x128.png',
        'sizes': '128x128',
        'type': 'image/png'
      },
      {
        'src': '/images/icons/icon-144x144.png',
        'sizes': '144x144',
        'type': 'image/png'
      },
      {
        'src': '/images/icons/icon-152x152.png',
        'sizes': '152x152',
        'type': 'image/png'
      },
      {
        'src': '/images/icons/icon-192x192.png',
        'sizes': '192x192',
        'type': 'image/png'
      },
      {
        'src': '/images/icons/icon-384x384.png',
        'sizes': '384x384',
        'type': 'image/png'
      },
      {
        'src': '/images/icons/icon-512x512.png',
        'sizes': '512x512',
        'type': 'image/png'
      }
    ],
    'splash_pages': null
  }
}
