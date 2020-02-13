console.log('opening...');

import React, { Component } from 'react';

class ClassTemplate extends Component {

    constructor(props){
        super(props);
        this.state = {
            compName: 'ClassTemplate.js'
        }
    }
    
    componentDidMount(){
        console.log(this.state.compName , ' mounted...')
    }

    componentWillUnmount(){
        console.log('unmounting...');
    }
    
    render(){
	console.log('rendering ', this.state.compName);
	
	return (
	<div>
            <h6> rendering {this.state.compName} </h6>
        </div>
	);
    };
};

export default ClassTemplate;

