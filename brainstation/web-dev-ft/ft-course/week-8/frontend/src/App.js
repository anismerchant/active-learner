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
      // setup route for the entire site 
      // and pass route props to evaluate 
      // previous and current states in MainSection component
      <Router>
        <div className="App" id="container">
            <NavBarSection />
            <Switch>
              <Route path='/' exact render = {() => <Redirect to='/videos/70eec852-c6a9-4793-b12d-ffc59acffd61' />} />
              <Route path='/videos/:id' render = {(props) => {return <MainSection {...props} /> }}/>
              <Route path='/upload' exact render = {() => {return <UploadSection />}}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
