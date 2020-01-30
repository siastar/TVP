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
