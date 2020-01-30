console.log('...opening App.js')
//youtube.com/watch?v=7CqJlxBYj-M min52

import React from 'react';
import DBFront from './components/DBFront/DBFront.js'

//import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import NavBar from './components/DBFront/NavBar.js';
// import AddProd from './components/DBFront/AddProd.js';
// import ModProd from './components/DBFront/ModProd.js';
// import DelProd from './components/DBFront/DelProd.js';
// import GetAllProds from './components/DBFront/GetAllProds.js';

// //import axios from 'axios';

// const testUrl = 'http://localhost:3000/products/getdata/';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      fileName: 'App.js',
    };

    //this.displayData = this.displayData.bind(this);
  };

  componentDidMount() {
    console.log(this.state.fileName, ' mounted...')
  };

  render() {

    return (
      <div>
        <div>
          <h6> rendered {this.state.fileName} </h6>
        </div>
        <DBFront />
      </div>
    );
  };

};

export default App;
