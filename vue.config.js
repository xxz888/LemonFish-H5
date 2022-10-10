const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require('path');
const themePath = path.resolve(__dirname, 'src/assets/style/theme.less');

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'
var webpack = require('webpack');

module.exports = {
  publicPath: '/lemonFish/',
  productionSourceMap: false,
  outputDir: process.env.NODE_ENV === "production" ? "theory" : "theory-test",
  // 关闭eslint检查
  lintOnSave: false,
  transpileDependencies: ['webpack-dev-server/client'],
  chainWebpack: (config) => {
    config.entry.app = ['babel-polyfill', './src/main.js'];
  },
  // 配置css前缀,px转rem
  css: {
    loaderOptions: {
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        // modifyVars: {
        //   // 直接覆盖变量
        //   "text-color": "#111",
        //   "border-color": "#eee",
        //   "nav-bar-text-color": "#c03131",
        //   "van-nav-bar__text": "#c03131",
        //   "nav-bar-title-text-color": "#c03131",

        //   // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        //   // hack: `true; @import "@/assets/style/my-theme.less";`
        // }
        modifyVars: {
          hack: `true; @import "${themePath}";`
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },

  configureWebpack: {
    externals: {
       //axios: "axios",// 配置使用CDN
      "AMap": "AMap",
      "prismplayer": "prismplayer"

    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@i': path.resolve(__dirname, './src/assets'),
      }
    },
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },

  // css: {
  //   loaderOptions: {
  //     // 给 less-loader 传递 Less.js 相关选项
  //     less: {
  //       // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
  //       // `primary` is global variables fields name
  //       // modifyVars: {
  //       //   // 直接覆盖变量
  //       //   "text-color": "#111",
  //       //   "border-color": "#eee",
  //       //   "nav-bar-text-color": "#c03131",
  //       //   "van-nav-bar__text": "#c03131",
  //       //   "nav-bar-title-text-color": "#c03131",

  //       //   // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //       //   // hack: `true; @import "@/assets/style/my-theme.less";`
  //       // }
  //       modifyVars: {
  //         red: "#03a9f4",
  //         blue: "#3eaf7c",
  //         orange: "#f08d49",
  //         "text-color": "#111"
  //       }
  //     }
  //   }
  // }

  // chainWebpack: config => {
  //   const lessRule = config.module.rule("less");
  //   lessRule.uses.clear();
  //   lessRule
  //     .test(/\.less$/)
  //     .use("style-loader")
  //     .loader("css-loader")
  //     .loader("less-loader")
  //     .options({
  //       modifyVars: {
  //         // 直接覆盖变量
  //         "text-color": "#111",
  //         "border-color": "#eee",
  //         // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //         hack: `true; @import "@/assets/style/my-theme.less";`
  //       }
  //     });
  // }

  // // 自定义主题样式
  // rules: [
  //   {
  //     test: /\.less$/,
  //     use: [
  //       // ...其他 loader 配置
  //       {
  //         loader: "less-loader",
  //         options: {
  //           modifyVars: {
  //             // 直接覆盖变量
  //             "text-color": "#111",
  //             "border-color": "#eee",
  //             // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //             hack: `true; @import "@/assets/style/my-theme.less";`
  //           }
  //         }
  //       }
  //     ]
  //   }
  // ]
  devServer: {
    disableHostCheck: true,
    // 代理
    proxy: {
      // 只要请求地址有'api'都会匹配上
      "/theoryapi": {
        //  target: "http://192.168.1.27:4032/theoryapi/",     
         //target: "http://121.41.97.244:4032/theoryapi/",
           target:"https://www.hzsjspx.com/theoryapi/",

        ws: true,
        // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          "^/theoryapi": "" //通过pathRewrite重写地址，将前缀/api转为/
        }
      },

    }
  }
};
