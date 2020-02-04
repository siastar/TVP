//process description

// GetAllProds.js retrieves data from DB and use them to set a products variable
// in its own state.

// this.setState({ products: fetchedData });

// products in state will be "single source of truth" for all the children
// this is necessary (at least it seems ?) because the variation on DB will be not
// shown on page until it will be reloaded, so to visaualize them immediately we
// need to modify the state and the DB at the same time.

// ShowProdsList.js receives 'products' array via props and maps it, returning a list
// of single elements (SingleProd.js) with the products data.
// Remember that data we display in this moment are NOT the DB but a copy stored in the
// parent state (GetAllProds.js).

// SingleProd.js contains the single product data and 2 options: Edit and Remove
//
// onRemove (CRUD Delete)
// there are 2 things to do:
// 1) Actually delete the product from the DB (e.g. via axios.delete)
// 2) Update the GetAllProduct.js state so that the change is reflected in DOM without refresh
// in order to update GetAllProds state, removeProduct() method is passed down via props to 
// SingleProd.js and it's triggered when a product is removed.
// note that:
// GetAllProds passes down removeProduct method to ShowProdsList by
//
// <ShowProdsList
//            products={this.state.products}
//            removeproduct={this.removeProduct}/>
//
// then ShowProdsList passes it down again to SingleProd by
//
// <SingleProd
//    key={product._id}
//   product={product}
//   removeproduct={this.props.removeproduct}
// 

console.log('...opening');

import React, { Component } from 'react';
import axios from 'axios';
import ShowProdsList from './ShowProdsList.js'

const getDataRoute = 'http://localhost:3000/products/getdata/'; //server side address

class GetAllProds extends Component {

  constructor(props) {
    super(props)

    this.state = {
      compName: 'GetAllProds.js',
      products: []

    };
  };

    componentDidMount() {
      
        console.log(this.state.compName , ' mounted...');
        //console.log('received props: ', this.props)

        axios.get(getDataRoute)
          .then(res => {
              const fetchedData = res.data.allProds;
              console.log('DB fetched data: ', fetchedData);
              //allProds is defined in backend ProductsRoute.js and comes in via axios 
              if (fetchedData.length > 0){ //check if there is at least 1 element in the array
                  this.setState({
                      products: fetchedData
                      //fetched data are pushed into the state array "products"
                      //now state.products contains the DB data
                  });
                  
              }
              else {
                  console.log('no items found, maybe DB is empty?');                 
              };
          })
      
          .catch(err => {
              console.log('error fetching DB' , err)
          });
       };

    componentWillUnmount() {
    console.log(this.state.compName, ' unmounted');
   };

    removeProduct(value){
         // this.setState({ products: productToRemove
         // })
        console.log('removeProduct Parent reached' , value);
    }; 
    
    render() {
        console.log(this);
        return (
      <div>
        <div>
            <h6> rendered {this.state.compName} </h6>
        </div>
        
        <div>
          <hr/>
          <ShowProdsList
            products={this.state.products}
            removeProduct={this.removeProduct}/>
            {/* pass the products list and the method to remove products,  */}
            {/* as props to its child  ShowProdsList */}
          <hr/>
        </div>
      </div>
    );
  };
};

export default GetAllProds;
