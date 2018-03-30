import * as React from 'react';
import App from './App';
import Admin from '../admin/Admin';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div id="routing">
          <Switch>
            <Route
              component={(props) => (
                <Admin
                  rest={{
                    models: [
                      {
                        name: 'advert',
                        display: 'url',
                        exclude: ['impressions']
                      },
                      {
                        name: 'league',
                        display: 'name',
                        hide: true
                      },
                      {
                        name: 'team',
                        display: 'name',
                        hide: true
                      }
                    ]
                  }}
                  {...props}
                />
              )}
              path="/admin"
            />
            <Route component={App} path="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Root;
