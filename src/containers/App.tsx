import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Demo from './Demo'
import * as styles from './App.css'
class AppContainer extends React.Component<any,any> {
  render () {
    return (
      <div className={styles.App}>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Demo} exact path='/demo' />
        </Switch>
      </div>
    )
  }
}
export default AppContainer
