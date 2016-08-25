// Worker

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../components/App'
import configureStore from '../redux/store'
import { connect } from 'react-redux'
import { Router, Route, IndexLink, hashHistory } from 'react-router'
import About from '../components/About'

let initialState = {
  recipes: [{
    id: 0,
    pic: 'pic goes here',
    title: 'Omelette',
    descript: 'Breakfast classic',
    ingred: ['Eggs', 'Coconut Butter']
  }]
}

// Takes the from store.js and brings it in here
let store = configureStore(initialState)

render(
  // This wraps the Store around App.js
  <Provider store={store}>
      <Router history={hashHistory}>
        <App/>
        <Route path="/" component={App}></Route>
        <Route path='about' component={About}></Route>
      </Router>
  </Provider>,
  document.getElementById('App')
)
