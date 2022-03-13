'use-strict';
// Loaders
const { getBabelLoader } = require('../loaders/babel-loader');

const getJsxBabelPreset = () => {
  const preset = {
    test: /\.jsx?$/i,
    exclude: /node_modules/,
    use: [
      getBabelLoader(),
    ],
  };

  return preset;
};

module.exports = { getJsxBabelPreset };
