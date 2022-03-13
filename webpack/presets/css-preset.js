'use-strict';
// Loaders
const { getStyleLoader } = require('../loaders/style-loader');
const { getCssLoader } = require('../loaders/css-loader');
const { getPostCssLoader } = require('../loaders/postcss-loader');

const getCssPreset = () => {
  const preset = {
    test: /\.css$/i,
    use: [
      getStyleLoader(),
      getCssLoader(),
      getPostCssLoader(),
    ],
  };

  return preset;
};

module.exports = { getCssPreset };
