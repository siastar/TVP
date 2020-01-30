console.log('...opening src/components/DBFront/SingleProd.js')

import React, {
  Component
} from 'react';

import axios from 'axios';
import Popup from "reactjs-popup";
import AddEditPopUpForm from './AddEditPopUpForm.js'

const deleteDataRoute = 'http://localhost:3000/products/deletedata/'; //server side address
const updateDataRoute = 'http://localhost:3000/products/updatedata/'; //server side address
// TODO: this links should not be hardcoded

class SingleProd extends Component {

  constructor(props) {
    super(props);

    //binding
    this.onEdit = this.onEdit.bind(this);
    this.onRemove = this.onRemove.bind(this);

    this.state = {
      fileName: 'SingleProd.js',
      product: []
    };
  };

  componentDidMount() {
      console.log(this.state.fileName, ' mounted');

  };

  componentWillUnmount() {
    console.log(this.state.fileName, ' unmounted');
  };

  onEdit(e) {
    console.log('edit button clicked');
    console.log('DB _id = ', this.props.product._id);
      e.preventDefault();
          
    };

  onRemove(e) {
    console.log('remove button clicked');
    console.log('DB _id = ', this.props.product._id);
    e.preventDefault();
      const itemToDelete = (deleteDataRoute + this.props.product._id);
      //gives Express server the link of item to delete
      //ref to backend/routes/productsRoute.js
      //it expects deletedata/:id where :id is the MongoDB object _id
    console.log('going to delete: ', itemToDelete); 
      axios.delete(itemToDelete)
          .then(res => {
              console.log('removed')
          })
          .catch(err => {
              console.log('error, cannot remove data: ', err)
          });
  };



    
  render() {
    console.log('SingleProd this.props.product:', this);
    return (
      <div>
        <hr/>
        <hr/>
          {/* <h6> rendered {this.state.fileName} </h6> */}
          <h6>id: {this.props.product._id}</h6>
          <h6>artist: {this.props.product.artist}</h6>
          <h6>title: {this.props.product.title}</h6>
          <h6>year: {this.props.product.year}</h6>

        <AddEditPopUpForm
          onClick={this.onEdit}/>
        
          <button
            onClick={this.onRemove}
          >remove
          </button>
      </div>
    );
  };
};

export default SingleProd;
