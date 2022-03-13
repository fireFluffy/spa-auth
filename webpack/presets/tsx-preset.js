'use-strict';
// Loaders
const { getTsLoader } = require('../loaders/ts-loader');

const getTsxPreset = () => {
  let use = [
    getTsLoader(),
  ];

  const preset = {
    test: /\.tsx?$/i,
    exclude: /node_modules/,
    use,
  };

  return preset;
};

module.exports = { getTsxPreset };
