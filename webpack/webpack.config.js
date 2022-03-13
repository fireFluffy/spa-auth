'use-strict';

const { NODE_ENV, PRODUCTION } = require('./utils/constants');

function buildConfig() {
  const env = `./${NODE_ENV || PRODUCTION}.webpack.config.js`;
  return require(env)
}

module.exports = buildConfig;
