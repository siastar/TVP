console.log('opening...');

//this component creates a popup form used to add a new product or to edit an existing one

import React, {  Component} from 'react';
import Popup from "reactjs-popup";

class ProdPopUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        compName: 'prodPopUpForm.js',
        fieldIsRequired: null
    };
  }

  componentDidMount() {
      //console.log(this.state.compName, ' mounted...');

      switch(this.props.buttonlabel) {
      case 'Edit Product':
          this.setState({ fieldIsRequired: false}); //Edit does not need all the fields covered
          break;
      case 'Add Product':
          this.setState({ fieldIsRequired: true}); //Add needs all the fields covered
          break;
      default:
          console.log('crashing soon...');
          break;
      }
      
  };

  componentWillUnmount() {
   console.log('unmounting...');
  };

  // sendTestToParent(){
  //     this.props.parentCallback('oh you!');
  //   }  
    
  render() {

      // console.log('rendering ', this.state.compName);
      // console.log('this...' , this);
      

      return (
          <div>
            <Popup trigger={<button className="btn btn-primary"> {this.props.buttonlabel} </button>} //button label changes according to the parent component
                   position="right center"
            >
              <div>
                <form onSubmit={this.props.onFormSubmit}>
                  
                  <div>
                    <label>artist: </label>
                    <input type="text"
                           required = {this.state.fieldIsRequired}
                           value={this.props.artist}
                           placeholder={this.props.product.artist || 'artist'}
                           onChange={this.props.onChangeArtist}
                    >
                    </input>
                  </div>
                  
                  <div>
                    <label>title: </label>
                    <input type="text"
                           required = {this.state.fieldIsRequired}
                           value={this.props.title}
                           placeholder={this.props.product.title || 'title'}
                           onChange={this.props.onChangeTitle}>
                    </input>
                  </div>

                  <div>
                    <label>year: </label>
                    <input type="text"
                           required = {this.state.fieldIsRequired}
                           value={this.props.year}
                           placeholder={this.props.product.year || 'year'}
                           onChange={this.props.onChangeYear}>
                    </input>
                  </div>

                  <div>
                    <label>price: </label>
                    <input type="text"
                           required = {this.state.fieldIsRequired}
                           value={this.props.price}
                           placeholder={this.props.product.price || 'price'}
                           onChange={this.props.onChangePrice}>
                    </input>
                  </div>

                  <div>
                    <label>frontcover: </label>
                    <input type="text"
                           required = {this.state.fieldIsRequired}
                           value={this.props.frontcover}
                           placeholder={this.props.product.frontcover || 'front cover'}
                           onChange={this.props.onChangeFrontCover}>
                    </input>
                  </div>

                  <div>
                    <label>backcover: </label>
                    <input type="text"
                           required = {this.state.fieldIsRequired}
                           value={this.props.backcover}
                           placeholder={this.props.product.backcover || 'back cover'}
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

export default ProdPopUpForm;
