'use-strict';

// Plugins
const { getBundleAnalyzerPlugin } = require('../plugins/bundle-analyzer-plugin');
const { getVisualizerPlugin } = require('../plugins/visualizer-plugin');

const getAnalyzerPluginsLoader = () => {
  return [
    getBundleAnalyzerPlugin(),
    getVisualizerPlugin(),
  ].filter(Boolean);
};

module.exports = {
  getAnalyzerPluginsLoader,
};
