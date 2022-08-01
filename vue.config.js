const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')

const lintOnSave = false

module.exports = {
  lintOnSave,
  transpileDependencies: [
    'vuestic-ui',
    'epic-spinners',
  ],
  pages: {
    index: {
      // entry for the page
      entry: 'src/app/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'FiMM Admin',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
      },
    },
    plugins: [
      ...(
        (!lintOnSave && process.env.NODE_ENV === 'development') ? [] : [new StylelintPlugin({
          files: ['src/**/*.{vue,htm,html,css,sss,less,scss}'],
        })]
      ),
    ],

    devServer: {
      proxy: {
        // '^/api/koolreport': {
        //   target: 'http://localhost:7008',
        //   ws: true,
        //   changeOrigin: true,
        //   secure: false,
        // },
        '^/api/module0': {
          target: 'http://localhost:7000',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
        '^/api/module1': {
          target: 'http://localhost:7001',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
        '^/api/module2': {
          target: 'http://localhost:7002',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
        '^/api/module3': {
          target: 'http://localhost:7003',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
        '^/api/module4': {
          target: 'http://localhost:7004',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
        '^/api/module5': {
          target: 'http://localhost:7005',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
        '^/api/module6': {
          target: 'http://localhost:7006',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
        '^/api/module7': {
          target: 'http://localhost:7007',
          ws: true,
          changeOrigin: true,
          secure: false,
        },

        '^/token': {
          target: 'http://v.irc.my:8057/auth/realms/ldap-realm/protocol/openid-connect',
          ws: true,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // Preload vuestic-ui variables and mixins for every component
        data: '@import "~vuestic-ui/src/components/vuestic-sass/resources/resources.scss";',
      },
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
      importWorkboxFrom: 'local',
    },
  },
}
