'use-strict';
// Utils
const { IS_DEVELOPMENT, ASSETS_FOLDER, } = require('../utils/constants');

const name = IS_DEVELOPMENT
  ? '[name].[ext]' : '[name]-[hash:8].[ext]';

const outputPath = IS_DEVELOPMENT
  ? 'img' : `/${ASSETS_FOLDER}/img`;

const getImgFileLoader = () => {
  const loader = {
    loader: 'file-loader',
    options: {
      limit: 10 * 1024,
      noquotes: true,
      name,
      outputPath,
    },
  };

  return loader;
};

module.exports = { getImgFileLoader };
