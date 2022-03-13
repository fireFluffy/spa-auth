// Modules
import React from 'react';
import { render } from 'react-dom';
// Components
import { AppComponent } from '@app';
// Utils
import { CONSTS } from '@utils';

const MOUNT_NODE = document.getElementById(CONSTS.DOM.ROOT);

function renderApp() {
  if (MOUNT_NODE) {
    return render(<AppComponent />, MOUNT_NODE);
  }

  return null;
}

renderApp();
