console.log('...opening /src/components/DBFront/ModProd.js');

import React, { Component } from 'react';

class ModProd extends Component {

    constructor(props){
        super(props);
        this.state = {
            compName: 'ModProd.js'
        }
    }
    
    componentDidMount(){
        console.log(this.state.compName , ' mounted...')
    }
    
    render(){
	return (
	<div>
            <h6> rendering {this.state.compName} </h6>
        </div>
	);
    };
};

export default ModProd;

