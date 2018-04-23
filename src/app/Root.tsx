import * as React from 'react';
import App from './App';
import { Demo } from "./Demo";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { SyncanoProvider } from '@aexol/slothking-syncano';
class Root extends React.Component {
  render() {
    return (
      <SyncanoProvider instanceName="dawn-hill-4437">
        <Router>
          <div id="routing">
            <Switch>
              <Route component={App} exact path="/" />
              <Route component={Demo} path="/demo" />
            </Switch>
          </div>
        </Router>
      </SyncanoProvider>
    );
  }
}
export default Root;
