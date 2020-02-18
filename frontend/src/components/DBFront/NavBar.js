console.log('opening...');
//TODO why class ?

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import 'bootstrap';

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
          <button className="btn btn-primary" type="submit">Button</button>
        </nav>
      </div>
    );
  }
};

export default NavBar;
