import * as React from 'react';
import {Form} from '@aexol/slothking-form';
import { withStore, StoreProps } from '../syncano';

class Home extends React.Component<StoreProps, any> {
  state = {
    phrase: ''
  };
  render() {
    const animals = ['bat', 'dog', 'cat', 'fish'].filter((a) => a.startsWith(this.state.phrase));
    return (
      <div
        className="Demo"
        style={{
          width: 320,
          margin: 'auto'
        }}
      >
        <h3>Demo form</h3>
        <Form
          validate={(e) => {
            console.log(e);
          }}
          fields={[
            {
              name: 'string',
              type: 'string',
              required: true,
              pattern: /^\d+$/
            },
            {
              type: 'array',
              name: 'tags'
            },
            {
              type: 'text',
              name: 'text'
            },
            {
              name: 'autosuggest',
              type: 'autosuggest',
              list: animals,
              load: (phrase) => {
                this.setState({
                  phrase
                });
              }
            },
            {
              type: 'boolean',
              name: 'boolean'
            },
            {
              type: 'datetime',
              name: 'datetime'
            },
            {
              type: 'select',
              name: 'reference',
              values: [
                {
                  value: 1,
                  label: 'Dog'
                },
                {
                  value: 2,
                  label: 'Cat'
                },
                {
                  value: 3,
                  label: 'Fish'
                }
              ]
            },
            {
              type: 'select',
              name: 'relation',
              multi:true,
              values: [
                {
                  value: 1,
                  label: 'Dog'
                },
                {
                  value: 2,
                  label: 'Cat'
                },
                {
                  value: 3,
                  label: 'Fish'
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}
export default withStore('dummy')(Home);
