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

const fromPathLib = path.join(PATH_TO_ASSETS, 'lib');
const toPathLib = path.join(toPathMain, 'assets/lib');

const fromPathHtml = path.join(PATH_TO_ASSETS, 'index.html');
const toPathHtml = path.join(
  toPathMain,
  'index.html',
);

const getCopyWebpackPlugin = () => {
  const plugin = new CopyWebpackPlugin({
    patterns: [
      { from: fromPathManifest, to: toPathManifest },
      { from: fromPathLib, to: toPathLib },
    ],
  });

  return plugin;
};

module.exports = { getCopyWebpackPlugin };
