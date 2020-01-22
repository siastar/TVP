console.log('openin DBFront.js...');

import React from 'react';
import BrowseButton from '../common/BrowseButton.js';

class DBFront extends React.Component{
    constructor(){
	super()
	this.state = {
	    check:'DBFront state reached'
	};
    };

    render(){
	console.log('DBFront this: ', this);
	return(
	    <div>
	      <p> DBFront!</p>
	      <h5>{this.state.check}</h5>
	        <BrowseButton/>
	        <BrowseButton/>	    
	    </div>
	);
    };
};

export default DBFront;
