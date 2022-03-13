'use-strict';
// Loaders
const { getFontsFileLoader } = require('../loaders/fonts-file-loader');

const getFontPreset = () => {
  const preset = {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
    include: /[/\\](fonts)[/\\]/,
    use: [
      getFontsFileLoader(),
    ],
  };

  return preset;
};

module.exports = { getFontPreset };
