console.log('...opening')
//ShowProdList receives the array "this.props.products" then maps it returning a <SingleProd/>
//element for any item in the array.

import React, { Component } from 'react';
import SingleProd from './SingleProd.js'

class ShowProdsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        compName: 'ShowProdsList.js',
        products: []
    };
  };

    componentDidMount(){
        console.log(this.state.compName , ' mounted');
        
    }
    
  render() {
      const DbProducts = this.props.products;
      console.log('DbProducts' , DbProducts);
      console.log(this);
      //NOTE this is not the DB but the state of the parent component GetAllProds.js

      const showList = DbProducts.map( (product) => 
          <SingleProd
             key={product._id}
             product={product}
             deleteProd={this.props.deleteProd}
            updateProdsList={this.props.updateProdsList}
            handleCRUDType={this.props.handleCRUDType}
          />
      );
      
      return (
        <div>
           <h6> rendered {this.state.compName} </h6>
          <hr/>
          <div>
            {showList}
          </div>
        </div>
      );
  }
};

export default ShowProdsList;
