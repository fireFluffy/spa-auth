'use-strict';
// Modules
const WebpackBar = require('webpackbar');

const getProgressBarPlugin = () => {
  const plugin = new WebpackBar();
  return plugin;
}

module.exports = { getProgressBarPlugin };
