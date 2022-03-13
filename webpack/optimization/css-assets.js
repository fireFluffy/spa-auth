'use-strict';
// Modules
const safePostCssParser = require('postcss-safe-parser');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cssAssets = () => {
  const plugin = new OptimizeCSSAssetsPlugin({
    cssProcessorOptions: {
      parser: safePostCssParser,
      map: false,
    },
  });

  return plugin;
};

module.exports = { cssAssets };
