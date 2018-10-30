import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="navigation__logo--left">
          <img src="" alt = "Video Player Button"/>
          <a href="./App.js" target="_self">BrainFlix</a>
        </div>
        <form id="navigation__search">
          <div id="navigation__search--input">
            <input type="text" name="name" id="search" placeholder="Search" />
          </div>
          <button id="navigation__search--icon"></button>
        </form>
        <div className="bgImage__navigation--right">
          <img src="" alt="Camera"/>
          <img src="" alt="User Thumbnail Image"/>
        </div>            
      </nav>  
    )
  }
}

export default App;
