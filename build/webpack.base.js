// package
const path = require('path');
// const webpack = require('webpack');
// const merge = require('webpack-merge');
// const WebpackBar = require('webpackbar');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// local
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  context: __dirname,
  // context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      // '@': 'https://static.pipk.top/vueShop/public/images',
      '@': resolve('src'),
    },
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig,
    }, {
      test: /\.js$/,
      exclude: /node_module/,
      loader: 'babel-loader',
      // include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
    }, {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader'],
        fallback: 'vue-style-loader',
      }),
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: './images',
          name: '[name].[ext]',
        },
      }],
    }, {
      test: /\.mp3$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: './mp3',
          name: '[name].[ext]',
        },
      }],
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader',
      ],
    }],
  },
};
