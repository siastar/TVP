console.log('opening --->');

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
        console.log(this.state.compName , ' unmounted...')
    }
    
    render(){
	console.log('rendering ', this.state.compName);
	
	return (
	<div>
            <h6> rendered {this.state.compName} </h6>
        </div>
	);
    };
};

export default ClassTemplate;

