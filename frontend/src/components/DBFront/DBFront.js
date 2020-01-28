console.log('openin DBFront.js...');

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; //defines client routes (express style)

import NavBar from './NavBar.js';
import AddProd from './AddProd.js';
import ModProd from './ModProd.js';
import DelProd from './DelProd.js';
import GetAllProds from './GetAllProds.js';

//import axios from 'axios';
//import DBFront from './components/DBFront/DBFront.js'
//const testUrl = 'http://localhost:3000/products/getdata/';

class DBFront extends React.Component {
    
  constructor() {
    super()
    this.state = {
      check: 'DBFront.js state reached'
    };
  };

  render() {
    console.log('DBFront this: ', this);
    return (
      <div>
        <h5>DBFront.js running...</h5>
        <h6>...{this.state.check}</h6>
        <Router>
          <NavBar />
          <Route path='/getall' component={GetAllProds} /> {/* hitting the route calls the relative component */}
          <Route path='/create' component={AddProd} />
          <Route path='/remove' component={DelProd} />
          <Route path='/edit/:id' component={ModProd} />
        </Router>
      </div>
    );
  };
};

export default DBFront;
