'use-strict';
// Modules
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// Constants
const { APP_DIR, PATH_TO_PROJECT } = require('../utils/constants');

const getForkTsCheckerWebpackPlugin = () => {
  const plugin = new ForkTsCheckerWebpackPlugin({
    eslint: {
      files: `${PATH_TO_PROJECT}/**/*.{ts,tsx,js}`,
    },
    typescript: {
      configFile: path.join(APP_DIR, 'tsconfig.json'),
      diagnosticOptions: {
        semantic: true,
        syntactic: true
      },
    },
  });

  return plugin;
};

module.exports = { getForkTsCheckerWebpackPlugin };
