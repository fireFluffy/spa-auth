'use-strict';
// Utils
const {
  IS_DEVELOPMENT,
  IS_PRODUCTION,
} = require('../utils/constants');
// Plugins
const { getCleanWebpackPlugin } = require('../plugins/clean-webpack-plugin');
const { getCopyWebpackPlugin } = require('../plugins/copy-webpack-plugin');
const { getDefinePlugin } = require('../plugins/define-plugin');
// const { getDuplicatePackageCheckerPlugin } = require('../plugins/duplicate-package-checker-plugin');
const { getEslintPlugin } = require('../plugins/eslint-plugin');
const { getForkTsCheckerWebpackPlugin } = require('../plugins/fork-ts-checker-webpack-plugin');
const { getHtmlWebpackHarddiskPlugin } = require('../plugins/html-webpack-harddisk-plugin');
const { getHtmlWebpackPlugin } = require('../plugins/html-webpack-plugin');
const { getInterpolateHtmlPlugin } = require('../plugins/interpolate-html-plugin');
const { getLoadableWebpackPlugin } = require('../plugins/loadable-plugin');
const { getMiniCssExtractPlugin } = require('../plugins/mini-css-extract-plugin');
const { getProgressBarPlugin } = require('../plugins/progress-bar-plugin');
const { getRefreshPlugin } = require('../plugins/refresh-plugin');

const getMainPluginsLoader = () => {
  return [
    getProgressBarPlugin(),
    getRefreshPlugin(),
    // getDuplicatePackageCheckerPlugin(),
    IS_PRODUCTION && getCleanWebpackPlugin(),
    getForkTsCheckerWebpackPlugin(),
    getDefinePlugin(),
    getEslintPlugin(),
    IS_DEVELOPMENT && getLoadableWebpackPlugin(),
    getHtmlWebpackPlugin(),
    getInterpolateHtmlPlugin(),
    getHtmlWebpackHarddiskPlugin(),
    getMiniCssExtractPlugin(),
    getCopyWebpackPlugin(),
  ].filter(Boolean);
};

module.exports = { getMainPluginsLoader };
