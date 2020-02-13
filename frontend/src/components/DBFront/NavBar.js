console.log('opening...');
//TODO why class ?

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class NavBar extends Component {

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
      <div className="navbar">
        <nav>
          <p>NAVBAR</p>
        </nav>
      </div>
    );
  }
};

export default NavBar;
