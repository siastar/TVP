console.log('...opening App.js')

import React from 'react';
import axios from 'axios';
//import DBFront from './components/DBFront/DBFront.js'
import './css/App.css';
const testUrl = 'http://localhost:3000/products/getdata';

class App extends React.Component {

    constructor() {
    super()
    this.state = {
      check:'App.js state reached',
      data: {}
      // id: 0,
      // message: null,
      // intervalIsSet: false,
      // idToDelete: null,
      // idToUpdate: null,
      // objectToUpdate: null
    };
  };

  // Componentdidmount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1000);
  //     this.setState({
  //       intervalIsSet: interval
  //     });
  //   };
  // };

  // componentWillUnmount() {
  //  if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({
  //       intervalIsSet: null
  //     });
  //   };
  // };

  //fetch data from DB  
  // getDataFromDb = () => {
  //   fetch('http://localhost:3000/products/getdata')
  //     .then((data) => data.json())
  //     .then((res) => this.setState({
  //       data: res.data
  //     }));
  // };

  // getDataFromDb = function getDataFromDb() {
  //     console.log('getDatafromDb...');
  //     console.log('this.state: ' , this.state);
  //     console.log('testUrl: ' , testUrl);
      
  //     fetch(testUrl)
  //         .then(function(data) {
  //             console.log('data: ',data);
  //       return data.json();
  //     })
  //     .then(function(res) {
  //         return this.setState({
  //         data: res.data
  //       });
  //     });
      
  // };

    // componentDidMount() {
    //     axios.get(testUrl)
    //         .then(res => {
    //             console.log('res' , res);
    //             this.setState({ data: res.data });
                
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }
    
  render() {
      console.log('props: ' , this.props);    
    return (
	<div className=''>
            <p>hello!</p>
              <h4> {this.state.check} </h4>
        </div>
	
    );
  };
    
};

export default App;
