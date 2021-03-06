'use-strict';
// Loaders
const { getSvgrWebpackLoader } = require('../loaders/svgr-webpack-loader');
const { getSvgUrlLoader } = require('../loaders/svg-url-loader');

const getSvgPreset = () => {
  const preset = {
    test: /\.svg$/,
    include: /[/\\]svg[/\\]/,
    issuer: /\.[jt]sx?$/,
    use: [
      getSvgrWebpackLoader(),
      getSvgUrlLoader(),
    ],
  };

  return preset;
};

module.exports = { getSvgPreset };
