'use-strict';

const getSvgrWebpackLoader = () => {
  const loader = {
    loader: '@svgr/webpack',
    options: {
      svgo: false,
    },
  };

  return loader;
};

module.exports = { getSvgrWebpackLoader };
