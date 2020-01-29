console.log('...opening src/components/DBFront/ShowProdsList.js')

import React, {
  Component
} from 'react';

import ShowSingleProd from './ShowSingleProd.js'


class ShowProdsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: 'ShowProdsList state reached'
    };
  };
  
  render() {
      //console.log('ShowProdslist this:' , this);
      const products = this.props.products;
      //console.log('products: ', products)
      return (
        <div>
          <h6>
            hello ShowProdsList
          </h6>
          <div>
                   <React.Fragment>
          <ul>
            {products.map(list => (
            <li key={list._id}>
              {list.artist}, {list.title}
            </li>
            ))}
          </ul>
        </React.Fragment> 
          </div>
        </div>
      );
  }
};

export default ShowProdsList;
