console.log('...opening /src/components/DBFront/DelProd.js');

import React, { Component } from 'react';

class DelProd extends Component {

    constructor(props) {
	super(props);

	this.onDelete = this.onDelete.bind(this);

	this.state = {
	    check: 'DelProd.js state reached'
	};
    };

     componentDidMount(){
        console.log('/DelProd.js componentDidMount...')
        
     };
    
    render(){
	return (
	    <div>
		<p> Delete product (component) </p>
            </div>
	);
    };
};

export default DelProd;

