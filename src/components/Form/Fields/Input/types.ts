import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { IconType } from 'react-icons';

export interface TInputProps {
  autoComplete?: boolean;
  description?: JSX.Element;
  input: FieldRenderProps<string, HTMLInputElement>;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  maxLength?: number;
  placeholder?: string;
  postfixIcon?: IconType;
  type: 'text' | 'password';
}
