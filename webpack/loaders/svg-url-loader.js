'use-strict';
// Utils
const {
  IS_DEVELOPMENT,
  ASSETS_FOLDER,
} = require('../utils/constants');

const name = IS_DEVELOPMENT
  ? '[name].[ext]' : '[name]-[hash:8].[ext]';

const outputPath = IS_DEVELOPMENT
  ? 'svg' : `/${ASSETS_FOLDER}/svg`;

const getSvgUrlLoader = () => {
  const loader = {
    loader: 'file-loader',
    options: {
      name,
      outputPath,
      limit: 10 * 1024,
      noquotes: true,
    },
  };

  return loader;
};

module.exports = { getSvgUrlLoader };
