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

import React, {
  Component
} from 'react';
import axios from 'axios';
import ShowProdsList from './ShowProdsList.js'

const getDataRoute = 'http://localhost:3000/products/getdata/'; //server side address TODO avoid hard coding
const deleteDataRoute = 'http://localhost:3000/products/deletedata/'; //server side address
const updateDataRoute = 'http://localhost:3000/products/updatedata/'
const postDataRoute = 'http://localhost:3000/products/createdata/';

class GetAllProds extends Component {

  constructor(props) {
    super(props)

    this.updateProdsList = this.updateProdsList.bind(this); //bound because it changes this.state
    this.deleteProd = this.deleteProd.bind(this); //bound because it is called within updateProdslist
    this.handleCRUDType = this.handleCRUDType.bind(this);

    this.state = {
      testProperty: 'test prop 0',
      compName: 'GetAllProds.js',
      products: []
    };
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

  deleteProd(_id) {
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
  updateProdsList(productToRemoveId) {
    // this.setState({ products: productToRemove
    // })
    console.log('parent received _id: ', productToRemoveId);
    console.log('this ', this);
    //
  };

  handleCRUDType(crudArgs) {

    switch (crudArgs.crudAction) {

      case 'CRUD_delete':
        console.log('deleting...',  crudArgs)
        this.deleteProd(crudArgs._id)
        break;

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
