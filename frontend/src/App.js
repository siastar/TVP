console.log('...opening App.js')

import React from 'react';
import TestComponent from './components/TestComponent.js'
import './css/App.css';

function App(){
    return(
	<div className="AppStyle">
          <p>$/src/App.js</p>
	  <TestComponent/>
	</div>
    );
};

// class App extends React.Componment{
//     costructor(){
//         super()
//         this.state = {
//             AppStateValue1: 'hallo 1',
//             AppStateValue2: 'hallo 2'
//         };
//     };

//     render(){
//         return (
//             <div>
//               <TestComponent/>
//             </div> 
//         );
//     };
// };

export default App;


