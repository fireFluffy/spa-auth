// Modules
import React, { FC, memo, useCallback, useMemo, useRef } from 'react';
import { Field as FormField } from 'react-final-form';
import { v4 as uuid } from 'uuid';
// Lib
import { setForwardRef } from '@lib/forward-ref';
// Validators
import { validators } from '@lib/fields';
// Types
import { TFieldProps, TField } from './types';

const FieldComponent: FC<TFieldProps> = ({
  component: WrappedComponent,
  name,
  required,
  type,
  value: formValue,
  ...rest
}) => {
  const nameRef = useRef(name || `form-field-${uuid()}`);

  const validate = useCallback(
    (value) => {
      if (required && validators.required(value)) {
        return 'Пожалуйста, заполните это поле';
      }

      return null;
    },
    [required],
  );

  const renderWrappedComponet = useMemo(
    () => (props: unknown) =>
      (
        <WrappedComponent
          {...props}
          {...rest}
          name={nameRef.current}
          required={required}
          type={type}
          value={formValue}
        />
      ),
    [WrappedComponent, required, rest, type, formValue],
  );

  return (
    <FormField name={nameRef.current} type={type} validate={validate} value={formValue}>
      {renderWrappedComponet}
    </FormField>
  );
};

FieldComponent.defaultProps = {
  value: undefined,
};

const FieldMemo = memo(setForwardRef(FieldComponent));

export const Field: TField =
  ({ component }) =>
    (props: { [key: string]: unknown }) =>
    <FieldMemo {...props} component={component} />;
