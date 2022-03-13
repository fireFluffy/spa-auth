'use-strict';
// Modules
const Visualizer = require('webpack-visualizer-plugin');

const options = {
  filename: '../webpack-stats/dev.statistics.html',
};

const getVisualizerPlugin = () => {
  const plugin = new Visualizer(options);
  return plugin;
};

module.exports = { getVisualizerPlugin };
