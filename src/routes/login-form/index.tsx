// Modules
import React, { FC, memo, useCallback, useMemo } from 'react';
import { Form } from 'react-final-form';
// Layouts
import { DefaultLayout } from '@layouts/default';
// Lib
import { CONFIG } from './lib/config';
// Components
import { BodyForm } from './components/body-form';

const LoginFormComponent: FC = () => {
  const onSubmit = useCallback(() => null, []);

  const renderForm = useMemo(() => () => <BodyForm />, []);

  return (
    <DefaultLayout>
      <div className="login-form">
        <div className="form-block">
          <div className="form-block__title">Sign in</div>

          <div className="form-block__body">
            <Form
              onSubmit={onSubmit}
              initialValues={CONFIG.FORM.INITIAL_STATE}
              render={renderForm}
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const LoginForm = memo(LoginFormComponent);
