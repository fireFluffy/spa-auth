'use-strict';

const getTsLoader = () => {
  const loader = {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
      happyPackMode: true,
    },
  };

  return loader;
};

module.exports = { getTsLoader };
