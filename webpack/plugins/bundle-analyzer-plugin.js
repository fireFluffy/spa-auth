'use-strict';
// Modules
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const options = {
  host: 'http://127.0.0.1',
  port: 8888,
};

const getBundleAnalyzerPlugin = () => {
  const plugin = new BundleAnalyzerPlugin(options);
  return plugin;
};

module.exports = { getBundleAnalyzerPlugin };
