console.log('opening...')

import React from 'react';
import DBFront from './components/DBFront/DBFront.js';

class App extends React.Component {

  //TODO does it need to be a class?
    
  // constructor() {
  //   super()
  //   this.state = {
  //     compName: 'App.js',
  //   };

  // };

  // componentDidMount() {
  //   console.log(this.state.compName, ' mounted...')
  // };

  render() {

    return (
      <div>
        <div className="teststyle">
          <h6> testing scss with webpack </h6>
        </div>
        <DBFront />
      </div>
    );
  };
};

export default App;
