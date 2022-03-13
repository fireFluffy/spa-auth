'use-strict';
// Plugin loader
const { getAnalyzerPluginsLoader } = require('./plugins-loader/analyzer');

// Config
const analyzeConfig = {
  plugins: getAnalyzerPluginsLoader(),
};

module.exports = {
  analyzeConfig,
};
