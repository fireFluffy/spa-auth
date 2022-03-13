// Lib
import { history } from '@lib/history';
// Store
import { initStore } from './init-store/store';

export const store = initStore(history);

export const { dispatch } = store;
