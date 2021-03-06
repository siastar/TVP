console.log('opening...');

import React, {
  Component
} from 'react';

import Popup from 'reactjs-popup';
import {
  Card,
  ListGroup
} from 'react-bootstrap';

import EditProd from './EditProd.js';
import DelProd from './DelProd.js';

class SingleProd extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       adminButtons: false
  //   };
  // }

  componentDidMount() {
    console.log('mounted');
  };

  componentWillUnmount() {
    console.log('unmounted');
  };

  render() {

    let adminButtons = '';
    if (this.props.userLogStatus == true) {
      adminButtons = <div>
              {/* EDIT BUTTON */}
                       <EditProd handleCRUDType = {this.props.handleCRUDType}
                                 product = {this.props.product}
                                 productHandlers = {this.props.productHandlers}
                       />
              {/* REMOVE BUTTON */}
                       <DelProd handleCRUDType = {this.props.handleCRUDType}
                                product={this.props.product}
                       />
                    </div>
    } else {
      adminButtons = <div>not admin</div>
    }

    return (
        //'react-bootstrap'
      <Card className='p-2 singleprod'> 
            <Card.Img variant="top" src="../../../testimg/testcover.jpeg" />
            <Card.Body>
                <ListGroup variant="flush">
                <ListGroup.Item> {this.props.product.artist}</ListGroup.Item>
                <ListGroup.Item> {this.props.product.title}</ListGroup.Item>
                <ListGroup.Item> € {this.props.product.price}</ListGroup.Item>
              </ListGroup>
              <div> {adminButtons} </div>
            </Card.Body>
      </Card>
    );
  };
};

export default SingleProd;
