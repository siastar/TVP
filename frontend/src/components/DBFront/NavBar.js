console.log("opening...");
//TODO why class ?

import React, { Component } from "react";
import AddProd from "./AddProd.js";
import LoginModal from "./LoginModal.js";

import UserLogin from "./UserLogin.js";
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
    console.log("mounted...");
  }

    render() {
        console.log('props zzzy' , this.props.loginHandlers);
    let adminButtons = "";
    if (this.props.loginHandlers.userLogStatus == true) {
      adminButtons = (
        <div>
          {/* ADD PRODUCT BUTTON */}
          <AddProd
            handleCRUDType={this.props.handleCRUDType}
            productHandlers={this.props.productHandlers}
          />
        </div>
      );
    } else {
      adminButtons = <div>not admin</div>;
    }

    //console.log('zzzx  props' , this.props)

    // let showLoginModal = false;
    // if (this.props.showLoginModal === true) {
    //   showLoginModal = (
    //     <div>
    //       <h1>pressed a button?</h1>
    //     </div>
    //   );
    // } else {
    //   showLoginModal = null;
    // }

    return (
      <div className="navbar">
        <nav>
          <p>DataBase Front: </p>

          <UserLogin
            onLogin={this.props.loginHandlers.onLogin}
            userLogStatus={this.props.loginHandlers.userLogStatus}
          />

          <div>{adminButtons}</div>


          <div>
            <p>test2</p>
            <LoginModal
              /* toggleLoginModal={this.props.loginHandlers.toggleLoginModal} */
              /* showLoginModal={this.props.loginHandlers.showLoginModal} */
              /* onCredsSubmit={this.props.loginHandlers.onCredsSubmit} */
              loginHandlers={this.props.loginHandlers}
              
            />
            {/* true|false */}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
