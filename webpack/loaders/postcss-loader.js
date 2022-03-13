'use-strict';

const getPostCssLoader = () => {
  const loader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: 'postcss.config.js',
      },
    },
  };

  return loader;
};

module.exports = { getPostCssLoader };
