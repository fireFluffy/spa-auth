'use-strict';
// Modules
const TerserPlugin = require('terser-webpack-plugin');

const terser = () => {
  const plugin = new TerserPlugin({
    terserOptions: {
      parse: {
        ecma: 10,
      },
      compress: {
        ecma: 5,
        warnings: false,
        comparisons: false,
        booleans: true,
        collapse_vars: false,
        if_return: true,
        sequences: true,
        unused: true,
        conditionals: true,
        dead_code: true,
        evaluate: true
      },
      mangle: {
        safari10: true,
      },
      output: {
        beautify: false,
        ecma: 5,
        comments: false,
        ascii_only: true,
      },
    },
    parallel: true,
  });

  return plugin;
};

module.exports = { terser };
