import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/style.css';
import NavBar from './containers/NavBar';
import MainSection from './containers/MainSection';

class App extends Component {
  render() {
    return (
      <div className="App" id="container">
        <NavBar />
        <MainSection />
      </div>
    );
  }
}

export default App;
