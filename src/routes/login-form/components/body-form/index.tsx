// Modules
import React, { FC, memo } from 'react';
// Components
import { InputField } from '@components/Form';
import { PasswordField } from './password-field';

const BodyFormComponent: FC = () => {
  return (
    <form className="form-body">
      <div className="form-body__field">
        <InputField name="login" placeholder="Enter email or user name" />
      </div>

      <div className="form-body__field">
        <PasswordField />
      </div>
    </form>
  );
};

export const BodyForm = memo(BodyFormComponent);
