import React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes'
import * as reducers from './reducers'
import {createStore, combineReducers, applyMiddleware}  from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const rootReducer = combineReducers(reducers)
const initialState = window.__INITIAL_STATE__
delete window.__INITIAL_STATE__
const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

hydrate(<Provider store={store}>
  <Router>
    <div>{renderRoutes(routes)}</div>
  </Router>
</Provider>, document.getElementById('root'))
