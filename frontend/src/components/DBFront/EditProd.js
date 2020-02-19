console.log('opening...');

// about passing data back to parents:
// https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
// https://github.com/siastar/proptesting

import React, { Component } from 'react';
import ProdPopUpForm from './ProdPopUpForm.js';

//import axios from 'axios';
//const postRoute = 'http://localhost:3000/products/createdata/';
//const putRoute = 'http://localhost:3000/products/updatedata/';
//TODO hardcoded links are no good !!!
//const currentRoute = '';

class EditProd extends Component {

  constructor(props) {
    super(props);

    //binding
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeFrontCover = this.onChangeFrontCover.bind(this);
    this.onChangeBackCover = this.onChangeBackCover.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);

    //state  
    this.state = {
      compName: 'EditProd.js',
      testmessage: '',
      //
      ////////////// product properties, TODO: wrap them in a separate object
      prod_id:'',
      artist: '',
      title: '',
      year: '',
      price: '',
      frontcover: '',
      backcover: ''
      //////////////
    
    };
  };

    componentDidMount() {
              
      this.setState({
          artist: this.props.product.artist,
          title: this.props.product.title,
          year: this.props.product.year,
          price: this.props.product.price,
          frontcover: this.props.product.frontcover,
          backcover: this.props.product.backcover,
      });
        
          
  };

  componentWillUnmount() {
    console.log('unmounting...');
  };

  onChangeArtist(e) {
    this.setState({
      artist: e.target.value
    });
  };

  // onChangeArtist(e) {
  //    this.setState(prevState => ({
  // product: {
  //   ...prevState.product,
  //   artist: e.target.value
  // }}));   
  // };
    
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  };

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  };

  onChangeFrontCover(e) {
    this.setState({
      frontcover: e.target.value
    });
  };

  onChangeBackCover(e) {
    this.setState({
      backcover: e.target.value
    });
  };

  onFormSubmit(event) {
    event.preventDefault();
    console.log('event.target: ', event.target);
      
      const editedProduct = {
      artist: this.state.artist,
      title: this.state.title,
      year: this.state.year,
      price: this.state.price,
      frontcover: this.state.frontcover,
      backcover: this.state.backcover
    };
      let crudAction = 'CRUD_update';
      let target_id = this.props.product._id;

      let crudArgs = {
          editedProduct: editedProduct,
          crudAction: crudAction,
          _id: target_id
      }
      
      console.log('ready to delivery object:', crudArgs);

      this.props.handleCRUDType(crudArgs);
     
      //this.props.handleCRUDType(crudArgs);

  };

  render() {
    //console.log('this...', this);
    return (
        <div>
          <div>
            <ProdPopUpForm
              product={this.props.product}
              buttonlabel='Edit Product'
              onChangeArtist={this.onChangeArtist}
              onChangeTitle={this.onChangeTitle}
              onChangeYear={this.onChangeYear}
              onChangePrice={this.onChangePrice}
              onChangeFrontCover={this.onChangeFrontCover}
              onChangeBackCover={this.onChangeBackCover}
              onFormSubmit={this.onFormSubmit}>
            </ProdPopUpForm>
          </div>

        </div>
    );
  };
};

export default EditProd;
