require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// 端口配置
var port = process.env.PORT || config.dev.port
// 打开浏览器
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// 代理配置
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)
// 本地服务配置
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
//载入热加载配置
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// 配置view层代码启用热载
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// 载入代理配置
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// 回退配置
app.use(require('connect-history-api-fallback')())

// 载入开发服务配置
app.use(devMiddleware)

// 载入热加载配置
app.use(hotMiddleware)

// 挂载静态资源
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> 启动本地开发服务...')
devMiddleware.waitUntilValid(() => {
  console.log('> 服务地址 ' + uri + '\n')
  _resolve()
})

// 开启 express 服务
var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
