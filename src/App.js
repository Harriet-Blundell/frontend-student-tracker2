import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import AllStudents from './components/allStudents';
import Home from './components/home';
import Blocks from './components/blocks';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Nav />
      <Router>
        <Home path="/" />
        <AllStudents path="/students/*" />
        <Blocks path="/blocks" />
      </Router>
    </div>
  );
}

export default App;
