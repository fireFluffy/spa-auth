'use-strict';
// Utils
const { IS_DEVELOPMENT } = require('../utils/constants');

const getCssLoader = () => {
  const loader = {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: IS_DEVELOPMENT,
    },
  };

  return loader;
};

module.exports = { getCssLoader };
