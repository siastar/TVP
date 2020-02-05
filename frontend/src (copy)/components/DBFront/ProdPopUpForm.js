console.log('opening --->');

//this component creates a popup form used to add a new product or to edit an existing one

import React, {  Component} from 'react';
import Popup from "reactjs-popup";

class ProdPopUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'prodPopUpForm.js'
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
                           placeholder={this.props.product.artist || 'artist'}
                           onChange={this.props.onChangeArtist}
                    >
                    </input>
                  </div>
                  
                  <div>
                    <label>title: </label>
                    <input type="text"
                           required
                           value={this.props.title}
                           placeholder={this.props.product.title || 'title'}
                           onChange={this.props.onChangeTitle}>
                    </input>
                  </div>

                  <div>
                    <label>year: </label>
                    <input type="text"
                           required
                           value={this.props.year}
                           placeholder={this.props.product.year || 'year'}
                           onChange={this.props.onChangeYear}>
                    </input>
                  </div>

                  <div>
                    <label>price: </label>
                    <input type="text"
                           required value={this.props.price}
                           placeholder={this.props.product.price || 'price'}
                           onChange={this.props.onChangePrice}>
                    </input>
                  </div>

                  <div>
                    <label>frontcover: </label>
                    <input type="text"
                           required
                           value={this.props.frontcover}
                           placeholder={this.props.product.frontcover || 'front cover'}
                           onChange={this.props.onChangeFrontCover}>
                    </input>
                  </div>

                  <div>
                    <label>backcover: </label>
                    <input type="text"
                           required
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
