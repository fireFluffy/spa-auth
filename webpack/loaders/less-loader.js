'use-strict';
// Constants
const { IS_DEVELOPMENT } = require('../utils/constants');

const getLessLoader = () => {
  const loader = {
    loader: 'less-loader',
    options: {
      sourceMap: IS_DEVELOPMENT,
      lessOptions: {
        javascriptEnabled: true,
        strictMath: false,
      },
    },
  };

  return loader;
};

module.exports = { getLessLoader };
