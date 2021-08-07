
import React from 'react';
import Login from "./components/Login";
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';

function App(){
  return (
    <div className="App">
      <Header />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
