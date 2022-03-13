'use-strict';

const ESLintPlugin = require('eslint-webpack-plugin');

const getEslintPlugin = () => {
  const plugin = new ESLintPlugin();
  return plugin;
};

module.exports = { getEslintPlugin };
