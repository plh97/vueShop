const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    pc: path.resolve('./src/pc/index.js')
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'pc/js/index.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'pc',
      filename: 'pc/index.html',
      template: path.resolve('./src/assets/template/index.ejs'),
      chunks: ['pc'],
      chunksSortMode: 'manual'
    }),

    new ExtractTextPlugin('pc/css/index.css')
  ]
};
