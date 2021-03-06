console.log("opening...");

import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar.js";
import ShowProdsList from "./ShowProdsList.js";
import AddProd from "./AddProd.js";
import Button from "react-bootstrap/Button";

const handledProduct = {}; //temporarily stores the product info during creation or update
const loginCreds = {}; //temporarily stores admin user credentials during login

const getDataRoute = "http://localhost:3000/products/getdata/";
const deleteDataRoute = "http://localhost:3000/products/deletedata/";
const updateDataRoute = "http://localhost:3000/products/updatedata/";
const postDataRoute = "http://localhost:3000/products/createdata/";

const logUsersRoute = "http://localhost:3000/users/logusers";

class DBApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //testProperty: 'test prop 0',
      //compName: 'GetAllProds.js',
      products: [],
      user: {},
      userLogStatus: false,
      showLoginModal: false,
      loginButtonLabel: "login"
      //testProp: false
    };

    /////binding CRUD methods
    this.deleteProd = this.deleteProd.bind(this); //bound because it is called within updateProdslist
    this.handleCRUDType = this.handleCRUDType.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    ////binding login methods
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.onCredsSubmit = this.onCredsSubmit.bind(this);
  }

  componentDidMount() {
    console.log("...fetching DB data via axios");
    axios
      .get(getDataRoute)
      .then(res => {
        const fetchedData = res.data.allProds;
        console.log("DB fetched data: ", fetchedData);
        //allProds is defined in backend ProductsRoute.js and comes in via axios
        if (fetchedData.length > 0) {
          //check if there is at least 1 element in the array
          this.setState({
            products: fetchedData
            //fetched data are pushed into the state array 'products'
            //now state.products contains the DB data
          });
        } else {
          console.log("no items found, is DB empty?");
        }
      })

      .catch(err => {
        console.log("error fetching DB", err);
      });
  }

  addProd(newProduct) {
    axios
      .post(postDataRoute, newProduct)
      .then(res => {
        console.log("response login", res.data);
        let justAddedProduct = res.data.message.newdata;
        //added product returns in axios response nested in res.data
        //STATE UPDATER
        //clone the products array in the state
        let newProducts = [...this.state.products];
        //push justAddedProduct in products clone array (avoid to directly manipulate state)
        newProducts.push(justAddedProduct);
        //update the state by replacing full products array
        this.setState({
          products: newProducts
        });

        Object.keys(newProduct).forEach(function(key) {
          delete newProduct[key];
        });
        Object.keys(handledProduct).forEach(function(key) {
          delete handledProduct[key];
        });
        //reset newProduct and handledProduct by removing all their properties
      })
      .catch(err => {
        console.log("error occurred in addProd", newProduct, err);
      });
  }

  onAddSubmit(event) {
    event.preventDefault();

    let crudAction = "CRUD_create";
    let crudArgs = {
      handledProduct: handledProduct,
      crudAction: crudAction
    };
    this.handleCRUDType(crudArgs);
    //callback function, send data (crudArgs) to parent
  }

  editProd(crudArgs) {
    const axiosRoute = updateDataRoute + crudArgs.target_id;
    ////crudArgs.handledProduct is an object made of edited properties with edited values
    axios
      .put(axiosRoute, crudArgs.handledProduct)
      .then(res => {
        //// STATE UPDATER
        //// to update state we need to update the relative object in the products array

        const targetProduct = res.data.message.updated;
        //// res.data.message.updated comes from the server after update
        //// and returns the object as was before the update

        const editedProperties = Object.keys(crudArgs.handledProduct);
        //// returns an array made of edited properties name, like [ 'artist', 'title' , etc]

        editedProperties.forEach(propertyName => {
          targetProduct[propertyName] = crudArgs.handledProduct[propertyName];
        });
        ////for each edited property copy the new value in the target object

        let newProducts = [...this.state.products];
        //// clone products array in state
        let index = newProducts.findIndex(
          item => item._id === crudArgs.target_id
        );
        //// find in newProducts array the index of the element whose _id is crudArgs._id
        newProducts.splice(index, 1, targetProduct);
        //// replace edited product in the newProducts array

        this.setState({
          products: newProducts
        });

        Object.keys(crudArgs).forEach(key => {
          delete crudArgs[key];
        });
        Object.keys(handledProduct).forEach(key => {
          delete handledProduct[key];
        });
        //reset crudArgs and handledProduct by removing all their properties
      })

      .catch(err => {
        console.log("axios.put error: : ", err);
      });
  }

  onEditSubmit(event, productToEdit) {
    event.preventDefault();

    let crudAction = "CRUD_update";
    let crudArgs = {
      crudAction: crudAction,
      //type of operation (Update/PUT)
      target_id: productToEdit._id,
      //_id of the product to update
      handledProduct: handledProduct
      //data to update in the product
    };

    this.handleCRUDType(crudArgs);
  }

  deleteProd(_id) {
    //called within handleCrudType receives the on removing product id
    const prodToDelete = deleteDataRoute + _id;
    //we build  the link of item to delete as expected by Express running server
    //something like http://localhost:3000/products/deletedata/5e28732b3931a2642f744d58
    //by combining deleteDataroute (http://localhost:3000/products/deletedata/)
    //with product Mongo DB e.g.:id 5e28732b3931a2642f744d58
    //refers to express delete method defined in backend/routes/productsRoute.js
    //it expects deletedata/:id where :id is the MongoDB object _id

    //console.log('...starting axios.delete for: ', prodToDelete);
    axios
      .delete(prodToDelete) //axios physically delete the product from DB
      .then(res => {
        console.log("product removed from DB succesfully");
        //now the product has been removed from DB put persists in the component state so is still displayed
        //to update the state without reloading the page we could.
        let newproducts = []; //set a new empty array
        this.state.products.forEach(
          //iterate the state products array, and copy any element with id
          product => {
            //different from the deleted product id (_id), in the new empty array
            if (product._id !== _id)
              //this will produce a copy of state.products, without the deleted product
              newproducts.push(product);
          }
        ); //last step is to the replace state.product with the new array (setState)
        //console.log(newproducts);
        this.setState({
          products: newproducts
        });
        //reset _id
        _id = null;
      })

      .catch(err => {
        console.log("error, cannot remove data: ", err);
      });
  }

  //TODO async/await
  handleCRUDType(crudArgs) {
    //receives object data defined by triggerCRUDAction in SingleProd.js
    switch (
      crudArgs.crudAction // e.g. crudArgs = {_id: '5e39f88e23a5b1412830572c', crudAction:'CRUD_delete'}
    ) {
      case "CRUD_delete":
        console.log("deleting...", crudArgs);
        this.deleteProd(crudArgs._id); //calls deleteProd by passing it the product to delete id (which comes from)
        break; //the child SingleProd.js

      case "CRUD_update":
        console.log("updating...", crudArgs);
        this.editProd(crudArgs);
        break;

      case "CRUD_create": //receives object data defined by onFormSubmit in AddProd.js
        console.log("creating...", crudArgs); //the object looks like:
        this.addProd(crudArgs.handledProduct); //crudArgs = {newProduct: {the, new, product,...}
        //            crudAction:'CRUD_create' }
        break;

      default:
        console.log("not CRUD operation...");
        break;
    }
  }

  //////////////////////////////////////////////////////////////////////
  // HANDLERS
  /////////////////////////////////////////////////////////////////////

  ////LOGIN HANDLERS

  toggleLoginModal() {
    //console.log('zzzx login modal...');

    if (!this.state.showLoginModal) {
      this.setState({
        showLoginModal: true
      });
      //console.log('zzzx state', this.state);
    } else {
      this.setState({
        showLoginModal: false
      });
      //console.log('zzzx state', this.state);
    }
  }

  onChangeUsername(e) {
    loginCreds.username = e.target.value;
    //console.log('logincreds', loginCreds);
  }

  onChangePassword(e) {
    loginCreds.password = e.target.value;
    //console.log('logincreds', loginCreds);
  }

  onCredsSubmit(event) {
    event.preventDefault();
    //console.log('login credentials', loginCreds);
    //console.log('username: ', loginCreds.username);
    //console.log('password: ', loginCreds.password);
    //console.log('looking for user');
    ////logUserRoute='http://localhost:3000/users/logusers'
    axios
      .get(logUsersRoute, {
        params: {
          username: loginCreds.username,
          password: loginCreds.password

          //// send query parameters (username and password) to express.
          //// parameters are accessible via req.query (in this case in UserRouter.js)
          //// https://flaviocopes.com/node-axios/
          //// UserRoutes.js checks if credentials are valid or not and returns
          //// if not valid: invalid credentials message
          //// if correct
        }
      })
      .then(res => {
        console.log("res", res);
        //console.log('this:' , this);
        this.onLogin(res.data);
      })
      .catch(err => {
        console.log("error: : ", err);
      });
  }

  onLogin(loggingUser) {
    ////logginguUser=res.data
    console.log("logging in...");
    console.log(loggingUser.isAuthenticated);

    switch (loggingUser.isAuthenticated) {
      case true:
        console.log("authenticated: ", true);
        this.setState({
          showLoginModal: false,
          userLogStatus: true,
          user: loggingUser.user,
          loginButtonLabel: "logout"
        });
        //// close login modal
        //// provide user admin tools
        //// stores logged user info in the state
        //// TODO remove user password from the state
        console.log("state: ", this.state);
        break;
      case false:
        console.log("authenticated: ", false);
        break;
      default:
        console.log("error");
        break;
    }
  }

  onLogout() {
      console.log("logging out...");
        this.setState({
          userLogStatus: false,
          user: {},
          loginButtonLabel: "login"
        });
      
  };

  //toggleLoginButton() {}

  ////PRODUCT HANDLERS

  onChangeArtist(e) {
    handledProduct.artist = e.target.value;
  }

  onChangeTitle(e) {
    handledProduct.title = e.target.value;
  }

  onChangeYear(e) {
    handledProduct.year = e.target.value;
  }

  onChangePrice(e) {
    handledProduct.price = e.target.value;
  }

  onChangeFrontCover(e) {
    handledProduct.frontcover = e.target.value;
  }

  onChangeBackCover(e) {
    handledProduct.backcover = e.target.value;
  }

  //////////////////////////////////////////////////////////////////////
  // end of handlers
  /////////////////////////////////////////////////////////////////////

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    //pack the handlers in an object to send down as a single prop
    const productHandlers = {
      onAddSubmit: this.onAddSubmit,
      onEditSubmit: this.onEditSubmit,
      onChangeArtist: this.onChangeArtist,
      onChangeTitle: this.onChangeTitle,
      onChangeYear: this.onChangeYear,
      onChangePrice: this.onChangePrice,
      onChangeFrontCover: this.onChangeFrontCover,
      onChangeBackCover: this.onChangeBackCover
    };
    // pack handlers for login to send down as single prop
    const loginHandlers = {
      onChangeUsername: this.onChangeUsername,
      onChangePassword: this.onChangePassword,
      onCredsSubmit: this.onCredsSubmit,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
      userLogStatus: this.state.userLogStatus,
      toggleLoginModal: this.toggleLoginModal,
      showLoginModal: this.state.showLoginModal,
      loginButtonLabel: this.state.loginButtonLabel
    };

      console.log('LH' , loginHandlers)

    let showModal = null;
    if (this.state.loginModal == true) {
      showModal = (
        <div>
          <h1>MODAL HERE</h1>
        </div>
      );
    }

    return (
      <div className="container">
        <NavBar
          className="container"
          productHandlers={productHandlers}
          loginHandlers={loginHandlers}
          handleCRUDType={this.handleCRUDType}
          /* onCredsSubmit={this.onCredsSubmit} */
          /* onLogin={this.onLogin} */
          /* userLogStatus={this.state.userLogStatus} //needed for the button label (login/logout) */
          /* toggleLoginModal={this.toggleLoginModal} */
          /* showLoginModal={this.state.showLoginModal} */
        />{" "}
        {/*products showcase */}
        <ShowProdsList
          className="showprodslist"
          productHandlers={productHandlers}
          products={this.state.products}
          userLogStatus={this.state.userLogStatus} //needed to show or not tools buttons
          handleCRUDType={this.handleCRUDType}
        />{" "}
      </div>
    );
  }
}

export default DBApp;
