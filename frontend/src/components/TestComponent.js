console.log('...opening TestComponent.js');

import React from 'react';
import './css/TestComponent.css';

class TestComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      test1: 'TestComponent.js state has been reached...',
      test2: 'Rock n Roll'
    };
  };

  stateTest1() {
    let testState = this.state.test1;
    return (testState);
  };

  stateTest2() {
    let testState = this.state.test2;
    return (testState);
  };

  render() {
    return (
      <div className='TestComponent'>
        <p>$/src/components/TestComponent.js!!!</p>
        <hr/>
        <p>direct call of state</p>
        <br/>
        <p>{this.state.test1}</p>
        <p>{this.state.test2}</p>
        <hr/>
        <p>call of state via function (callback)</p>
        <br/>
        <p>{this.stateTest1()}</p>
        <p>{this.stateTest2()}</p>
      </div>
    )
  };
}; //class end

export default TestComponent;
