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
  }

  render() {
    //console.log('zzz loginmodal props' ,  this.props);
    return (
      <div>
        <Button variant="primary" onClick={this.props.toggleLoginModal}>
          login modal button
        </Button>

        <Modal
          show={this.props.showLoginModal}
          onHide={this.props.toggleLoginModal}
          animation={true}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter Username and password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                       
            <Form> {/* LOGIN FORM */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
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
