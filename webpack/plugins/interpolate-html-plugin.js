'use-strict';
// Modules
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
// Utils
const { getConfig } = require('../utils/get-config-file');

const getInterpolateHtmlPlugin = () => {
  const configEnv = getConfig();

  const plugin = new InterpolateHtmlPlugin({
    PUBLIC_URL: configEnv.ENDPOINT_DASHBOARD,
  });

  return plugin;
};

module.exports = { getInterpolateHtmlPlugin };
