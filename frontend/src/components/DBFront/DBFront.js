console.log('opening...');

import React from 'react';
import NavBar from './NavBar.js';
import GetAllProds from './GetAllProds.js';

//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; //defines client routes (express style)
//import AddProd from './AddProd.js';
//import EditProd from './EditProd.js';
//import DelProd from './DelProd.js';

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
    //console.log(this.state.compName, ' mounted');
   };

   componentWillUnmount() {
   console.log('unmounting...');
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
          <NavBar />
        </div>

        <div>
          <GetAllProds/>
        </div>
      </div>
    );
  };
};

export default DBFront;
