'use-strict';
// Constants
const { IS_DEVELOPMENT } = require('../utils/constants');

const getSassLoader = () => {
  const loader = {
    loader: 'sass-loader',
    options: {
      sourceMap: IS_DEVELOPMENT,
    },
  };

  return loader;
};

module.exports = { getSassLoader };