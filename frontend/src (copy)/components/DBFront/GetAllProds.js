console.log('...opening');

import React, {  Component } from 'react';
import axios from 'axios';
import ShowProdsList from './ShowProdsList.js'
// import Popup from "reactjs-popup";
// import AddProd from './AddProd.js'
// import ProdPopUpForm from './ProdPopUpForm.js';

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

    deleteProd(_id) {//called within handleCrudType receives the on removing product id
    console.log('...deleting product with id: ', _id);
    const prodToDelete = (deleteDataRoute + _id);
    //we build  the link of item to delete as expected by Express running server
    //something like http://localhost:3000/products/deletedata/5e28732b3931a2642f744d58
    //by combining deleteDataroute (http://localhost:3000/products/deletedata/)
    //with product Mongo DB :id 5e28732b3931a2642f744d58
    //refers to express delete method defined in backend/routes/productsRoute.js
    //it expects deletedata/:id where :id is the MongoDB object _id

    console.log('...starting axios.delete for: ', prodToDelete);
    axios.delete(prodToDelete) //axios physically delete the product from DB
      .then(res => {
          console.log('product removed from DB');
          console.log(this.state.products);
    //now the product has been removed from DB put persists in the component state so is still displayed      
                                                        //to update the state without reloading the page we could.
          let newproducts = [];                         //set a new empty array 
          this.state.products.forEach(                  //iterate the state products array, and copy any element with id  
              product => {                              //different from the deleted product id (_id), in the new empty array 
                  if (product._id !== _id)              //this will produce a copy of state.products, without the deleted product  
                      newproducts.push(product)})       //last step is to the replace state.product with the new array (setState) 
          console.log('-----',  newproducts);
          this.setState({products: newproducts})
      })
            
      .catch(err => {
        console.log('error, cannot remove data: ', err)
      });
  };

    editProd(_id) {
        console.log('this within editprod:' , this)
    console.log('...editing product with id: ', _id);
    const prodToUpdate = (updateDataRoute + _id);
    //1) use _id to locate and create a copy of the product to edit from this.state.products
        let prodToMod = this.state.products.find(product => product._id == _id);
        console.log('prodToMod: ',prodToMod);
    //2) open popup form which fields contain the prodToMod data    
    
    };

    //let productToextract = productsArray.find(item => item.id == provided_id);



    
    //TODO async/await
    handleCRUDType(crudArgs) {                   //receives object data defined by triggerCRUDAction in SingleProd.js
                                                 //the object looks like:                                                    
    switch (crudArgs.crudAction) {               // crudArgs = {_id: "5e39f88e23a5b1412830572c",                                                  
                                                 //             crudAction:"CRUD_delete"}                                          
      case 'CRUD_delete':
        console.log('deleting...',  crudArgs);
        this.deleteProd(crudArgs._id);            //calls deleteProd by passing it the product to delete id (which comes from)
        break;                                   //the child SingleProd.js

      case 'CRUD_update':
        console.log('updating...',  crudArgs);
        this.editProd(crudArgs._id);
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
