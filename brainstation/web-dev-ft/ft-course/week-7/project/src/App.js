import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/style.css';
import NavBarSection from './containers/NavBarSection';
import MainSection from './containers/MainSection';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="container">
          <NavBarSection />
          <Route path='/videos/:id' render = {(props) => {
            return <MainSection {...props} />
          } }/>
        </div>
      </Router>
    );
  }
}

export default App;
