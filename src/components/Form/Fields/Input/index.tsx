// Modules
import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import { v4 as uuid } from 'uuid';
// Components
import { Field } from '../Field';
// Config
import { CONFIG } from './lib/config';
// Types
import { TInputProps } from './types';

const InputComponent: FC<TInputProps> = ({
  autoComplete,
  description,
  input,
  inputRef: customInputRef,
  maxLength,
  postfixIcon: PostfixIcon,
  placeholder,
  type,
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  const inputRef = useRef(null);
  const fieldId = useRef<string>(null);

  useEffect(() => {
    if (!inputRef.current) {
      inputRef.current = customInputRef || CONFIG.getInputRef();
    }

    if (!fieldId.current) {
      fieldId.current = `form-field-${uuid()}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickInputBody = useCallback(() => {
    if (!focus) {
      inputRef.current.focus();
      setFocus(true);
    }
  }, [focus, inputRef]);

  const inputOnBlurCallback = useCallback(
    (e) => {
      if (focus) {
        input.onBlur(e);
        setFocus(false);
      }
    },
    [focus, input],
  );

  const inputBodyStyles = useMemo(
    () =>
      classnames('input-block__body', {
        'input-block__body_focused': focus,
        'input-block__body_unfocused': !focus,
      }),
    [focus],
  );

  return (
    <div className="input-block">
      <div className={inputBodyStyles} onClick={onClickInputBody}>
        <div className="input-block__input">
          <input
            ref={inputRef}
            autoComplete={autoComplete ? 'on' : 'off'}
            maxLength={maxLength}
            name={input.name}
            onBlur={inputOnBlurCallback}
            onChange={input.onChange}
            onFocus={input.onFocus}
            placeholder={placeholder}
            type={type}
            value={input.value}
          />
        </div>

        {!!PostfixIcon && <div className="input-block__postfix-icon">{PostfixIcon}</div>}
      </div>

      {!!description && <div className="input-block__description">{description}</div>}
    </div>
  );
};

InputComponent.defaultProps = {
  autoComplete: true,
  maxLength: 500,
  type: 'text',
};

export const Input = memo(InputComponent);

export const InputField = memo(
  Field({
    component: InputComponent,
  }),
);
