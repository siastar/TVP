console.log('...opening src/components/DBFront/ShowSingleProd.js')

import React, {
  Component
} from 'react';

class ShowSingleProd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: 'ShowSingleProduct state reached'
    };
  };

  render() {
    return (
        <div>
          <h6>
        ...hello ShowSingleProd
          </h6>
      </div>
    );
  }
};

export default ShowSingleProd;
