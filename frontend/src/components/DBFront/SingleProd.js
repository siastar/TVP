console.log('...opening src/components/DBFront/SingleProd.js')

import React, {
  Component
} from 'react';

class SingleProd extends Component {

  constructor(props) {
    super(props);
    this.state = {
	fileName: 'SingleProd.js',
	product:[]
    };
  };

   componentDidMount() {
    console.log(this.state.fileName, ' mounted');
   };
    
    render() {
        console.log('SingleProd this.props,product:' , this.props.product)
    return (
        <div>
          <hr/>
          <h6> rendered {this.state.fileName} </h6>
          <h6>artist: {this.props.product.artist}</h6>
          <h6>title: {this.props.product.title}</h6>
          <h6>year: {this.props.product.year}</h6>
      </div>
    );
  }
};

export default SingleProd;
