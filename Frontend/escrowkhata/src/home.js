import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Link } from 'react-router-dom';

class HomePage extends Component {
  render() { 
  return (
     <div className="bg">    
    <div className="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <h2 className="text-center display-2 mainfont">
      Escrow Asan Khata 
      </h2>
      </div>
      
      </div>

      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-8 text-center">
        
        <h3 className="smallfont" >Asaan Smart Contract for grocery Items</h3>
        </div>
        <div className="col-md-2">
        </div>
      </div>
      <br/>
      <div className="row section">
      
      <div className="col-md-4">
        </div>
        <div className="col-md-4 text-center">
        <br/>
        <h4>Who Are You?</h4>
       <br/>
       <div className="row">
       <div className="col-sm-3"></div>
       <div className="col-sm-3">
       <label>
           
       <Link to="/owner" className="btn btn-success">Owner</Link>
          
       </label>
       </div>
       <div className="col-sm-3">
       <label>
       <Link to="/buyer" className="btn btn-danger">Buyer</Link>
       
      
       </label>
       </div>
       <div className="col-sm-3"></div>
       </div>
       <div className="row">
         <div className="col-md-4"></div>
         <div className="col-md-4">
       
       </div>
       <div className="col-md-4"></div>
        </div>
        <br/>
        </div>
        <div className="col-md-4">
        </div>
        
      </div>
    </div>
    </div>

  );
}
}
export default HomePage;

