'use-strict';
// Utils
const {
  VALID_NODE_ENV,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
} = require('./constants');
const { getConfig } = require('./get-config-file');

const DEFAULT_ENV = {
  NODE_ENV: VALID_NODE_ENV,
  IS_DEVELOPMENT: IS_DEVELOPMENT,
  IS_PRODUCTION: IS_PRODUCTION,
};

const getConfigEnv = (objectEnv = {}) => {
  const conf = getConfig();

  if (conf) {
    const resultConf = Object.keys(conf).reduce(
      (acc, key) => {
        const value = JSON.stringify(conf[key]);

        acc[key] = value;
        return Object.assign({}, acc);
      },
      Object.assign({}, objectEnv, DEFAULT_ENV),
    );

    return resultConf;
  }

  return {};
};

module.exports = { getConfigEnv };
