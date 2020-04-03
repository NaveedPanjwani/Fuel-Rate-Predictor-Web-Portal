import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Login from './components/auth/Login';
import FormQuote from './components/FormQuote'

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { loadUser } from './actions/authActions';

class App extends Component {
  
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
  return (
    <Provider store={store}>
    <div className="App">
        <AppNavbar />
        <FormQuote />
    </div>
    </Provider>
 
    );
  }
}


export default App;
