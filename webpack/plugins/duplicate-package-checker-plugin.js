'use-strict';
// Modules
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const getDuplicatePackageCheckerPlugin = () => {
  const plugin = new DuplicatePackageCheckerPlugin({
    verbose: true,
    emitError: true,
  });

  return plugin;
};

module.exports = { getDuplicatePackageCheckerPlugin };
