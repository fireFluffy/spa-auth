'use-strict';
// Modules
const path = require('path');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
// Constants
const {
  IS_DEVELOPMENT,
  PATH_TO_ASSETS,
  PATH_TO_BUILD,
} = require('../utils/constants');

const outputPath = IS_DEVELOPMENT
  ? PATH_TO_ASSETS
  : PATH_TO_BUILD;

const options = {
  outputPath: path.resolve(outputPath),
};

const getHtmlWebpackHarddiskPlugin = () => {
  const plugin = new HtmlWebpackHarddiskPlugin(options);
  return plugin;
};

module.exports = { getHtmlWebpackHarddiskPlugin };
