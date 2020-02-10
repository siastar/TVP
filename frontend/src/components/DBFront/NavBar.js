console.log('...opening src/components/DBFront/Navbar.js')

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'NavBar.js'
    };
  };

  componentDidMount() {
    console.log(this.state.compName, ' mounted');
  };

  render() {
    return (
      <div>
        <div>
          <h6> rendering {this.state.compName} </h6>
        </div>

        <nav>
          <p>NAVBAR</p>
          {/* <Link to='/'> reset </Link> */}
          {/* <div> */}
          {/*   <ul> */}
          {/*     <li> */}
          {/*       <Link to='/getall/'> /getall - Get All Products </Link> */}
          {/*     </li> */}
          {/*     <li> */}
          {/*       <Link to='/create/'> /create - Add Product </Link> */}
          {/*     </li> */}
          {/*     <li> */}
          {/*       <Link to='/edit/'> /edit - Edit Product </Link> */}
          {/*     </li> */}
          {/*     <li> */}
          {/*     <Link to='/remove/12345id'> /remove - Remove Product </Link> */}
          {/*     </li> */}
          {/*     {/\* <li> *\/} */}
          {/*     {/\*   <Link to='/testingstuff'> /testingstuff - Test Stuff </Link> *\/} */}
          {/*     {/\* </li> *\/} */}
          {/*   </ul> */}
          {/* </div> */}
        </nav>
      </div>
    );
  }
};

export default Navbar;
