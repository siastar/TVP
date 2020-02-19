console.log('opening...');
//ShowProdList receives the array "this.props.products" then maps it returning a <SingleProd/>
//element for any item in the array.

import React, {
  Component
} from 'react';
import Row from 'react-bootstrap/Row';

import SingleProd from './SingleProd.js'

class ShowProdsList extends Component {

  render() {

    const DbProducts = this.props.products;
    //console.log('DbProducts' , DbProducts);
    //console.log('this...' , this);
    //NOTE this is not the DB but the state of the parent component GetAllProds.js

    let showList = DbProducts.map((product) =>
      <SingleProd
          className='' /* bootstrap */
          key={product._id}
          product={product}
          handleCRUDType={this.props.handleCRUDType} />
    );

    return (
        
      <div className='d-flex flex-wrap showprodslist'> {showList} </div>
                  // 'd-flex flex-wrap' bootstrap
    );
      
  }
};

export default ShowProdsList;
