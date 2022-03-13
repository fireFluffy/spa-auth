'use-strict';
// Modules
const dotenv = require('dotenv');
// Constants
const {
  PATH_TO_ASSETS,
} = require('./constants');

const devConstants = dotenv.config({ path: './.env.development' }).parsed;

const getDevServer = () => {
  const config = {
    compress: true,
    static: [
      PATH_TO_ASSETS,
    ],
    historyApiFallback: true,
    hot: true,
    host: devConstants.HOST,
    open: true,
    port: devConstants.PORT,
    devMiddleware: {
      writeToDisk: true,
    },
  };

  return config;
};

module.exports = { getDevServer };
