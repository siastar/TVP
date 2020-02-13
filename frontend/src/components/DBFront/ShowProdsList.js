console.log('opening...');
//ShowProdList receives the array "this.props.products" then maps it returning a <SingleProd/>
//element for any item in the array.

import React, {
  Component
} from 'react';
import SingleProd from './SingleProd.js'

class ShowProdsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'ShowProdsList.js',
      //products: []
    };
  };

  componentDidMount() {
    console.log('unmounting...');

  }

  render() {
    const DbProducts = this.props.products;
    //console.log('DbProducts' , DbProducts);
    //console.log('this...' , this);
    //NOTE this is not the DB but the state of the parent component GetAllProds.js

    const showList = DbProducts.map((product) =>
      <div className="singleprod">
        <SingleProd
          key={product._id}
          product={product}
          handleCRUDType={this.props.handleCRUDType} />
      </div>
    );

    return (
      <div> {showList} </div>

    );
  }
};

export default ShowProdsList;
