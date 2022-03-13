// Modules
import React, { forwardRef } from 'react';
// Types
import { TSetForwardRef } from './types';

export const setForwardRef: TSetForwardRef = (Component) =>
  forwardRef((props, ref) => (
    <Component
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      setRef={ref}
    />
  ));
