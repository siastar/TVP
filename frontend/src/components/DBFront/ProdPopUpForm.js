console.log('opening...');

//this component creates a popup form used to add a new product or to edit an existing one

import React, {
  Component
} from 'react';
import Popup from "reactjs-popup";
//const buttonStyle = null;

class ProdPopUpForm extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fieldIsRequired: null,
  //     buttonStyle: null
  //   };
  // }

  componentDidMount() {
    console.log('did mount');
 
  };

  componentWillUnmount() {
    console.log('unmounting...');
  };

    render() {
 
      //console.log('check' , this.props);
      return (
          <div>
            <p>{this.props.testxyz}</p>
            <Popup
              trigger={ <button
                          className={this.props.buttonStyle}
                        > {this.props.buttonLabel}
                        </button>
                      } //button label changes according to the parent component
              position="bottom center"
              closeOnDocumentClick
              modal
              >
              <form onSubmit={this.props.onFormSubmit}>
                <div className="form-group">
                    {/* artist */}                  
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.artist}
                         placeholder={this.props.product.artist || 'artist' }
                         onChange={this.props.onChangeArtist}>
                    </input>
                    {/* title */}
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.title}
                         placeholder={this.props.product.title || 'title' }
                         onChange={this.props.onChangeTitle}>
                    </input>
                    {/* year */}                  
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.year}
                         placeholder={this.props.product.year || 'year' }
                         onChange={this.props.onChangeYear}>
                    </input>
                    {/* price */}
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.price}
                         placeholder={this.props.product.price || 'price' }
                         onChange={this.props.onChangePrice}>
                    </input>
                    {/* frontcover */}
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.frontcover}
                         placeholder={this.props.product.frontcover || 'front cover' }
                         onChange={this.props.onChangeFrontCover}>
                    </input>
                    {/* backcover */}
                  <input  className="form-control"
                          type="text"
                          required={this.props.fieldIsRequired}
                          value={this.props.backcover}
                          placeholder={this.props.product.backcover || 'back cover' }
                          onChange={this.props.onChangeBackCover}>
                    </input>
                  <button className="btn btn-primary"
                          type="submit"
                          value="Submit"
                          >
                    submit
                  </button>
                </div>
              </form>
            </Popup>
          </div>
      );
  };
};

export default ProdPopUpForm;
