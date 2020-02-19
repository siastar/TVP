console.log('opening...');

import React, {
  Component
} from 'react';

import Popup from 'reactjs-popup';
import { Button, Container, Card, Grid, Row, Col, Image, ListGroup } from 'react-bootstrap'; 

//import Link from 'react-router-dom';
import EditProd from './EditProd.js';

class SingleProd extends Component {

  constructor(props) {

    super(props);

    this.triggerCRUDAction = this.triggerCRUDAction.bind(this)

    this.state = {
      compName: 'SingleProd.js',
      errorToHandle: false,
      product: {}
    };
  }

  // componentDidMount() {
  //   console.log(this.state.compName, ' Did Mount');
  // };

  // when button is pressed triggerCRUDAction calls handleCRUDtype in the
  // parent GetAllProds.js by passing it an object (actionArgs) which containes
  // 
  // product _id value grabbed from the state
  // clicked button value (which in the specific defines what kind of CRUD operation we need)
  // retrieved via actionArgs.target.value

  triggerCRUDAction(event) { //activated via button click, receives the                                              
    this.props.handleCRUDType( //"event object itself" as argument as argument, 
      { //then calls parent's function passing it a new object  
        _id: this.props.product._id, //argument built with 
        crudAction: event.target.value //1) the product _id, grabbed from the
      } //   component's state,  
    ) //2) the button value grabbed
  }; //in the event object properties 

  componentWillUnmount() {
    console.log('unmounting...');
  };

  render() {
    console.log('SingleProd this:', this);
    //const testValue = 'testValue';
    return (

          <Card className='p-2 singleprod'> 
            <Card.Img variant="top" src="../../../testimg/testcover.jpeg" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}

              <ListGroup variant="flush">
                <ListGroup.Item> artist: {this.props.product.artist}</ListGroup.Item>
                <ListGroup.Item> title: {this.props.product.title}</ListGroup.Item>
                <ListGroup.Item> price: {this.props.product.price}</ListGroup.Item>
              </ListGroup>

              {/* EDIT BUTTON */}
              <EditProd handleCRUDType={this.props.handleCRUDType} product={this.props.product} />

              {/* REMOVE BUTTON */}
              <button onClick={ (e)=> { //e stays per DOM event (click press key hoover etc)
                e.preventDefault();
                this.triggerCRUDAction(e);//calls function by sending the event e as argument
                console.log('event.target: ' , e.target);
                // e.target returns <button value="CRUD_delete"> an generally speaking
                  // every element's attribute value
                  }}
                  value='CRUD_delete' //returned by e.target.value, specifies which action will be performed (delete in this case)
                  > Remove
                </button>
            </Card.Body>
          </Card>
    );
  };
};

export default SingleProd;

