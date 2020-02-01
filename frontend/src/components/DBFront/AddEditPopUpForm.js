console.log('opening --->');

//this component creates a popup form used to add a new product or to edit an existing one

import React, {  Component} from 'react';
import Popup from "reactjs-popup";

class AddEditPopUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'AddEditPopUpForm.js'
    }
  };

  componentDidMount() {
    console.log(this.state.compName, ' mounted...')
  };

  componentWillUnmount() {
    console.log(this.state.compName, ' unmounted...')
  };

  // sendTestToParent(){
  //     this.props.parentCallback('oh you!');
  //   }  
    
  render() {

      console.log('rendering ', this.state.compName);
      console.log('this...' , this);

      // const action = this.props.action;
      // console.log('action: ', action);
      // let buttonLabel ='';

      // switch(action){
          
      // case 'modprod':
      //     buttonLabel = 'Edit Product';
      //     break;
      // case 'addprod':
      //     buttonLabel = 'Add Product';
      //     break;
      // default: console.log('buttonLabel is undefined');
      // }

      return (
          <div>
            <Popup trigger={<button> {this.props.buttonlabel} </button>} //button label changes according to the parent component
                   position="right center"
            >
              <div>
                <form onSubmit={this.props.onFormSubmit}>
                  
                  <div>
                    <label>artist: </label>
                    <input type="text"
                           required
                           value={this.props.artist}
                           onChange={this.props.onChangeArtist}
                    >
                    </input>
                  </div>
                  
                  <div>
                    <label>title: </label>
                    <input type="text"
                           required
                           value={this.props.title}
                           onChange={this.props.onChangeTitle}>
                    </input>
                  </div>

                  <div>
                    <label>year: </label>
                    <input type="text"
                           required
                           value={this.props.year}
                           onChange={this.props.onChangeYear}>
                    </input>
                  </div>

                  <div>
                    <label>price: </label>
                    <input type="text"
                           required value={this.props.price}
                           onChange={this.props.onChangePrice}>
                    </input>
                  </div>

                  <div>
                    <label>frontcover: </label>
                    <input type="text"
                           required
                           value={this.props.frontcover}
                           onChange={this.props.onChangeFrontCover}>
                    </input>
                  </div>

                  <div>
                    <label>backcover: </label>
                    <input type="text"
                           required
                           value={this.props.backcover}
                           onChange={this.props.onChangeBackCover}>
                    </input>
                  </div>
                  
                  <div>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </Popup>
          </div>
      );

  };
};

export default AddEditPopUpForm;
