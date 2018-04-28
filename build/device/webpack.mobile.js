const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    mobile: path.resolve('./src/mobile/index.js')
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'mobile/js/index.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'mobile',
      filename: 'mobile/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['mobile'],
      chunksSortMode: 'manual'
    }),
    // new ExtractTextPlugin({
    //   filename: '[name].[contenthash].css'
    // })
    new ExtractTextPlugin('mobile/css/index.css')
  ]
};
