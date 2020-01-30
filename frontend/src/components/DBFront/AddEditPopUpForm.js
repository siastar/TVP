console.log('opening --->');

import React, {
  Component
} from 'react';
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
      
      return (
          <div>
            <p>popup here!</p>
            <Popup trigger={<button> Edit </button>}
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
