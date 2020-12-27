import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import VisualArts from './pages/VisualArts';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navbar from './Navbar';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div id = "page-body">
            <Route path="/" component ={HomePage} exact />
            <Route path="/about" component ={About} exact />
            <Route path="/visual-arts" component ={VisualArts} exact />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
