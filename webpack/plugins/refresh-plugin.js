'use-strict';
// Modules
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const getRefreshPlugin = () => {
  const plugin = new ReactRefreshWebpackPlugin();
  return plugin;
};

module.exports = { getRefreshPlugin };
