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

let adminButtons = '';
    if (this.props.userLogStatus == true) {
      adminButtons = <div>
              {/* ADD PRODUCT BUTTON */}
                  <AddProd handleCRUDType={this.props.handleCRUDType} />
                </div>
    } else {
      adminButtons = <div>not admin</div>
    }



        
    return (
      <div className="navbar">
        <nav>
          <p>DataBase Front: </p>

          <UserLogin
            onLogin={this.props.onLogin}
            userLogStatus={this.props.userLogStatus}/>

          <div>{adminButtons}</div>
        </nav>
      </div>
    );
  }
};

export default NavBar;
