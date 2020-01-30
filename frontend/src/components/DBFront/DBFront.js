console.log('openin DBFront.js...');

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; //defines client routes (express style)
//import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
//TODO npm remove react-router-with-props
//import Popup from "reactjs-popup";

import NavBar from './NavBar.js';
import AddProd from './AddProd.js';
import ModProd from './ModProd.js';
import DelProd from './DelProd.js';
import GetAllProds from './GetAllProds.js';
import ShowAllProds from './ShowAllProds.js';
//import axios from 'axios';
//import AddEditPopUpForm from './AddEditPopUpForm.js'
import TestStuff_03 from './testingstuff/TestingStuff_03.js' 

const getDataRoute = 'http://localhost:3000/products/getdata/'; //server side address

class DBFront extends React.Component {

  constructor() {
      super();

    //init state  
    this.state = {
        compName: 'DBFront.js',
        products:[]
    };
  };

   componentDidMount() {
    console.log(this.state.compName, ' mounted');
   };

   componentWillUnmount() {
   console.log(this.state.compName, ' unmounted');
   };
    
  //methods  
    testMethod(){
        console.log('testMethod reached');
    };

  render() {
    //console.log('DBFront this: ', this);
    return (
      <div>
       <div>
         <h6> --- rendered {this.state.compName} </h6>
         
       </div>
        <Router>
          <NavBar />
          <Route path='/showall' component={ShowAllProds} /> {/* hitting the route calls the relative component */}
          <Route path='/getall' component={GetAllProds} /> {/* hitting the route calls the relative component */}
          <Route path='/create' component={AddProd} />
          <Route path='/edit/:id' component={ModProd} />
          <Route path='/remove/:id' component={DelProd} />

          <Route path='/testingstuff'
                 render={(props)=> <TestStuff_03 {...props} greetings={'hallo I am a prop!'}/>}/>
        </Router>
      </div>
    );
  };
};

export default DBFront;
