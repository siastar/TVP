console.log('...opening /src/components/DBFront/GetAllProds.js');

import React, { Component } from 'react';
import axios from 'axios';
import ShowProdsList from './ShowProdsList.js'

const getDataRoute = 'http://localhost:3000/products/getdata/'; //server side address

class GetAllProds extends Component {

  constructor(props) {
    super(props)

    this.state = {
      compName: 'GetAllProds.js',
      products: []

    };
  };

    componentDidMount() {
      
        console.log(this.state.compName , ' mounted...');
        //console.log('received props: ', this.props)

        axios.get(getDataRoute)
          .then(res => {
              const fetchedData = res.data.allProds;
              console.log('DB fetched data: ', fetchedData);
              //allProds is defined in backend ProductsRoute.js and comes in via axios 
              if (fetchedData.length > 0){ //check if there is at least 1 element in the array
                  this.setState({
                      products: fetchedData
                  });
                  
              }
              else {
                  console.log('no items found, maybe DB is empty?');                 
              };
          })
      
          .catch(err => {
              console.log('error fetching DB' , err)
          });
       };

    componentWillUnmount() {
    console.log(this.state.compName, ' unmounted');
   };

    
    render() {
        
        return (
      <div>
        <div>
            <h6> rendered {this.state.compName} </h6>
        </div>
        
        <div>
          <hr/>
          <ShowProdsList products={this.state.products}/> {/* pass props to child */}
          <hr/>
        </div>
      </div>
    );
  };
};

export default GetAllProds;
