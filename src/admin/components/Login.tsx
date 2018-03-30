import * as React from 'react';
import {Form} from '@aexol/slothking-form'
import { INSTANCE_NAME, logIn } from '../../syncano';
let styles = require('./Login.css');

type LoginType = {
  styles?: {
    SyncanoLogin?: string;
    FormGen?: string;
    SyncanoInstanceName?: string;
    Logo?: string;
    Submit?: string;
  };
};

const Wrapper = ({ children, styles }) => <div className={styles.FieldWrapper}>{children}</div>;
const Submit = ({ styles }) => <input className={styles.Submit} type="submit" value={'Sign in'} />;

export const Login = ({ styles: overrideStyles }: LoginType) => {
  if (overrideStyles) {
    styles = overrideStyles;
  }
  return (
    <div className={styles.SyncanoLogin}>
      <div className={styles.Logo}>
        <img src={require('../images/logo.png')} />
      </div>
      <div className={styles.SyncanoInstanceName}>
        {INSTANCE_NAME === 'YOUR_INSTANCE_NAME_HERE'
          ? 'Please set your syncano instance name in src/server/config'
          : INSTANCE_NAME}
      </div>
      <Form
        fields={[
          {
            name: 'username',
            type: 'string',
            styles
          },
          {
            name: 'password',
            type: 'string',
            inputType: 'password',
            styles
          }
        ]}
        AlternativeWrapper={(props) => <Wrapper {...props} styles={styles} />}
        className={styles.FormGen}
        Submit={(props) => <Submit {...props} styles={styles} />}
        validate={(e) => {
          logIn(e);
        }}
        submitText={'Sign in'}
      />
    </div>
  );
};
