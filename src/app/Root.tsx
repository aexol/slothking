import * as React from 'react';
import App from './App';
import { Demo } from './Demo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class Root extends React.Component {
  render() {
    return (
      <Router>
        <div id="routing">
          <Switch>
            <Route component={App} exact path="/" />
            <Route component={Demo} path="/demo" />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Root;
