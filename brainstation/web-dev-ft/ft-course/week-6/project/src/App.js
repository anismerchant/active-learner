import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/style.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App" id="container">
        <NavBar />
      </div>
    );
  }
}

export default App;
