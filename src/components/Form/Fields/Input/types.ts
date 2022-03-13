import { FieldRenderProps } from 'react-final-form';

export interface TInputProps {
  input: FieldRenderProps<string, HTMLInputElement>;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  maxLength?: number;
  placeholder?: string;
}
