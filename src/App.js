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
  HashRouter,
  Route,
} from 'react-router-dom';

import Navbar from './Navbar';

import ScrollToTopRoute from './components/ScrollToTopRoute';

class App extends Component {
  render(){
    return (
      
      <HashRouter>
        <div className="App">
          <Navbar />

          <div id = "page-body">
            <Route path="/" component ={HomePage} exact />
            <ScrollToTopRoute path="/about" component ={About} exact />
            <ScrollToTopRoute path="/visual-arts" component ={VisualArts} exact />
            <ScrollToTopRoute path="/patagonia" component ={Project1} exact />
            <ScrollToTopRoute path="/BI-design-challenge" component ={Project2} exact />
            <ScrollToTopRoute path="/Retro-arcade" component ={Project3} exact />
            <ScrollToTopRoute path="/BYOW" component ={Project4} exact />
            <ScrollToTopRoute path="/Kingpin-donut" component ={Project5} exact />
          </div>
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
