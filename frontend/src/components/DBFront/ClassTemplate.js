console.log('opening --->');

import React, { Component } from 'react';

class ClassTemplate extends Component {

    constructor(props){
        super(props);
        this.state = {
            fileName: 'ClassTemplate.js'
        }
    }
    
    componentDidMount(){
        console.log(this.state.fileName , ' mounted...')
    }

    componentWillUnmount(){
        console.log(this.state.fileName , ' unmounted...')
    }
    
    render(){
	console.log('rendering ', this.state.fileName);
	
	return (
	<div>
            <h6> rendered {this.state.fileName} </h6>
        </div>
	);
    };
};

export default ClassTemplate;

