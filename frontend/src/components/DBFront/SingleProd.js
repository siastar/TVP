console.log('...opening')

import React, {
  Component
} from 'react';
import Popup from "reactjs-popup";
const deleteDataRoute = 'http://localhost:3000/products/deletedata/'; //server side address
const updateDataRoute = 'http://localhost:3000/products/updatedata/'; //server side address
// TODO: this links should not be hardcoded

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
    
  triggerCRUDAction(actionArgs) {
      this.props.handleCRUDType(
          {
              _id: this.props.product._id,
              crudAction: actionArgs.target.value
          }
      )
  };

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
        <h6> rendered {this.state.compName} </h6>
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
              this.triggerCRUDAction(e);
              console.log('eventttt' , e)
              console.log('event.target: ' , e.target);
              // e.target returns  <button value="CRUD_delete"> an generally speaking
              // every element's attribute value
          }}
          value='CRUD_delete' //e.target.value
          
          /* onClick={this.sendProductIdToParent} */
          /* value='CRUD_delete' */
        >
          Remove
        </button>
      </div>
    );
  };
};

export default SingleProd;
