import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './home';
import Owner from './Owner';
import Buyer from './Buyer'
import TTP from './ttp';


import React, {Component} from 'react';
class App extends Component {
  render() {
  return (
    <BrowserRouter>
        <div className="wrapper" id="wrapper">
            <Route path="/" exact component={HomePage} />
            <Route path="/owner" exact component={Owner} />
            <Route path="/buyer" exact component={Buyer} />
            <Route path="/thirdparty" exact component={TTP} />          
        </div>
    </BrowserRouter> 
  );
  }
}

export default App;