const path = require('path')
const config = require('./webpack.config.js')

config.devServer = {
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../happy_birthday_mao'),
  port: 8081
}

config.devtool = 'inline-source-map'

module.exports = config
