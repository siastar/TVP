console.log('...opening App.js')
//youtube.com/watch?v=7CqJlxBYj-M min52

import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/DBFront/NavBar.js';
import AddProd from './components/DBFront/AddProd.js';
import ModProd from './components/DBFront/ModProd.js';
import DelProd from './components/DBFront/DelProd.js';
import GetAllProds from './components/DBFront/GetAllProds.js';

//import axios from 'axios';
//import DBFront from './components/DBFront/DBFront.js'

const testUrl = 'http://localhost:3000/products/getdata/';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      check: 'App.js state reached',
      data: {}
      // id: 0,
      // message: null,
        // intervalIsSet: false,
      // idToDelete: null,
      // idToUpdate: null,
      // objectToUpdate: null
    };

    //this.displayData = this.displayData.bind(this);
  };

   render() {
    console.log('rendering... ');
    return (
      <div className=''>
       <p>hello!</p>
       <h4> {this.state.check} </h4>
        <Router>
          <NavBar/>
          <Route path='/' component={GetAllProds}/>
          <Route path='/create' component={AddProd}/>
          <Route path='/remove' component={DelProd}/>
          <Route path='/edit/:id' component={ModProd}/>
        </Router>
	</div>
    );
  };

};

export default App;
