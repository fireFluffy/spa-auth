// Modules
import { combineReducers } from 'redux';
import { History } from 'history';
// Reducers
import { routerReducer } from '@reducers/router';

export const rootReducer = (history: History) =>
  combineReducers({
    router: routerReducer(history),
  });
