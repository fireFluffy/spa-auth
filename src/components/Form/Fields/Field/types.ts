/* eslint-disable @typescript-eslint/no-explicit-any */
// Modules
import { Ref } from 'react';

export interface TFieldProps {
  setRef: Ref<unknown>;
  component: any;
  name: string;
  required?: boolean;
  type: string;
  value?: string | number;
}

type TFieldArgs = {
  component: any;
  type?: string;
};
export type TField = ({ component }: TFieldArgs) => any;
