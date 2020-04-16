import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom' //might need Route
import Login from './components/auth/Login';
import AppNavbar from './components/AppNavbar';
import FormQuote from './components/FormQuote';
import Profile from './components/Profile';
import History from './components/History';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
  return(
    <Router>
      <AppNavbar />
      <UnPrivateRoute exact path ="/login" component= {Login}/>
      <PrivateRoute exact path = "/forum" component = {FormQuote}/>
      <PrivateRoute exact path="/profile" component = {Profile} />
      <PrivateRoute exact path ="/history" component ={History} />
    </Router>
  );
}


export default App;
