import React, { Component } from 'react'
import BoxList from './components/BoxList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import testData from '../test-data'
import styles from '../assets/css/components/app.css'

const store = createStore(rootReducer, testData)
const test = false
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.container}>
          <BoxList />
        </div>
      </Provider>
    )
  }
}
