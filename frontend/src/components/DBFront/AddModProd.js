console.log('...opening /src/components/DBFront/AddProd.js');

// this compononent receives product data and switches between creating
// a new product or updating an existing one 

import React, {  Component } from 'react';

import axios from 'axios';
import AddEditPopUpForm from './AddEditPopUpForm.js';
const createRoute = 'http://localhost:3000/products/createdata/';
const editRoute = 'http://localhost:3000/products/updatedata/';
//TODO hardcoded links are no good !!!
const currentRoute = '';

class AddModProd extends Component {

  constructor(props) {
    super(props);

    //binding
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeFrontCover = this.onChangeFrontCover.bind(this);
    this.onChangeBackCover = this.onChangeBackCover.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      compName: 'AddModProd.js',
        actiontype: '',
        buttonlabel: '',
        //actiontype comes as a prop from DBFront and once defined it switches
        //to the addProduct or editPorduct route so this component can be used in both cases
        //
        ////product properties, TODO wrap in a separate object
        artist: '',
        title: '',
        year: '',
        price: '',
        frontcover: '',
        backcover: ''
        ////
    };
  };

  componentDidMount() {
    console.log(this.state.compName, ' mounted');
    this.setState({
      products: [], //products is the array of data coming from mongoDB
      product: {}
      // actiontype: this.props.action, //comes from DBFront check if create or edit route
      // buttonlabel: this.props.btnlabel
    });

    // const action = this.props.action;
    // console.log('action to perform: ', action);

    // let buttonLabel = '';

    // switch (action) {

    //   case 'modprod':
    //     buttonLabel = 'Edit Product';
    //     break;
    //   case 'addprod':
    //     buttonLabel = 'Add Product';
    //     break;
    //   default:
    //     console.log('buttonLabel is undefined, we are going to crash quickly...');

    // };
      
    };

  componentWillUnmount() {
    console.log(this.state.compName, ' unmounted');
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

  onSubmit(e) {
    e.preventDefault();
    console.log('event:', e);
    const product = {
      artist: this.state.artist,
      title: this.state.title,
      year: this.state.year,
      price: this.state.price,
      frontcover: this.state.frontcover,
      backcover: this.state.backcover
    };

    console.log('product:', product);

    axios.post(createRoute, product)
      .then(res => {
        console.log('res.data', res.data)
      })
      .catch(err => {
        console.log('error, cannot post data: ', err)
      });

  
  };
  render() {
    console.log('**this** check before to go:', this.props);
    return (
      <div>
        <AddEditPopUpForm
            buttonlabel={this.props.btnlabel}//prop routed down via DBFront 'Add Product' or 'Edit Product'
            onChangeArtist={this.onChangeArtist}
            onChangeTitle={this.onChangeTitle}
            onChangeYear={this.onChangeYear}
            onChangePrice={this.onChangeProce}
            onChangeFrontCover={this.onChangeFrontCover}
            onChangeBackCover={this.onChangeBackCover}
          >
          </AddEditPopUpForm>

        </div>
    );
  };
};

export default AddModProd;
