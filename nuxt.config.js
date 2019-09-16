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
   ** Proxy rewrite api requests
   * for production use: https://performancereviews.azurewebsites.net
   */
  proxy: {
    '/azure': {
      // target: process.env.API_ENDPOINT || 'http://localhost:7071/api/processReview',
      target: 'https://performancereviews.azurewebsites.net',
      pathRewrite: {
        // '^/azure/processReview': `/api/processReview?code=${process.env.AZURE_FUNCTION_CODE}`,
        '^/azure/processReview': '/api/processReview?code=q1avJaJFhi8IXxJw/vPVC7K6aYezdCqUPteR0NMw5uCmXTgsukpcWQ==',
      },
    },
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
