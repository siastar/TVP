console.log('opening...');

// about passing data back to parents:
// https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
// https://github.com/siastar/proptesting

import React, { Component } from 'react';
import ProdPopUpForm from './ProdPopUpForm.js';

//import axios from 'axios';
//const postRoute = 'http://localhost:3000/products/createdata/';
//const putRoute = 'http://localhost:3000/products/updatedata/';
//TODO hardcoded links are no good !!!
//const currentRoute = '';

const newProduct = {};

class AddProd2 extends Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    componentDidMount() {
        console.log('did mount');
        //console.log('this.props xxx' , this.props)
        //this.props.handleCRUDType('test');
    };

    componentWillUnmount() {
        console.log('unmounted');
    };

    onFormSubmit(event) {
        event.preventDefault();
        //console.log('event.target xxx: ', event.target);
        //console.log('newProduct: xxx', newProduct);
        //console.log('xxxy' , this);
        delete newProduct._id;
        //(hack) for a reason i have to investigate the newProduct keeps them
        //eventually previously added object _id and this causes error when
        //axios sends it to DB.
        //deleting the value does not resolves because it leaves a null value
        //so for the moment I'm deleting the full properties.
        //TODO understand where/why this happens
        let crudAction = 'CRUD_create';
        let crudArgs = {
            newProduct: newProduct,
            crudAction: crudAction
        };

        //console.log('...sending object to handleCRUDType: xxx', crudArgs);
        this.props.handleCRUDType(crudArgs);
        //callback function, send data (crudArgs) to parent
    };
    
    onChangeArtist(e) {
        newProduct.artist = e.target.value;
    };

    onChangeTitle(e) {
        newProduct.title = e.target.value;
    };

    onChangeYear(e) {
        newProduct.year = e.target.value;
    };

    onChangePrice(e) {
        newProduct.price = e.target.value;
    };

    onChangeFrontCover(e) {
        newProduct.frontcover = e.target.value;
    };

    onChangeBackCover(e) {
        newProduct.backcover = e.target.value
    };

    render() {
        //console.log('this...xxx', this);
        
        let fieldIsRequired = true;
        let buttonLabel = 'Add New';
        let buttonStyle = 'btn btn-primary btn-sm'

        return (
            <div >
                <ProdPopUpForm product = ''
                               fieldisRequired = {fieldIsRequired}
                               buttonLabel = {buttonLabel} //prop routed down via DBFront 'Add New' || 'Edit'
                               buttonStyle = {buttonStyle}
                               onChangeArtist = {this.onChangeArtist}
                               onChangeTitle = {this.onChangeTitle}
                               onChangeYear = {this.onChangeYear}
                               onChangePrice = {this.onChangePrice}
                               onChangeFrontCover = {this.onChangeFrontCover}
                               onChangeBackCover = {this.onChangeBackCover}
                               onFormSubmit = {this.onFormSubmit}>
                </ProdPopUpForm>
            </div>
        );
    };
};

export default AddProd2;
