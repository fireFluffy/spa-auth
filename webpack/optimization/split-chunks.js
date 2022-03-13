'use-strict';

const getSplitChunks = () => {
  const splitChunks = {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,

    cacheGroups: {
      vendors: {
        name: 'vendors',
        test: /[\\/]node_modules[\\/].*\.js$/,
        chunks: 'all',
      },
    },
  };

  return splitChunks;
};

module.exports = { getSplitChunks };
