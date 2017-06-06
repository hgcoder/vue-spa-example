// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),//打包输出文件设置
    assetsSubDirectory: 'static', //打包生成的index.html中 访问路径配置 二级目录
    assetsPublicPath: '/',//index.html 上引入静态资源配置 结合线上环境挂载点设置
    productionSourceMap: false,
    productionGzip: false,
    title: 'vue-spa-example',
    // favicon: path.resolve(__dirname,'../static/favicon.ico'),
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    title: 'vue-spa-example',
    // favicon: path.resolve(__dirname,'../static/favicon.ico'),
    proxyTable: {
      '/task':{
        target:'http:x.x.x.:8890:/task',
        changeOrigin:true,
        pathRewrite:{ //匹配转发
          '^/task':''
        }
      }
    },
    cssSourceMap: false
  }
}
