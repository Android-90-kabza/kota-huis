
import React from 'react';
import Login from "./components/Login";
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  typography: {

    fontFamily: [
      'Righteous',
      'Pacifico'
    ].join(','),
  }
});

function App(){

  return (
    <div className="App">
      <ThemeProvider theme={theme}> <Header /> </ThemeProvider>
      <Signup />
      <Login />
    </div>
  );
}

export default App;
