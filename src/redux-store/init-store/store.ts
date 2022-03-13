// Modules
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from '@redux-devtools/extension';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
// Utils
import { CONSTS } from '@utils';
// Main Types
import { TInitStore } from './types';
// Store
import { rootReducer } from './reducer';
import { initialState } from './state';
import { rootEpic } from './epic';

const { IS_DEVELOPMENT } = CONSTS.ENV;

const options = {
  name: 'SPA-Auth',
  realtime: true,
  trace: true,
  traceLimit: 25,
};

export const initStore: TInitStore = (history: History) => {
  const epicMiddleware = createEpicMiddleware();
  const middleware = [routerMiddleware(history), epicMiddleware];

  let composeEnhancers;

  if (IS_DEVELOPMENT) {
    composeEnhancers = composeWithDevTools(options);
  } else {
    composeEnhancers = compose;
  }

  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(rootReducer(history), initialState, enhancer);

  epicMiddleware.run(rootEpic);

  return store;
};
