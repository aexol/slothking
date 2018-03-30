import { Diagram } from '@aexol/slothking-diagram';
import * as React from 'react';
import { actions, getConf } from '../syncano';
import { Form } from '@aexol/slothking-form';
import '!style-loader!css-loader!storm-react-diagrams/dist/style.min.css';
import * as styles from './Model.css';
export class Model extends React.Component {
  grid = undefined;
  state = {
    spaceBarPressed: false,
    div: undefined
  };
  componentWillMount() {
    getConf().then((json) => console.log(json));
  }
  render() {
    return (
      <div className={styles.Model}>
        <Form
          fields={[
            {
              type: 'select',
              name: 'endpoint',
              values: Object.keys(actions).map((k) => ({ label: k, value: k }))
            }
          ]}
          validate={(e) => {
            console.log(e);
          }}
        />
        <Diagram
          nodes={[
            {
              name: 'geocode',
              inputs: [
                {
                  name: 'address',
                  type: 'string'
                }
              ],
              outputs: [
                {
                  name: 'geopoint',
                  type: 'object'
                }
              ]
            },
            {
              name: 'time',
              inputs: [
                {
                  name: 'from',
                  type: 'string'
                },
                {
                  name: 'to',
                  type: 'string'
                }
              ],
              outputs: [
                {
                  name: 'time',
                  type: 'integer'
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}
