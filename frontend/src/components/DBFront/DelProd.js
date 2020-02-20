console.log('...opening');

import React, {
  Component
} from 'react';

class DelProd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'DelProd.js',
      products: []
    };
      
    //this.onClickRemoveButton = this.onClickRemoveButton.bind(this)
  };

  componentDidMount() {
    console.log('mounted');
  };

  componentWillUnmount() {
    console.log('unmounted');
  };

    onClickRemoveButton(event) {
    //activated via button click, receives the event object itself as argument,                                              
    //then calls parent's function passing it a new object argument built with 
    //1) the product _id, grabbed from the component's state,  
    //2) the button value grabbed in the event object properties 
        this.props.handleCRUDType(  
      {   
          _id: this.props.product._id,
          crudAction: event.target.value
      }
        )
    };

  render() {
      return (
          <button
            className="btn btn-danger btn-sm"
            onClick={ (e)=> {
                //e stays per DOM event (click press key hoover etc)
                e.preventDefault();
                this.onClickRemoveButton(e);
                //calls function by sending the event e as argument
                console.log('event.target: ' , e.target);
                // e.target returns <button value="CRUD_delete"> an generally speaking
                // every element's attribute value
            }}
            value='CRUD_delete' //returned by e.target.value, specifies which action will be performed (delete in this case)
          > Remove
          </button>
    );
  };
};

export default DelProd;
