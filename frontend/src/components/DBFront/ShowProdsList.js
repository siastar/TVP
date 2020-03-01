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

    const listedProducts = this.props.products;

    let showList = listedProducts.map((product) =>
      <SingleProd
        className='' /* bootstrap */
        product={product}
        key={product._id}//unique identifier
        userLogStatus={this.props.userLogStatus}
        handleCRUDType={this.props.handleCRUDType} />
    );

    return (
        
      <div className='d-flex flex-wrap showprodslist'> {showList} </div>
      // 'd-flex flex-wrap' bootstrap class 
    );
  }
};

export default ShowProdsList;
