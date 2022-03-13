'use-strict';
// Modules
const path = require('path');

// Constants from path
const APP_DIR = process.cwd();

const ASSETS_FOLDER = 'assets';
const SOURCE_FOLDER = 'src';
const PUBLIC = 'public';
const BUILD_FOLDER = 'build';
const CACHE_FOLDER = '.cache';

const PREFIX_PATH = '@';
const PATH_TO_PROJECT = path.resolve(APP_DIR, SOURCE_FOLDER);
const PATH_TO_PUBLIC = path.resolve(APP_DIR, PUBLIC);
const PATH_TO_ASSETS = path.resolve(APP_DIR, ASSETS_FOLDER);
const PATH_TO_BUILD = path.resolve(APP_DIR, BUILD_FOLDER);
const PATH_TO_CACHE_FOLDER = path.resolve(APP_DIR, CACHE_FOLDER);

// Mode
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const { NODE_ENV } = process.env;
const ENV_LIST = [DEVELOPMENT, PRODUCTION];
const VALID_NODE_ENV = NODE_ENV && ENV_LIST.includes(NODE_ENV)
  ? NODE_ENV : PRODUCTION;
const IS_DEVELOPMENT = NODE_ENV === DEVELOPMENT;
const IS_PRODUCTION = NODE_ENV === PRODUCTION;
const IS_BUNDLE_ANALYZE = process.env.IS_BUNDLE_ANALYZE || false;

// OS
const OS = {
  IS_WINDOWS: process.platform === 'win32',
};

module.exports = {
  // Path
  APP_DIR,
  ASSETS_FOLDER,
  SOURCE_FOLDER,
  PREFIX_PATH,
  PATH_TO_PROJECT,
  PATH_TO_PUBLIC,
  PATH_TO_ASSETS,
  PATH_TO_BUILD,
  PATH_TO_CACHE_FOLDER,
  // NODE_ENV
  DEVELOPMENT,
  PRODUCTION,
  NODE_ENV,
  ENV_LIST,
  VALID_NODE_ENV,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  IS_BUNDLE_ANALYZE,
  // OS
  OS,
};
