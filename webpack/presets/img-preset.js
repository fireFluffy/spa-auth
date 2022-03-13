'use-strict';
// Loaders
const { getImgFileLoader } = require('../loaders/img-file-loader');
const { getImageWebpackLoader } = require('../loaders/image-webpack-loader');

const getImgPreset = () => {
  const preset = {
    test: /\.(png|jpe?g|gif)$/i,
    include: /[/\\](img)[/\\]/i,
    use: [
      getImgFileLoader(),
      getImageWebpackLoader(),
    ],
  };

  return preset;
};

module.exports = { getImgPreset };
