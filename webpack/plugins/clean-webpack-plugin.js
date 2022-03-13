'use-strict';
// Modules
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Constants
const { APP_DIR, IS_BUNDLE_ANALYZE } = require('../utils/constants');

const getCleanWebpackPlugin = () => {
  const plugin = new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [
      IS_BUNDLE_ANALYZE
        && path.join(APP_DIR, 'webpack/webpack-stats/**/*'),
      path.join(APP_DIR, 'build/**/*'),
    ].filter(Boolean),
  });

  return plugin;
};

module.exports = { getCleanWebpackPlugin };
