'use-strict';

const getImageWebpackLoader = () => {
  const loader = { loader: 'image-webpack-loader' };
  return loader;
};

module.exports = { getImageWebpackLoader };
