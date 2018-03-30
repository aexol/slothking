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
                        name: 'category',
                        display: 'name'
                      },
                      {
                        name: 'subcategory',
                        display: 'title'
                      },
                      {
                        name:'task',
                        display:'value'
                      },
                      {
                        name:'option',
                        display:'id'
                      },
                      {
                        name:'suboption',
                        display:'value'
                      },
                      {
                        name:'flashcard',
                        display:'value'
                      },
                      {
                        name:'flashoption',
                        display:'value'
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
