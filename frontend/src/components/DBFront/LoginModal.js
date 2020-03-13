console.log("opening...");

import React, { Component } from "react";
//import Popup from "reactjs-popup";
import { Form, Button, Modal } from "react-bootstrap";

class LoginModal extends Component {

  componentDidMount() {
    console.log(" mounted...");
  };

    loginLogout(){
        console.log('this: ' , this)
        // switch (this.props.loginHandlers.userLogStatus){
        // case true:
        //     console.log(true);
        //     break;
        // case false:
        //     console.log(false);
        //     this.props.loginHandlers.toggleLoginModal
            
        //     break;
        // default:
        //     console.log('error');
        // };
    };
    
  render() {

      let loginLogout = 'test';
      let test = false
        switch (this.props.loginHandlers.userLogStatus){
        case true:
            console.log('is logged: ',  true);
            loginLogout = this.props.loginHandlers.onLogout;
            console.log('this is logged!!: ' , this)
            break;
        case false:
            console.log('is logged: ' , false);
            loginLogout = this.props.loginHandlers.toggleLoginModal
            console.log('this is not logged !!: ' , this)
            break;
        default:
            console.log('error');
        };
      
    return (
      <div>
        <Button
          variant="primary"
          onClick={loginLogout}
          /* onClick={this.props.loginHandlers.toggleLoginModal} */
        > {this.props.loginHandlers.loginButtonLabel} {/* toggles label login|logout */}
        </Button>
         <Modal
          show={this.props.loginHandlers.showLoginModal} /* toggles true|false */
          onHide={this.props.loginHandlers.toggleLoginModal}
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter Username and password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* LOGIN FORM */}
            <Form onSubmit={this.props.loginHandlers.onCredsSubmit}>
              {/*this.props.loginHandlers.onCredsSubmit */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Enter Username"
                  onChange={this.props.loginHandlers.onChangeUsername}
                  /* stores data in DBApp constant loginCreds */
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.props.loginHandlers.onChangePassword}
                  /* stores data in DBApp constant loginCreds */
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" value="Submit">
                Submit!
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggleLoginModal}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={this.props.toggleLoginModal}> */}
            {/*   Save Changes */}
            {/* </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
