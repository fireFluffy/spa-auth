'use-strict';
// Modules
const path = require('path');
const { merge } = require('webpack-merge');
// Utils
const {
  PATH_TO_ASSETS,
  PATH_TO_BUILD,
  PATH_TO_PROJECT,
  PRODUCTION,
} = require('./utils/constants');
// Webpack configs import
const { mainConfig } = require('./main.webpack.config');

// Config
const prodConfig = {
  mode: PRODUCTION,
  devtool: false,

  entry: {
    bundle: [path.join(PATH_TO_PROJECT, 'index.jsx')],
    vendorStyles: [
      path.join(PATH_TO_ASSETS, 'less/global.less'),
    ],
    styles: [
      path.join(PATH_TO_ASSETS, 'less/main.less'),
    ],
  },

  output: {
    filename: 'js/[name]-[hash:8].js',
    chunkFilename: 'js/chunk-[name]-[hash:8].js',
    path: PATH_TO_BUILD,
    publicPath: '/',
    globalObject: 'self',
  },
}

const config = merge(mainConfig, prodConfig);
module.exports = config;
