'use-strict';
// Modules
const path = require('path');
// Utils
const { APP_DIR } = require('../utils/constants');

const getBabelLoader = () => {
  const loader = {
    loader: 'babel-loader',
    options: {
      configFile: path.join(APP_DIR, '.babelrc'),
    },
  };

  return loader;
};

module.exports = { getBabelLoader };
