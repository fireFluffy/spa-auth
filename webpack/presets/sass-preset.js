'use-strict';
// Loaders
const { getStyleLoader } = require('../loaders/style-loader');
const { getCssLoader } = require('../loaders/css-loader');
const { getPostCssLoader } = require('../loaders/postcss-loader');
const { getSassLoader } = require('../loaders/sass-loader');


const getSassPreset = (target) => {
  const use = [
    getStyleLoader(target),
    getCssLoader(),
    getPostCssLoader(),
    getSassLoader(),
  ];

  const preset = {
    test: /\.s?[ac]ss$/i,
    sideEffects: true,
    use,
  };

  return preset;
};

module.exports = { getSassPreset };