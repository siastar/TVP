console.log('...opening /src/components/DBFront/GetAllProds.js');

import React, {
  Component
} from 'react';

import axios from 'axios';

import ShowProdsList from './ShowProdsList.js'

import TestingStuff from './TestingStuff.js'

const getRoute = 'http://localhost:3000/products/getdata/';

class GetAllProd extends Component {

  constructor(props) {
    super(props)

    //binding
    //this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      check: 'getAllProds.js state reached',
      products: []

    };
  };

  componentDidMount() {
      console.log('componentDidMount...');
      axios.get(getRoute)
          .then(res => {
              console.log('DB content: ', res.data.allProds);
              //allProds is defined in backend ProductsRoute.js and comes in via axios 
              if (res.data.allProds.length > 0){ //check if there is at least 1 element in the array
                  this.setState({
                      products: res.data.allProds
                      
                  });
                  console.log('checkstate:' , this.state.products);
              }
              
              else {
                  console.log('no items found');                 
              };
                            
          })
      
          .catch(err => {
              console.log('error fetching DB' , err)
          });
      console.log('state after CDM' , this.state);
  };

  componentWillUnmount() {
    console.log('...unmounting GetAllProd.js');
  };

    render() {
    console.log('product list in rendering process...' , this.state.products)
    return (
      <div>
        <div>
          <p> Get all products (component) </p>
        </div>
        <div>
          <TestingStuff/>
          <hr/>
          <ShowProdsList products={this.state.products}/>
        </div>
      </div>
    );
  };
};

export default GetAllProd;
