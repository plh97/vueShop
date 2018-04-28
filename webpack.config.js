// 引入合并包和清理包
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 加载本地配置文件
const baseConfig = require('./build/webpack.base');
const devWebpack = require('./build/webpack.dev');
const prodWebpack = require('./build/webpack.prod');

// 加载项目配置文件
// const pcConfig = require('./build/device/webpack.pc');
const mobileConfig = require('./build/device/webpack.mobile');

module.exports = env => [
  // 如果不需要打包该项目，注释即可
  // pc端打包配置
  // merge(
  //   baseConfig,
  //   pcConfig,
  //   env.NODE_ENV === 'dev' ? devWebpack : prodWebpack,
  //   {
  //     plugins: [
  //       new CleanWebpackPlugin(['dist/pc'])
  //     ]
  //   }
  // ),
  // 移动端打包配置
  merge(
    baseConfig,
    mobileConfig,
    env.NODE_ENV === 'dev' ? devWebpack : prodWebpack,
    {
      plugins: [
        new CleanWebpackPlugin(['dist/mobile'])
      ]
    }
  )
];
