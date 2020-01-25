console.log ('...opening src/components/DBFront/Navbar.js')

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
	return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to='/' className="navbar-brand>Get All Products"> test </Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to='/all' className="nav-link"> /all - Get Products </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to='/create' className="nav-link"> /create - Add Product </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to='/remove' className="nav-link"> /remove - Remove Product </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to='/edit/12345' className="nav-link"> /edit - Edit Product </Link>
                  </li>
                </ul>
              </div>
            </nav>
	);
    }
};

export default Navbar;
