import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/style.css';
import NavBarSection from './containers/NavBarSection';
import MainSection from './containers/MainSection';
import UploadSection from './containers/UploadSection';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="container">
            <NavBarSection />
            <Switch>
              <Route path='/' exact render = {() => <Redirect to='/videos/1edc16bd-1bad-418b-bd40-c72ddd926672' />} />
              <Route path='/videos/:id' render = {(props) => {return <MainSection {...props} /> }}/>
              <Route path='/upload' exact render = {() => {return <UploadSection />}}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
