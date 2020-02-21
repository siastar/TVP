console.log('opening...');

import React, { Component } from 'react';

class ModProd extends Component {

    constructor(props){
        super(props);
        this.state = {
            compName: ''
        }
    }
    
    componentDidMount(){
        console.log(' mounted...')
    }
    
    render(){
        let logLabel='';
        if (this.props.userLogStatus == true){
            logLabel = 'Logout'
        } else{
            logLabel = 'Login'
        }
            
	return (
	    <div>
              <button className="btn btn-warning"
                      onClick={this.props.onLogin}> {logLabel} </button>
          
        </div>
	);
    };
};

export default ModProd;

