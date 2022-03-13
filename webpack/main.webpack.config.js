'use-strict';
// Modules
const { merge } = require('webpack-merge');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
// Utils
const {
  IS_BUNDLE_ANALYZE,
  PATH_TO_PROJECT,
  IS_PRODUCTION,
} = require('./utils/constants');
const { ALIASES_OBJECT } = require('./utils/aliases');
// Preset
const { getTsxPreset } = require('./presets/tsx-preset');
const { getJsxBabelPreset } = require('./presets/jsx-babel-preset');
const { getLessPreset } = require('./presets/less-preset');
const { getCssPreset } = require('./presets/css-preset');
const { getImgPreset } = require('./presets/img-preset');
const { getSvgPreset } = require('./presets/svg-preset');
const { getFontPreset } = require('./presets/font-preset');
// Plugins loader
const { getMainPluginsLoader } = require('./plugins-loader/main');
// Optimization
const { getOptimizationMainPreset } = require('./optimization-preset/main');
// Webpack configs import
const { analyzeConfig } = require('./analyze.config');

// Config
const config = {
  target: 'web',
  stats: 'errors-only',
  bail: IS_PRODUCTION,

  resolve: {
    alias: ALIASES_OBJECT,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
    modules: [PATH_TO_PROJECT, 'node_modules'],
    plugins: [PnpWebpackPlugin],
  },

  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },

  performance: {
    hints: false,
  },

  optimization: getOptimizationMainPreset(),

  module: {
    rules: [
      getTsxPreset(),
      getJsxBabelPreset(),

      getLessPreset(),
      getCssPreset(),

      getImgPreset(),
      getSvgPreset(),
      getFontPreset(),
    ],
  },

  plugins: getMainPluginsLoader(),
};

const mainConfig = IS_BUNDLE_ANALYZE
  ? merge(config, analyzeConfig) : config;

module.exports = {
  mainConfig,
};
