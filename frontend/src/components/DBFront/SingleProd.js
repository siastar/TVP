console.log('opening...');

import React, {
  Component
} from 'react';
import Popup from 'reactjs-popup';
//import Link from 'react-router-dom';
import EditProd from './EditProd.js';

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

  // componentDidMount() {
  //   console.log(this.state.compName, ' Did Mount');
  // };

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
    console.log('unmounting...');
  };

  render() {
    console.log('SingleProd this:', this);
    //const testValue = 'testValue';
    return (
      <div>
        <div className="card">
          <img className="card-img-top"
               alt="testImage"
               src="../../../testimg/testcover.jpeg"
            
          />
          <div className="card-body">
            {/* PRODUCT INFO */}
            {/* <h6>id: {this.props.product._id}</h6> */}
            <ul className="list-group list-group-flush">
            <li className="list-group-item"> {this.props.product.artist}</li>
            <li className="list-group-item">{this.props.product.title}</li>
            <li className="list-group-item">{this.props.product.year}</li>
            <li className="list-group-item"> {this.props.product.price}</li>
            </ul>
            
            {/* <h6>artist: {this.props.product.artist}</h6> */}
            {/* <h6>title: {this.props.product.title}</h6> */}
            {/* <h6>year: {this.props.product.year}</h6> */}
            {/* <h6>price: {this.props.product.price}</h6> */}
            

          </div>
        </div>

        <div>
          {/* REMOVE BUTTON */}
          <button className='btn btn-danger' onClick={ (e)=> { //e stays per DOM event (click press key hoover etc)
            e.preventDefault();
            this.triggerCRUDAction(e);//calls function by sending the event e as argument
            console.log('event.target: ' , e.target);
            // e.target returns <button value="CRUD_delete"> an generally speaking
              // every element's attribute value
              }}
              value='CRUD_delete' //returned by e.target.value, specifies which action will be performed (delete in this case)
              > Remove
            </button>
        </div>

        {/* EDIT BUTTON */}
        <div>
          <EditProd handleCRUDType={this.props.handleCRUDType} product={this.props.product} />
        </div>
      </div>    );
  };
};

export default SingleProd;
