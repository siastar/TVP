console.log('...opening src/components/DBFront/Navbar.js')

import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: 'NavBar state reached'
    };
  };

  render() {
    return (
      <div>
        <h5>NavBar.js is running</h5>
        <h6>...{this.state.check}</h6>

        <nav>
          <Link to='/'> test </Link>
          <div>
            <ul>
              <li>
                <Link to='/getall'> /getall - Get All Products </Link>
              </li>
              <li>
                <Link to='/create'> /create - Add Product </Link>
              </li>
              <li>
                <Link to='/remove'> /remove - Remove Product </Link>
              </li>
              <li>
                <Link to='/edit/12345'> /edit - Edit Product </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
