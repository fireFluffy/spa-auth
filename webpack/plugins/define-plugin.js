'use-strict';
// Modules
const webpack = require('webpack');
// Utils
const { getConfigEnv } = require('../utils/get-config-env');

const getDefinePlugin = () => {
  const plugin = new webpack.DefinePlugin({
    'process.env': getConfigEnv(),
  });

  return plugin;
};

module.exports = { getDefinePlugin };
