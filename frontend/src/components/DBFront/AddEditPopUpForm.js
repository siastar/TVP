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
  }

  componentDidMount() {
    console.log(this.state.fileName, ' mounted...')
  }

  componentWillUnmount() {
    console.log(this.state.fileName, ' unmounted...')
  }

  render() {
    console.log('rendering ', this.state.fileName);
    const Popup = () => (
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
      );
      return (
      <div>
        <Popup />
        <h6> rendered {this.state.fileName} </h6>
      </div>
    );
  };
};

export default AddEditPopUpForm;
