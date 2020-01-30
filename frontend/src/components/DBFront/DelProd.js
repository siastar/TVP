console.log('...opening /src/components/DBFront/DelProd.js');

import React, {
  Component
} from 'react';

class DelProd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileName: 'DelProd.js',
      products: []
    };
  };

  componentDidMount() {
    console.log(this.state.fileName, ' mounted');
  };

  render() {
    return (
         <div>
            <h6> rendered {this.state.fileName} </h6>
        </div>
    );
  };
};

export default DelProd;
