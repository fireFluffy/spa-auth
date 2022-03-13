'use-strict';
// Modules
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Utils
const { PATH_TO_ASSETS, IS_DEVELOPMENT, IS_PRODUCTION } = require('../utils/constants');
const { getConfig } = require('../utils/get-config-file');

const conf = getConfig();
const endpoint = conf.ENDPOINT_DASHBOARD;

const mainOptions = {
  excludeChunks: [],
  alwaysWriteToDisk: IS_PRODUCTION,
  inject: true,
  optimize: {
    prefetch: true,
  },
  title: 'SPA-Auth',
  chunksSortMode: 'none',
  template: path.join(PATH_TO_ASSETS, 'html/template.html'),
  filename: 'index.html',
  env: null,
  endpoint,
};

const devOptions = {
  minify: false,
};

const prodOptions = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
};

const options = Object.assign(mainOptions, IS_DEVELOPMENT ? devOptions : prodOptions);

const getHtmlWebpackPlugin = () => {
  const plugin = new HtmlWebpackPlugin(options);
  return plugin;
};

module.exports = { getHtmlWebpackPlugin };
