const path = require('path')
const webpack = require('webpack')
const awesome = require('awesome-typescript-loader')
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

const mainDir = 'src/main'
const resolve = rpath => path.join(__dirname, rpath)

const devServer = {
  port: 3000,
  host: 'localhost'
};

module.exports = {
  devServer,
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${devServer.host}:${devServer.port}`,
    'webpack/hot/only-dev-server',
    resolve(`${mainDir}/index`)
  ],
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new awesome.ForkCheckerPlugin(),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
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
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
    plugins: [
      new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
    ]
  },
}
