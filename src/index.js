import { render } from 'react-dom'
import React from 'react'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import testData from '../test-data'

const store = createStore(rootReducer, testData)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
