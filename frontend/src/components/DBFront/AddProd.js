console.log('opening...');

// about passing data back to parents:
// https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
// https://github.com/siastar/proptesting

import React, {  Component} from 'react';
import ProdPopUpForm from './ProdPopUpForm.js';

//import axios from 'axios';
//const postRoute = 'http://localhost:3000/products/createdata/';
//const putRoute = 'http://localhost:3000/products/updatedata/';
//TODO hardcoded links are no good !!!
//const currentRoute = '';

class AddProd extends Component {

  constructor(props) {
    super(props);

    //state  
    this.state = {
      //compName: 'AddProd.js',
      //testmessage: 'original test message',
      buttonlabel: '',
      //
      ////////////// product properties, TODO: wrap them in a separate object
      artist: '',
      title: '',
      year: '',
      price: '',
      frontcover: '',
      backcover: ''
      //////////////
    };
    //binding
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeFrontCover = this.onChangeFrontCover.bind(this);
    this.onChangeBackCover = this.onChangeBackCover.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  componentDidMount() {
    //console.log(this.state.compName, ' mounted');
    this.setState({
      //products: [], //products is the array of data coming from mongoDB
      product: {},
      //actiontype: this.props.actiontype
    });
  };

  onChangeArtist(e) {
    this.setState({
      artist: e.target.value
    });
  };

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

    const newProduct = {
      artist: this.state.artist,
      title: this.state.title,
      year: this.state.year,
      price: this.state.price,
      frontcover: this.state.frontcover,
      backcover: this.state.backcover
    };

    //notice that this is not going to modify the component state itself but only
    //creates a copy of the object product to POST or PUT to DB

    let crudAction = 'CRUD_create';
    let crudArgs = {
      newProduct: newProduct,
      crudAction: crudAction
    };

    console.log('...sending object to handleCRUDType: ', crudArgs);
    this.props.handleCRUDType(crudArgs);
    //callback function, send data (crudArgs) to parent
  };

  componentWillUnmount() {
    console.log('unmounting...');
  };

  render() {
    //console.log('this...', this);
    return (
      <div>

        <ProdPopUpForm
          product=''
          buttonlabel = 'Add Product'//prop routed down via DBFront 'Add Product' || 'Edit Product'
          onChangeArtist = {this.onChangeArtist}
          onChangeTitle = {this.onChangeTitle}
          onChangeYear = {this.onChangeYear}
          onChangePrice = {this.onChangePrice}
          onChangeFrontCover = {this.onChangeFrontCover}
          onChangeBackCover = {this.onChangeBackCover}
          onFormSubmit = {this.onFormSubmit}
        >
        </ProdPopUpForm>

        </div>
    );
  };
};

export default AddProd;
