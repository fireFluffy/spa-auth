// Modules
import keys from 'lodash/keys';
// Types
import { TReducer, TJsObjectEnv } from './types';

const INITIAL_OBJECT_ENV = {};

const reducer: TReducer = (accumulator, key) => {
  accumulator[key] = process.env[key];

  return accumulator;
};

export const objectEnv: TJsObjectEnv = keys(process.env).reduce(reducer, INITIAL_OBJECT_ENV);
