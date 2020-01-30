console.log('...opening /src/components/DBFront/DelProd.js');

import React, {
  Component
} from 'react';

class DelProd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'DelProd.js',
      products: []
    };
  };

  componentDidMount() {
    console.log(this.state.compName, ' mounted');
  };

  componentWillUnmount() {
    console.log(this.state.compName, ' unmounted');
   };

  render() {
    return (
         <div>
            <h6> rendered {this.state.compName} </h6>
        </div>
    );
  };
};

export default DelProd;
