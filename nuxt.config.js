const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { join, resolve } = require('path')
const hljs = require('highlight.js')
const glob = require('glob').sync
const customBlock = require('markdown-it-custom-block')
const icons = require('./icons.config')

const sassOptions = {
  includePaths: [
    join(__dirname, './node_modules')
  ]
}
const docPages = glob('articles/**/*.md')
        .map(f => f.replace('articles', '').replace('.md', ''))

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue MDC Documentation' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Vue MDC Documentation' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#fff' },
      { name: 'application-name', content: 'Vue MDC' }
    ],
    link: [
      ...icons,
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  generate: {
    routes: [
      '/',
      ...docPages
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      const vueRule = config.module.rules.find(r => r.loader === 'vue-loader')
      vueRule.query.loaders.scss += `?${JSON.stringify(sassOptions)}`
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.resolveLoader = config.resolveLoader || {}
      config.resolveLoader.alias = config.resolveLoader.alias || {}
      config.resolveLoader.alias['doc-loader'] = join(__dirname, './loaders/doc-loader.js')

      config.module.rules.push({
        test: /\.md$/,
        use: [
          { loader: 'vue-loader' },
          { loader: 'doc-loader' },
          {
            loader: 'markdown-it-loader',
            options: {
              linkify: true,
              html: true,
              highlight (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return '<pre class="hljs"><code>' +
                      hljs.highlight(lang, str, true).value +
                      '</code></pre>'
                  } catch (err) {}
                }

                try {
                  return '<pre class="hljs"><code>' +
                    hljs.highlightAuto(str).value +
                    '</code></pre>'
                } catch (err) {}

                return ''
              },
              use: [
                [customBlock, {
                  example: name => `<example src="${name}"/>`
                }]
              ]
            }
          }
        ]
      })
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: resolve(
          __dirname,
          `reports/${process.env.NODE_ENV || 'report'}.html`
        )
      })
    ]
  },

  plugins: [
    '~plugins/vue-mdc'
  ],

  css: [
    'vue-mdc/dist/vue-mdc.min.css',
    'highlight.js/styles/tomorrow.css'
  ]
}
