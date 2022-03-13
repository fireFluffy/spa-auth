'use-strict';
// Loaders
const { getStyleLoader } = require('../loaders/style-loader');
const { getCssLoader } = require('../loaders/css-loader');
const { getPostCssLoader } = require('../loaders/postcss-loader');
const { getLessLoader } = require('../loaders/less-loader');

const getLessPreset = () => {
  const use = [
    getStyleLoader(),
    getCssLoader(),
    getPostCssLoader(),
    getLessLoader(),
  ];

  const preset = {
    test: /\.less$/i,
    sideEffects: true,
    use,
  };

  return preset;
};

module.exports = { getLessPreset };
