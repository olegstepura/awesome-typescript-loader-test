const path = require('path');
const webpack = require('webpack');
const awesome = require('awesome-typescript-loader');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, './src/main/index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
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
        test: /\.jsx?$/,
        loaders: ['babel'],
        query: {
          presets: [
            require.resolve('babel-preset-es2015-webpack'),
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-0'),
          ]
        }
      },
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript'],
      },
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src/main"), path.resolve(__dirname, "node_modules")],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css']
  }
};
