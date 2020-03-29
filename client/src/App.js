import React from 'react';
import AppNavbar from './components/AppNavbar';
import Login from './components/auth/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <AppNavbar />
        <Login />
    </div>
  );
}

export default App;
