console.log('opening...');
//TODO why class ?

import React, { Component } from 'react';
import AddProd from './AddProd.js';
import UserLogin from './UserLogin.js'
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
   console.log('mounted...');
  };

  render() {
    return (
      <div className="navbar">
        <nav>
          <p>DataBase Front: </p>
          <AddProd handleCRUDType={this.props.handleCRUDType} />
          <UserLogin onLogin={this.props.onLogin}
                     userLogStatus={this.props.userLogStatus}/>
        </nav>
      </div>
    );
  }
};

export default NavBar;
