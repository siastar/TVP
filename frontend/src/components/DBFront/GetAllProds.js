console.log('...opening');

import React, {  Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import ShowProdsList from './ShowProdsList.js'
import ProdPopUpForm from './ProdPopUpForm.js';
import AddProd from './AddProd.js'

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

    //binding   
    this.deleteProd = this.deleteProd.bind(this); //bound because it is called within updateProdslist
    this.handleCRUDType = this.handleCRUDType.bind(this);
  }

  componentDidMount() {

    console.log(this.state.compName, ' mounted...');

    console.log('...fetching DB data via axios');
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
          console.log('no items found, is DB empty?');
        };
      })

      .catch(err => {
        console.log('error fetching DB', err)
      });
  };

  addProd(newProduct) {
    console.log('addProd args...', newProduct);
    axios.post(postDataRoute, newProduct)
      .then(res => {
          console.log('product added to DB successfully');
          //now the problem is that newProduct does not contain the DB _id
          //because it is generated by the DB itself after the axios.post
          //this would not be a problem per se but it could eventually generate some issues
          //in the developement so I take care of it now
          //luckily the _id of the new product comes back automatically, nested in the
          //axios response "res.data.message.newdata._id", we need to grab and put it
          //in the state with the newProduct 
          const newProduct_id = res.data.message.newdata._id;
          console.log('new product _id: ' , newProduct_id);
          newProduct._id = newProduct_id
          console.log('newProduct with _id: ' , newProduct);
          
          //STATE UPDATER
          //clone the products array in the state
          let newProducts = [...this.state.products]; 
          //push new product object in clone array (avoid to directly manipulate state)
          newProducts.push(newProduct); 
          //update the state by replacing full products array
          this.setState({
           products: newProducts 
          })
          
          ///
          
      })
      .catch(err => {
          console.log('error occurred in addProd(newProduct): ', err);
      });
  };

  deleteProd(_id) { //called within handleCrudType receives the on removing product id
    console.log('...deleteProd Args...: ', _id);
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
        console.log('product removed from DB succesfully');
        //console.log(this.state.products);
        //now the product has been removed from DB put persists in the component state so is still displayed      
        //to update the state without reloading the page we could.
        let newProducts = []; //set a new empty array 
        this.state.products.forEach( //iterate the state products array, and copy any element with id  
          product => { //different from the deleted product id (_id), in the new empty array 
            if (product._id !== _id) //this will produce a copy of state.products, without the deleted product  
              newProducts.push(product)
          }) //last step is to the replace state.product with the new array (setState) 
        //console.log(newProducts);
        this.setState({
          products: newProducts
        })
      })

      .catch(err => {
        console.log('error, cannot remove data: ', err)
      });
  };

  editProd(crudArgs) {
      // console.log('axios.put editProd Args... ', (crudArgs));
      // console.log('axios.put crudArgs._id: ' , (crudArgs._id));
      // console.log('axios.put crudArgs.crudAction: ' , (crudArgs.crudAction));
      console.log('axios.put crudArgs.editedProduct: ' , (crudArgs.editedProduct));
      
      const axiosRoute = (updateDataRoute + crudArgs._id);
      console.log('axios.put route' , axiosRoute);

      axios.put(axiosRoute, crudArgs.editedProduct)
          .then( res => {
              console.log('axios.put response: ' , res);

              //STATE UPDATER
              //the edited product coming from crudArgs has no _id so first
              //give it the same _id he had before the editing
              crudArgs.editedProduct._id = crudArgs._id
              //console.log(crudArgs.editedProduct);
              
              let newProducts =[...this.state.products]; //clone state products array
              let index = newProducts.findIndex(item => item._id === crudArgs._id) // find in newProducts array the index of the element whose _id is crudArgs._id
              //console.log('index: ' , index);
              newProducts.splice(index, 1, crudArgs.editedProduct); // insert edited product with its _id in the newProducts array
              //console.log('newProducts:' , newProducts);
              this.setState({products: newProducts})
          })

      .catch(err => {
          console.log('axios.put error: : ', err)
      });

  };


  //TODO async/await
  handleCRUDType(crudArgs) { //receives object data defined by triggerCRUDAction in SingleProd.js
    console.log('handleCRUDType args: ', crudArgs); //the object looks like:                                                    
    switch (crudArgs.crudAction) { // crudArgs = {_id: "5e39f88e23a5b1412830572c", crudAction:"CRUD_delete"}                                          

      case 'CRUD_delete':
        console.log('deleting...', crudArgs);
        this.deleteProd(crudArgs._id); //calls deleteProd by passing it the product to delete id (which comes from)
        break; //the child SingleProd.js

      case 'CRUD_update':
        console.log('updating...', crudArgs);
        this.editProd(crudArgs);
        break;

      case 'CRUD_create': //receives object data defined by onFormSubmit in AddProd.js
        console.log('creating...', crudArgs); //the object looks like:
        this.addProd(crudArgs.newProduct); //crudArgs = {newProduct: {the, new, product,...}
        //            crudAction:"CRUD_create" }
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
            <h6> rendering {this.state.compName} </h6>
        </div>
        
        <div>
          <AddProd
            handleCRUDType={this.handleCRUDType}
          />
        </div>

        <div>
        {/* <SearchProd */}
        {/*   searchStuff={this.searchStuff}/> */}
        </div>
        
        <div>
          <hr/>
          <ShowProdsList
            products={this.state.products}
            handleCRUDType={this.handleCRUDType}
          />
          <hr/>
        </div>
      </div>
    );
  };
};

export default GetAllProds;
