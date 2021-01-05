import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import VisualArts from './pages/VisualArts';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';
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
            <Route path="/patagonia" component ={Project1} exact />
            <Route path="/BI-design-challenge" component ={Project2} exact />
            <Route path="/Retro-arcade" component ={Project3} exact />
            <Route path="/BYOW" component ={Project4} exact />
            <Route path="/Kingpin-donut" component ={Project5} exact />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
