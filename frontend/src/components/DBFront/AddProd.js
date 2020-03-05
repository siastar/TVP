console.log('opening...');

import React, { Component } from 'react';
import ProdPopUpForm from './ProdPopUpForm.js';

//const newProduct = {};

class AddProd extends Component {

    // constructor(props) {
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // };

    componentDidMount() {
        console.log('did mount');
    };

    componentWillUnmount() {
        console.log('unmounted');
    };
    
    render() {
        
        let fieldIsRequired = true;
        let buttonLabel = 'Add New';
        let buttonStyle = 'btn btn-primary btn-sm'

        return (
            <div >
                <ProdPopUpForm product = ''
                               fieldisRequired = {fieldIsRequired}
                               buttonLabel = {buttonLabel} //prop routed down via DBFront 'Add New' || 'Edit'
                               buttonStyle = {buttonStyle}
                               productHandlers = {this.props.productHandlers}
                            
                >
                </ProdPopUpForm>
            </div>
        );
    };
};

export default AddProd
;
