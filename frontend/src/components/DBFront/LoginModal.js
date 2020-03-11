console.log("opening...");

import React, { Component } from "react";
//import Popup from "reactjs-popup";
import { Form, Button, Modal } from "react-bootstrap";

class LoginModal extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  // compName: ''
  // }
  // }

  componentDidMount() {
    console.log(" mounted...");
  };

    testSubmit(event){
        event.preventDefault();
        console.log('zzzy event target' , event.target)
        };

    render() {
    //console.log("zzz loginmodal props", this.props);
    return (
      <div>
        <Button
          variant="primary"
          onClick={this.props.loginHandlers.toggleLoginModal}
        >
          login modal button
        </Button>

        <Modal
          show={this.props.loginHandlers.showLoginModal} /* true|false */
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
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
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
