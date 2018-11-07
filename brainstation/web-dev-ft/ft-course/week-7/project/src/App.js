import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/style.css';
import NavBarSection from './containers/NavBarSection';
import MainSection from './containers/MainSection';

class App extends Component {
  render() {
    return (
      <div className="App" id="container">
        <NavBarSection />
        <MainSection />
      </div>
    );
  }
}

export default App;
