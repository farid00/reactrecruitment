import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import recruitmentApp from './reducers/index'
import App from './components/app'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const router = routerMiddleware(history)
let store = createStore(recruitmentApp, {}, applyMiddleware(thunk, logger, router));

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  rootEl
)

if (module.hot) {
  console.log('here')
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default;
    ReactDOM.render(
      <Provider store={store}>
        <App history={history}/>
      </Provider>,
      rootEl
    );
  });
}