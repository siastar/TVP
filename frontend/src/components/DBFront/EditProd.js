console.log('opening...');

import React, { Component } from 'react';
import ProdPopUpForm from './ProdPopUpForm.js';

//const editedProduct = {};

class EditProd extends Component {

    componentDidMount() {
        console.log('did mount');
    };

  componentWillUnmount() {
    console.log('unmounting...');
  };

    render() {

      //this.props.productHandlers.getProductToEdit(this.props.product);

      let fieldIsRequired = false;
      let buttonLabel = 'Edit';
      let buttonStyle = 'btn btn-warning btn-sm'

      return (
          
        <div>
            <ProdPopUpForm
              product = {this.props.product}
              productHandlers = {this.props.productHandlers}
              fieldIsRequired = {fieldIsRequired}
              buttonLabel = {buttonLabel}//prop routed down via DBFront 'Add New' || 'Edit'
              buttonStyle = {buttonStyle}
            >
            </ProdPopUpForm>
        </div>
    );
  };
};

export default EditProd;
