console.log('opening...');
//TODO why class ?

import React, { Component } from 'react';
import AddProd from './AddProd.js';
//import { Link } from 'react-router-dom';
//import 'bootstrap';

class NavBar extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     compName: 'NavBar.js'
  //   };
  // };

  componentDidMount() {
   console.log('unmounting...');
  };

  render() {
    return (
      <div className="navbar">
        <nav>
          <p>DataBase Front: </p>

          <AddProd handleCRUDType={this.props.handleCRUDType} />

          <button className="btn btn-warning"> login </button>
          
          {/* <button className="btn btn-outline-success" type="submit">Test Button</button> */}
        </nav>
      </div>
    );
  }
};

export default NavBar;
