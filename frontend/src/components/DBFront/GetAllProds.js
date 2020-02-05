console.log('...opening');

import React, {  Component } from 'react';
import axios from 'axios';
import ShowProdsList from './ShowProdsList.js'

//server side addresses TODO avoid hard coding
const getDataRoute = 'http://localhost:3000/products/getdata/';
const deleteDataRoute = 'http://localhost:3000/products/deletedata/';
const updateDataRoute = 'http://localhost:3000/products/updatedata/';
const postDataRoute = 'http://localhost:3000/products/createdata/';

class GetAllProds extends Component {

  constructor(props) {
    super(props)

    this.state = {
      testProperty: 'test prop 0',
      compName: 'GetAllProds.js',
      products: []
    };
      
    //this.updateProdsList = this.updateProdsList.bind(this); //bound because it changes this.state
    this.deleteProd = this.deleteProd.bind(this); //bound because it is called within updateProdslist
    this.handleCRUDType = this.handleCRUDType.bind(this);
  }

  componentDidMount() {

    console.log(this.state.compName, ' mounted...');
    //console.log('received props: ', this.props)

    axios.get(getDataRoute)
      .then(res => {
        const fetchedData = res.data.allProds;
        console.log('DB fetched data: ', fetchedData);
        //allProds is defined in backend ProductsRoute.js and comes in via axios 
        if (fetchedData.length > 0) { //check if there is at least 1 element in the array
          this.setState({
            products: fetchedData
            //fetched data are pushed into the state array "products"
            //now state.products contains the DB data
          });

        } else {
          console.log('no items found, maybe DB is empty?');
        };
      })

      .catch(err => {
        console.log('error fetching DB', err)
      });
  };

  deleteProd(_id) { //called by 
    console.log('...removing item ', _id);
    const prodToDelete = (deleteDataRoute + _id);
    //returns the link of item to delete as expected by Express running server
    //something like http://localhost:3000/products/deletedata/5e28732b3931a2642f744d58
    //by combining deleteDataroute http://localhost:3000/products/deletedata/
    //with product Mongo DB :id 5e28732b3931a2642f744d58
    //refers to express delete method defined in  backend/routes/productsRoute.js
    //it expects deletedata/:id where :id is the MongoDB object _id
    console.log('...starting axios.delete for: ', prodToDelete);
    axios.delete(prodToDelete)
      .then(res => {
          console.log('product removed from DB');
          console.log(this.state.products);
          //this.setState({products: this.state.products.filter( (product) => {

          let newproducts = [];

          this.state.products.forEach(
              product => {
                  if (product._id !== _id)
                      newproducts.push(product)})
          console.log('-----',  newproducts);
          this.setState({products: newproducts})
      })
            
      .catch(err => {
        console.log('error, cannot remove data: ', err)
      });
  };

  //this function manipulates the state so it MUST be bound in the constructor
  // updateProdsList(productToRemoveId) {
  //   // this.setState({ products: productToRemove
  //   // })
  //   console.log('parent received _id: ', productToRemoveId);
  //   console.log('this ', this);
  //   //
    // };
    
    //TODO async/await
    handleCRUDType(crudArgs) {                   //receives object data defined by triggerCRUDAction in SingleProd.js
                                                 //the object looks like:                                                    
    switch (crudArgs.crudAction) {               // crudArgs = {_id: "5e39f88e23a5b1412830572c",                                                  
                                                 //             crudAction:"CRUD_delete"}                                          
      case 'CRUD_delete':
        console.log('deleting...',  crudArgs)
        this.deleteProd(crudArgs._id)            //calls deleteProd by passing it the product to delete id (which comes from)
        break;                                   //the child SingleProd.js

      default:
        break;
    }
  };

  componentWillUnmount() {
    console.log(this.state.compName, ' unmounted');
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
            updateProdsList={this.updateProdsList}
            handleCRUDType={this.handleCRUDType}
            deleteProd={this.deleteProd}
          />
          
            {/* pass the products list and the method to remove products,  */}
            {/* as props to its child  ShowProdsList */}
          <hr/>
        </div>
      </div>
    );
  };
};

export default GetAllProds;
