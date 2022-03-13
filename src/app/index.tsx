// Modules
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// Lib
import { history } from '@lib/history';
import { store } from '@redux-store';

export const AppComponent: FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>Hello World!</div>
    </ConnectedRouter>
  </Provider>
);
