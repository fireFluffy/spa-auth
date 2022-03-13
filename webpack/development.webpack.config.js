'use-strict';
// Modules
const path = require('path');
const { merge } = require('webpack-merge');
// Constants
const {
  DEVELOPMENT,
  PATH_TO_PROJECT,
  PATH_TO_ASSETS,
} = require('./utils/constants');
const { getDevServer } = require('./utils/get-dev-server');
// Webpack configs import
const { mainConfig } = require('./main.webpack.config');

// Config
const devConfig = {
  mode: DEVELOPMENT,
  devtool: 'eval-source-map',
  entry: {
    main: [path.join(PATH_TO_PROJECT, 'index.tsx')],
    styles: [
      path.join(PATH_TO_ASSETS, 'less/global.less'),
      path.join(PATH_TO_ASSETS, 'less/main.less'),
    ],
  },

  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    path: PATH_TO_ASSETS,
    publicPath: '/',
    globalObject: 'self',
  },

  infrastructureLogging: {
    level: 'warn',
  },

  devServer: getDevServer(),
};

const config = merge(mainConfig, devConfig);
module.exports = config;
