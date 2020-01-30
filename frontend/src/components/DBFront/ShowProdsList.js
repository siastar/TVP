console.log('...opening src/components/DBFront/ShowProdsList.js')

import React, {
  Component
} from 'react';

import SingleProd from './SingleProd.js'


class ShowProdsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        fileName: 'ShowProdsList.js',
        products: []
    };
  };

    componentDidMount(){
        console.log(this.state.fileName , ' mounted');
    }
    
  render() {
      const DbProducts = this.props.products;
      console.log('DbProducts' , DbProducts);

      const prodList = DbProducts.map( prod => 
          <SingleProd
            
            key={prod._id}
            product={prod}
          />
      );

      //console.log('prodList--:',prodList);
      
      return (
        <div>
           <h6> rendered {this.state.fileName} </h6>
          <hr/>
          <div>
            {prodList}
          </div>
        </div>
      );
  }
};

export default ShowProdsList;
