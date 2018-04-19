import * as React from 'react'
import * as styles from './App.css'
class Home extends React.Component {
  render () {
    return (
      <div className={styles.Home}>
        <div className={styles.WelcomeMessage}>
          {' '}
          Hello! Everything is up and runnin. Now you can start creating your ultra-fast marvelous react-repatch-syncano app. Happy coding.
        </div>
      </div>
    )
  }
}
export default Home
