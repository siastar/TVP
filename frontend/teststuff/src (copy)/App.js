console.log('opening...')

import React from 'react';
//import DBFront from './components/DBFront/DBFront.js';
import NavBar from './components/DBFront/NavBar.js';
import GetAllProds from './components/DBFront/GetAllProds.js';

class App extends React.Component {

    

  render() {

    return (
      <div className="app">
        {/* <div className="teststyle"> */}
        {/*   <h6> testing scss with webpack </h6> */}
        {/* </div> */}
        {/* <DBFront className="dbfront"> */}
          <NavBar/>
          <GetAllProds/>
        {/* </DBFront> */}
      </div>
    );
  };
};

export default App;
