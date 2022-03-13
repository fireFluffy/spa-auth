'use-strict';
// Modules
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
// Utils
const {
  APP_DIR,
  VALID_NODE_ENV,
} = require('./constants');

const getConfig = () => {
  let file;

  try {
    file = fs.readFileSync(
      path.join(APP_DIR, `.env.${VALID_NODE_ENV}`,
    ));

    if (file) {
      const conf = dotenv.parse(file);
      return conf;
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Config file not found!');
    } else {
      throw err;
    }
  }

  return null;
};

module.exports = { getConfig };
