'use-strict';
// Utils
const { IS_DEVELOPMENT } = require('../utils/constants');

const name = IS_DEVELOPMENT
  ? '[name].[ext]' : '[name].[ext]?[hash:8]';

const outputPath = IS_DEVELOPMENT
  ? 'fonts' : 'assets/fonts';

const getFontsFileLoader = () => {
  const loader = {
    loader: 'file-loader',
    options: {
      name,
      outputPath,
    },
  };

  return loader;
};

module.exports = { getFontsFileLoader };
