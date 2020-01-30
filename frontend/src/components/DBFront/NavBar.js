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
      fileName: 'NavBar.js'
    };
  };

  componentDidMount() {
    console.log(this.state.fileName, ' mounted');
  };

  render() {
    return (
        <div>
          <div>
            <h6> rendered {this.state.fileName} </h6>
          </div>

          <nav>
            <Link to='/'> reset </Link>
            <div>
              <ul>
                <li>
                  <Link to='/showall'> /showall - Show All Products </Link>
                </li>
                <li>
                  <Link to='/getall'> /getall - Get All Products </Link>
                </li>
                <li>
                  <Link to='/create'> /create - Add Product </Link>
                </li>
                <li>
                  <Link to='/remove/12345'> /remove - Remove Product </Link>
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
