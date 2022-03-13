'use-strict';
// Utils
const { IS_PRODUCTION } = require('../utils/constants');
// Optimization
const { terser } = require('../optimization/terser');
const { cssAssets } = require('../optimization/css-assets');
const { getSplitChunks } = require('../optimization/split-chunks');

const getOptimizationMainPreset = () => {
  const optimization = {
    minimize: IS_PRODUCTION,
    minimizer: [
      terser(),
      cssAssets(),
    ],
    splitChunks: getSplitChunks(),
    runtimeChunk: 'single'
  };

  return optimization;
};

module.exports = { getOptimizationMainPreset };
