const path = require('path')
const webpack = require('webpack')
const awesome = require('awesome-typescript-loader')

const mainDir = 'src/main';
const resolve = rpath => path.join(__dirname, rpath)

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    resolve(`${mainDir}/index`)
  ],
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new awesome.ForkCheckerPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript'],
      },
    ]
  },
  resolve: {
    modules: [
      resolve(mainDir),
      resolve('node_modules'),
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css']
  },
}
