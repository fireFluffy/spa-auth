// Modules
import React, { FC, memo } from 'react';
// Types
import { TDefaultLayoutProps } from './types';

const DefaultLayoutComponent: FC<TDefaultLayoutProps> = ({ children }) => (
  <div className="default-layout">
    <div className="default-layout__outer">
      <div className="default-layout__inner">{children}</div>
    </div>
  </div>
);

export const DefaultLayout = memo(DefaultLayoutComponent);
