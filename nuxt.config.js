export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans|Lato&display=swap' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Proxy rewrite api requests
   * Only works in development!!
   * CAUTION: This bypasses netlify functions.
   * Make sure to comment this out and start netlify functions like so:
   * 1.) cd lambdas/
   * 2.) yarn generate
   * 3.) netlify dev
   */
  proxy: {
    '/.netlify': {
      target: 'http://localhost:7071',
      pathRewrite: {
        '^/.netlify/functions/proxy':
          '/api/processReview?code=q1avJaJFhi8IXxJw/vPVC7K6aYezdCqUPteR0NMw5uCmXTgsukpcWQ==',
      },
    },
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
