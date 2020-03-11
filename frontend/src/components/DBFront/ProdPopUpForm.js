console.log('opening...');

import React, {  Component } from 'react';
import Popup from "reactjs-popup";

class ProdPopUpForm extends Component {

  componentDidMount() {
    console.log('did mount');
  };

  componentWillUnmount() {
    console.log('unmounting...');
  };

    
    render() {

        let submitAction = null;
        if (this.props.buttonLabel == 'Add New'){
            submitAction = this.props.productHandlers.onAddSubmit
        }
        else if (this.props.buttonLabel == 'Edit'){
            //submitAction = this.props.productHandlers.onEditSubmit;
            //https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter
            submitAction = (event) => {
                //send event with additional parameters
                this.props.productHandlers.onEditSubmit(event, this.props.product);
            }
        }
        else {console.log('about to crash...')}
        
        return (
          <div>
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
              <form onSubmit={submitAction}>
                <div className="form-group">
                    {/* artist */}                  
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired} /* true|false */
                         value={this.props.artist}
                         placeholder={this.props.product.artist || 'artist' }
                         onChange={this.props.productHandlers.onChangeArtist}>
                    </input>
                    {/* title */}
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.title}
                         placeholder={this.props.product.title || 'title' }
                         onChange={this.props.productHandlers.onChangeTitle}>
                    </input>
                    {/* year */}                  
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.year}
                         placeholder={this.props.product.year || 'year' }
                         onChange={this.props.productHandlers.onChangeYear}>
                    </input>
                    {/* price */}
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.price}
                         placeholder={this.props.product.price || 'price' }
                         onChange={this.props.productHandlers.onChangePrice}>
                    </input>
                    {/* frontcover */}
                  <input className="form-control"
                         type="text"
                         required={this.props.fieldIsRequired}
                         value={this.props.frontcover}
                         placeholder={this.props.product.frontcover || 'front cover' }
                         onChange={this.props.productHandlers.onChangeFrontCover}>
                    </input>
                    {/* backcover */}
                  <input  className="form-control"
                          type="text"
                          required={this.props.fieldIsRequired}
                          value={this.props.backcover}
                          placeholder={this.props.product.backcover || 'back cover' }
                          onChange={this.props.productHandlers.onChangeBackCover}>
                    </input>
                  <button className="btn btn-primary"
                          type="submit"
                          value="Submit"
                          >
                    Submit
                  </button>
                </div>
              </form>
            </Popup>
          </div>
      );
  };
};

export default ProdPopUpForm;
