import React from 'react';
import AppNavbar from './components/AppNavbar';
import Login from './components/auth/Login';


import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import FormQuote from './components/FormQuote'


function App() {
  return (
    <Provider store= {store}>
    <div className="App">
        <AppNavbar />
        <Login />
    </div>
    </Provider>
  );
}

export default App;
