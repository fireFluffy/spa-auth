'use-strict';
// Modules
const LoadablePlugin = require('@loadable/webpack-plugin');
// Constants
const {
  IS_PRODUCTION,
} = require('../utils/constants');

const getLoadableWebpackPlugin = () => {

  const plugin = new LoadablePlugin({
    filename: 'stats-loadable.json',
    writeToDisk: IS_PRODUCTION,
  });

  return plugin;
};

module.exports = { getLoadableWebpackPlugin };
