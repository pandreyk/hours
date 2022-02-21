const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (env, argv) => {
  return merge(common(env, argv), {
    devtool: 'inline-source-map',
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 8080,
      open: true,
      historyApiFallback: true,
    },
  })
}
