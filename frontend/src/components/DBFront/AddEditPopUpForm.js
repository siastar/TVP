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

  render() {

      console.log('rendering ', this.state.compName);
      console.log('AddEditPopUpForm this:' , this);

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
            <p>action: {this.props.action}</p>
            <Popup trigger={<button> {this.props.buttonlabel} </button>}
              position="right center"
              >
              <div>
                <form onSubmit={this.onSubmit}>

                  <div>
                    <label>artist: </label>
                    <input type="text" required value={this.state.artist} onChangeArtist={this.onChangeArtist}>
                    </input>
                  </div>

                  <div>
                    <label>title: </label>
                    <input type="text" required value={this.state.title} onChangeTitle={this.onChangeTitle}>
                    </input>
                  </div>

                  <div>
                    <label>year: </label>
                    <input type="text" required value={this.state.year} onChange={this.onChangeYear}>
                    </input>
                  </div>

                  <div>
                    <label>price: </label>
                    <input type="text" required value={this.state.price} onChange={this.onChangePrice}>
                    </input>
                  </div>

                  <div>
                    <label>frontcover: </label>
                    <input type="text" required value={this.state.frontcover} onChange={this.onChangeFrontCover}>
                    </input>
                  </div>

                  <div>
                    <label>backcover: </label>
                    <input type="text" required value={this.state.backcover} onChange={this.onChangeBackCover}>
                    </input>
                  </div>
                  <div>
                    <input name="submit" type="submit" value="add product" />
                  </div>
                </form>
              </div>
            </Popup>
          </div>
      );

  };
};

export default AddEditPopUpForm;
