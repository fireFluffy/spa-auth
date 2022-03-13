// Modules
import React, { FC, Ref } from 'react';

export type TSetForwardRef = (
  Component: FC<
  unknown & {
    setRef: Ref<unknown>;
  }
  >,
) => React.FC<{ [key: string]: unknown }>;
