const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const ROOT_DIRECTORY = path.join(__dirname, '..')
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, 'src')

const config = {
  entry: [path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../happy_birthday_mao'),
    filename: 'bundle.js',
    publicPath: '/happy_birthday_mao/'
  },
  mode: 'development',
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules'],
    alias: {
      '@': path.resolve('src')
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIRECTORY, 'index.html')
    }),
    new CopyWebpackPlugin([
      { from: path.join(SRC_DIRECTORY, 'assets'), to: path.join(ROOT_DIRECTORY, 'happy_birthday_mao') }
    ])
  ],
  module: {
    rules: [
      { test: /\.js$/,
        // exclude: /node_modules/,
        loader: 'babel-loader' },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /assets\/(model)/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

module.exports = config
