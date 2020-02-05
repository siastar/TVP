console.log('...opening');


// about passing data back to parents:
// https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
// https://github.com/siastar/proptesting

import React, {  Component} from 'react';

import axios from 'axios';
import ProdPopUpForm from './ProdPopUpForm.js';
const postRoute = 'http://localhost:3000/products/createdata/';
const putRoute = 'http://localhost:3000/products/updatedata/';
//TODO hardcoded links are no good !!!
const currentRoute = '';

class AddProd extends Component {

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

    //state  
    this.state = {
      compName: 'AddProd.js',
      testmessage: 'original test message',
      //actiontype: '',
      buttonlabel: '',
      //actiontype comes as a prop from DBFront and once defined it switches
      //to the addProduct or editPorduct route so this component can be used in both cases
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
  };

  componentDidMount() {
    console.log(this.state.compName, ' mounted');
    this.setState({
      products: [], //products is the array of data coming from mongoDB
      product: {}, 
      //actiontype: this.props.actiontype
    });
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

  onFormSubmit(e) {
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
    //notice that this is not going to modify the component state itself but only
    //creates a copy of the object product to POST or PUT to DB
    console.log('product after submit:', product);

    console.log('adding product...')
       
        axios.post(postRoute, product)
          .then(res => {
            console.log('res.data', res.data)
          })
          .catch(err => {
            console.log('error, cannot post data: ', err)
          });
  };

  render() {
    console.log('this...', this);
    return (
      <div>
        <ProdPopUpForm
          product=''
            buttonlabel = {this.props.buttonlabel}//prop routed down via DBFront 'Add Product' || 'Edit Product'
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
