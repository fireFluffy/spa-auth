// Modules
import React, { FC, memo } from 'react';
// Components
import { InputField } from '@components/Form';

const BodyFormComponent: FC = () => {
  return (
    <form>
      <InputField placeholder="Login" />
    </form>
  );
};

export const BodyForm = memo(BodyFormComponent);
