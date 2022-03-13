// Modules
import React, { FC, memo } from 'react';
// Layouts
import { DefaultLayout } from '@layouts/default';

const LoginFormComponent: FC = () => (
  <DefaultLayout>
    <div className="login-form">Login Form</div>
  </DefaultLayout>
);

export const LoginForm = memo(LoginFormComponent);
