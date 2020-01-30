console.log('...opening /src/components/DBFront/ModProd.js');

import React, {
  Component
} from 'react';
import GetAllProds from './GetAllProds.js'

class ShowAllProds extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'SingleProd.js',
      product: []
    };
  };

  componentDidMount() {
    console.log(this.state.compName, ' mounted');
  };

  render() {
    console.log('this.props: .....', this.props)
    return (
      <div>
  <p> Showing All Products !!!!(component) </p>
</div>
    );
  };
};

export default ShowAllProds;
