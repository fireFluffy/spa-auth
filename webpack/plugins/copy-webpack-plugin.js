'use-strict';
// Modules
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Constants
const {
  IS_DEVELOPMENT,
  PATH_TO_ASSETS,
  PATH_TO_BUILD,
} = require('../utils/constants');

const toPathMain = IS_DEVELOPMENT
  ? PATH_TO_ASSETS : PATH_TO_BUILD;

const fromPathManifest = path.join(PATH_TO_ASSETS, 'manifest');
const toPathManifest = path.join(
  toPathMain,
  'assets/manifest',
);

const getCopyWebpackPlugin = () => {
  const plugin = new CopyWebpackPlugin({
    patterns: [
      { from: fromPathManifest, to: toPathManifest },
    ],
  });

  return plugin;
};

module.exports = { getCopyWebpackPlugin };
