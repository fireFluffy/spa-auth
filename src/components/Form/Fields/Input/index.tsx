// Modules
import React, { FC, memo, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
// Components
import { Field } from '../Field';
// Config
import { CONFIG } from './lib/config';
// Types
import { TInputProps } from './types';

const InputComponent: FC<TInputProps> = ({ input, inputRef, maxLength, placeholder }) => {
  const fieldId = useRef<string>(null);

  useEffect(() => {
    if (!fieldId.current) {
      fieldId.current = `form-field-${uuid()}`;
    }
  }, []);

  return (
    <div className="input-block">
      <div className="input-block__body">
        <div className="input-block__input">
          <input
            ref={inputRef}
            maxLength={maxLength}
            name={input.name}
            onBlur={input.onBlur}
            onChange={input.onChange}
            onFocus={input.onFocus}
            placeholder={placeholder}
            type="text"
            value={input.value}
          />
        </div>

        <div className="input-block__postfix-icon"></div>
      </div>

      <div className="input-block__description"></div>
    </div>
  );
};

InputComponent.defaultProps = {
  inputRef: CONFIG.getInputRef(),
  maxLength: 500,
};

export const Input = memo(InputComponent);

export const InputField = memo(
  Field({
    component: InputComponent,
    type: 'text',
  }),
);
