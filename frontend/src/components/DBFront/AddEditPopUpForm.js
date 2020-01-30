console.log('opening --->');

import React, {
  Component
} from 'react';
import Popup from "reactjs-popup";

class AddEditPopUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: 'AddEditPopUpForm.js'
    }
  };

  componentDidMount() {
    console.log(this.state.fileName, ' mounted...')
  };

  componentWillUnmount() {
    console.log(this.state.fileName, ' unmounted...')
  };

  render() {

      console.log('rendering ', this.state.fileName);
      console.log(this);
      

      return (
          <div>
            <p>popup here!</p>
            <Popup
              trigger={<button> Edit </button>}
              position="right center"
            >
              <div>
                Popup content here !!
                testing stuff
              </div>
            </Popup>
          </div>

    );

  };
};

export default AddEditPopUpForm;
