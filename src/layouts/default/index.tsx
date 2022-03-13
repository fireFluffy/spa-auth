// Modules
import React, { FC, memo } from 'react';
// Types
import { TDefaultLayoutProps } from './types';

const DefaultLayoutComponent: FC<TDefaultLayoutProps> = ({ children }) => (
  <div className="default-layout">{children}</div>
);

export const DefaultLayout = memo(DefaultLayoutComponent);
