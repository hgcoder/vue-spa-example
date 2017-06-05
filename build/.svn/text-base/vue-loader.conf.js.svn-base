var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
// .vue样式处理 文件入口
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  })
}
