console.log('openin...');

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; //defines client routes (express style)
//import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
//TODO npm remove react-router-with-props
//import Popup from "reactjs-popup";

import NavBar from './NavBar.js';
//import AddProd from './AddProd.js';
//import EditProd from './EditProd.js';
//import DelProd from './DelProd.js';
import GetAllProds from './GetAllProds.js';
//import ShowAllProds from './ShowAllProds.js';
//import axios from 'axios';

//import TestStuff_03 from './testingstuff/TestingStuff_03.js' 

//const getDataRoute = 'http://localhost:3000/products/getdata/'; //server side address
//const postDataRoute = '';
//const putDataRoute = '';
//const delDataRoute = '';

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
    console.log('DBFront this: ', this);
    return (
      <div>
        <div>
          <h6> --- rendering {this.state.compName} </h6>

        </div>
        <NavBar />
        <GetAllProds />{/* God's function */}

        {/* <Router> */}

        {/*   {/\* passing down props via React router ->  https://learnwithparam.com/blog/how-to-pass-props-in-react-router/ *\/} */}
        {/*   <Route path='/create/' render={(props)=> <AddProd {...props} actiontype={'addprod'} buttonlabel={'Add Product'}/>}/> */}
          
        {/*   <Route path='/getall/' component={GetAllProds} /> {/\* hitting the route calls the relative component *\/} */}

        {/*   <Route path='/remove/' component={DelProd} /> */}

        {/*   <Route path='/edit/' render={(props)=> <EditProd {...props} actiontype={'modprod'} buttonlabel={'Edit Product'} />}/> */}
       
        {/* </Router> */}
      </div>
    );
  };
};

export default DBFront;
