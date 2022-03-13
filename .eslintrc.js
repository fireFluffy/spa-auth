// Modules
const path = require('path');
// Utils
const { APP_DIR, OS } = require('./webpack/utils/constants');
const { ALIASES_OBJECT } = require('./webpack/utils/aliases');

const { IS_WINDOWS } = OS;

module.exports = {
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.json'],
    'import/resolver': {
      alias: {
        map: Object.entries(ALIASES_OBJECT),
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: path.resolve(APP_DIR, 'src'),
        project: path.resolve(APP_DIR, './tsconfig.json'),
        createDefaultProgram: true,
        sourceType: 'module',
        allowImportExportEverywhere: false,
        codeFrame: false,
        ecmaFeatures: {
          jsx: true,
          experimentalObjectRestSpread: true,
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb-typescript',
        'plugin:import/typescript',
      ],
      plugins: [
        '@typescript-eslint',
        'react',
        'optimize-regex',
        'prettier',
        'promise',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/display-name': 0,
        'linebreak-style': 0,
        'eslint linebreak-style': [0, 'error', IS_WINDOWS ? 'windows' : 'unix'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'implicit-arrow-linebreak': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
    {
      files: ['*.js', '*.jsx'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.js', '.jsx'],
        sourceType: 'module',
        allowImportExportEverywhere: false,
        codeFrame: false,
        ecmaFeatures: {
          jsx: true,
          experimentalObjectRestSpread: true,
        },
      },
      extends: [
        'eslint:recommended',
        'airbnb',
        'prettier',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
      ],
      plugins: [
        'react',
        'prettier',
        'react-hooks',
        'optimize-regex',
        'promise',
      ],
      rules: {
        'react/display-name': 0,
        'linebreak-style': 0,
        'eslint linebreak-style': [0, 'error', IS_WINDOWS ? 'windows' : 'unix'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/function-component-definition': 'off',
        'react/no-unstable-nested-components': 'off',
        'react/destructuring-assignment': 'off',
        'implicit-arrow-linebreak': 'off',
        'default-param-last': 'off',
        'class-methods-use-this': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  globals: {
    document: true,
    window: true,
    parent: true,
  },
};