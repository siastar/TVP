console.log("opening...");

import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Form, Button, Modal } from "react-bootstrap";

class UserLogin extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  // compName: ''
  // }
  // }

  componentDidMount() {
    console.log(" mounted...");
  }

    render() {

        //console.log('userLogin props xxxy' , this.props)
    let logLabel = "";
    if (this.props.userLogStatus === true) {
      logLabel = "Logout";
    } else {
      logLabel = "Login";
    }

    return (
      <div>
         <button onClick={this.props.onLogin}> {logLabel} </button>
      </div>
    );
  }
}

export default UserLogin;
