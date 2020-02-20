console.log('opening...');

import React, {
  Component
} from 'react';

import Popup from 'reactjs-popup';
import { Button, Container, Card, Grid, Row, Col, Image, ListGroup } from 'react-bootstrap'; 

//import Link from 'react-router-dom';
import EditProd from './EditProd.js';
import DelProd from './DelProd.js';

class SingleProd extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     compName: 'SingleProd.js',
  //     errorToHandle: false,
  //     product: {}
  //   };
  // }

  componentDidMount() {
    console.log('mounted');
  };

  componentWillUnmount() {
    console.log('unmounted');
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
                <ListGroup.Item> {this.props.product.artist}</ListGroup.Item>
                <ListGroup.Item> {this.props.product.title}</ListGroup.Item>
                <ListGroup.Item> € {this.props.product.price}</ListGroup.Item>
              </ListGroup>
              
              {/* EDIT BUTTON */}
              <EditProd handleCRUDType={this.props.handleCRUDType} product={this.props.product} />

              {/* REMOVE BUTTON */}
              <DelProd handleCRUDType={this.props.handleCRUDType} product={this.props.product} />
              
            </Card.Body>
          </Card>
    );
  };
};

export default SingleProd;

