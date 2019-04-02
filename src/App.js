import React, { Component } from 'react'

import './App.css'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

import Header from './Header'
import store from './redux'
import { Provider } from 'react-redux'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './screens/Home'
import Admin from './screens/admin'
import Restrito from './screens/restrito'
import Login from './screens/Login'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/restrito' component={Restrito} />
            <Route path='/login' component={Login} />
            <Header />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
