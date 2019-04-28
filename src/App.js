import React, { Component } from 'react'

import './App.css'

import store from './redux'
import { Provider } from 'react-redux'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import {Container} from 'semantic-ui-react'

import Home from './screens/Home'
import Admin from './screens/admin'
import Restrito from './screens/restrito'
import Login from './screens/Login'
import CreateAccount from './screens/CreateAccount'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path='/' component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/restrito' component={Restrito} />
            <Route path='/login' component={Login} />
            <Route path='/create-account' component={CreateAccount} />
            
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
