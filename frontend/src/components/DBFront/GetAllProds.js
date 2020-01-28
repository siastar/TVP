console.log('...opening /src/components/DBFront/GetAllProds.js');

import React, {
  Component
} from 'react';

import axios from 'axios';

const getRoute = 'http://localhost:3000/products/getdata/';

class GetAllProd extends Component {

  constructor(props) {
    super(props)

    //binding
    this.onSubmit = this.onSubmit.bind(this);

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
                      products: res.data.allProds.length
                  });
              }
              
              else {
                  console.log('no items found');                 
              };
                            
          })
      
          .catch(err => {
              console.log('error fetching DB' , err)
          });
  };

  componentWillUnmount() {
    console.log('...unmounting GetAllProd.js');
  };

  // onSubmit() {
  //   //e.preventDefault();
  //     const allProducts = 'test';
  //     console.log(allProducts);

  // };

    render() {
        console.log('GetAllProducts this: ', this);
    return (
      <div>
        <div>
          <p> Get all products (component) </p>
        </div>
        <div>
          <input name="submit" type="submit" value="show all products" />
        </div>
      </div>
    );
  };
};

export default GetAllProd;
