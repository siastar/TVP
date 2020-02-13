console.log('opening...');
//TODO why class ?

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      compName: 'NavBar.js'
    };
  };

  componentDidMount() {
   console.log('unmounting...');
  };

  render() {
    return (
      <div>
        <nav>
          <p>NAVBAR</p>
        </nav>
      </div>
    );
  }
};

export default Navbar;
