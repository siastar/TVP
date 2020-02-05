console.log('...opening')

import React, {  Component } from 'react';
import Popup from 'reactjs-popup';
import Link from 'react-router-dom';

class SingleProd extends Component {

  constructor(props) {

    super(props);

    this.triggerCRUDAction = this.triggerCRUDAction.bind(this)

    this.state = {
      compName: 'SingleProd.js',
      errorToHandle: false,
      product: {}
    };
  }

  componentDidMount() {
    //copies the single product data in the component state
    console.log(this.state.compName, ' Did Mount');
    this.setState({
      product: this.props.product
    });
    console.log(this.state);
  };

  // when button is pressed triggerCRUDAction calls handleCRUDtype in the
  // parent GetAllProds.js by passing it an object (actionArgs) which containes
  // 
  // product _id value grabbed from the state
  // clicked button value (which in the specific defines what kind of CRUD operation we need)
  // retrieved via actionArgs.target.value

  triggerCRUDAction(event) { //activated via button click, receives the                                              
    this.props.handleCRUDType( //"event object itself" as argument as argument, 
      { //then calls parent's function passing it a new object  
        _id: this.props.product._id, //argument built with 
        crudAction: event.target.value //1) the product _id, grabbed from the
      } //   component's state,  
    ) //2) the button value grabbed
  }; //in the event object properties 

  componentWillUnmount() {
    console.log(this.state.compName, ' unmounted');
  };

  render() {
    console.log('SingleProd this:', this);
    const testValue = 'testValue';
    return (
      <div>
        <hr/>
        <hr/>
        <h6> rendering {this.state.compName} </h6>
        <h6> -------- </h6>
        {/* PRODUCT INFO */} 
          <h6>id: {this.props.product._id}</h6>
          <h6>artist: {this.props.product.artist}</h6>
          <h6>title: {this.props.product.title}</h6>
          <h6>year: {this.props.product.year}</h6>
     
        {/* REMOVE BUTTON */} 
        <button
          onClick={ (e) => { //e stays per DOM event (click press key hoover etc)
              e.preventDefault();
              this.triggerCRUDAction(e);//calls function by sending the event e as argument
              console.log('event.target: ' , e.target);
              // e.target returns  <button value="CRUD_delete"> an generally speaking
              // every element's attribute value
          }}
          value='CRUD_delete' //returned by e.target.value, specifies which action will be performed
        >
          Remove
        </button>

        {/* EDIT BUTTON */}
     
        <button
          onClick={ (e) => { //e stays per DOM event (click press key hoover etc)
              e.preventDefault();
              this.triggerCRUDAction(e);//calls function by sending the event e as argument
              console.log('event.target: ' , e.target);
              // e.target returns  <button value="CRUD_delete"> an generally speaking
              // every element's attribute value
          }}
          value='CRUD_update' //returned by e.target.value, specifies which action will be performed
        >
          Edit
        </button>

        {/* <Link> */}
        {/* </Link> */}
        
      </div>
    );
  };
};

export default SingleProd;
