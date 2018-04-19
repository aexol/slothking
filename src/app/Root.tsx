import * as React from 'react';
import App from './App';
import { SyncanoAdmin } from '../outlibs/admin';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Model } from '../outlibs/modeller';
import { SyncanoProvider } from '../outlibs/syncano';
class Root extends React.Component {
  render() {
    return (
      <SyncanoProvider instanceName="dawn-hill-4437">
        <Router>
          <div id="routing">
            <Switch>
              <Route
                component={(props) => (
                  <SyncanoAdmin
                    rest={{
                      models: [
                        {
                          name: 'propertytype',
                          display: 'name'
                        }
                      ]
                    }}
                    {...props}
                  />
                )}
                path="/admin"
              />
              <Route component={Model} path="/model" />
              <Route component={App} path="/" />
            </Switch>
          </div>
        </Router>
      </SyncanoProvider>
    );
  }
}
export default Root;
