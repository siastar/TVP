console.log('...opening BrowseButton.js');

import React from 'react';

class BrowseButton extends React.Component{
    constructor(){
	super()
	this.state = {
	    check:'BrowseButton state reached'
	};
    };

    render(){
        console.log('BrowseButton this:' , this)
	return(
	    <div>
              <button>hey!</button>
            </div>

	);
    };
};

export default BrowseButton;
