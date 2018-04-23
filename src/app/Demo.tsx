import * as React from 'react';
import { Subscribe } from 'unstated';
import { Auth } from '@aexol/slothking-syncano';
import { Form } from '@aexol/slothking-form';
import { PreloaderScreen } from '@aexol/slothking-components';

export const Demo = (props) => (
  <Subscribe to={[Auth]}>
    {(sync: Auth) => {
      if (sync.state.valid === false) {
        return (
          <Form
            fields={[
              { name: 'username', type: 'string' },
              { type: 'string', name: 'password', inputType: 'password' }
            ]}
            validate={sync.login}
            submitText="Login"
          />
        );
      }
      if (!sync.state.valid) {
        return <PreloaderScreen text="Logging in..." />;
      }
      return (
        <div>
          <button onClick={sync.logout}>Log out</button>
        </div>
      );
    }}
  </Subscribe>
);
