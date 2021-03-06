// Modules
import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// Components
import { InputField } from '@components/Form';

const PasswordFieldComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const Icon = useMemo(
    () => (
      <div className="visible-password" onClick={onClick}>
        {isOpen ? <FaEye /> : <FaEyeSlash />}
      </div>
    ),
    [isOpen, onClick],
  );

  const description = useMemo(
    () => (
      <div className="description-field">
        <span>Forgor password?</span>
      </div>
    ),
    [],
  );

  return (
    <InputField
      autoComplete={false}
      description={description}
      name="password"
      placeholder="password"
      postfixIcon={Icon}
      type={isOpen ? 'text' : 'password'}
    />
  );
};

export const PasswordField = memo(PasswordFieldComponent);
