console.log('opening...');

import React from 'react';
import ReactDOM from 'react-dom';
import DBApp from './components/DBFront/DBApp.js'
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/teststyle.scss';

const reactContent = document.getElementById('react-root'); //refers to index.html

reactContent ? ReactDOM.render(<DBApp/> , reactContent) : false
//if reactContent exists return it within <App/> module, otherwise return 'false'

// ReactDOM.render(
//     <App/>, document.getElementById('react-root') //app is injected in index.html
// );


//Hot Reload
if (module.hot) {
  module.hot.accept();
} //hot reload on changes (as defined in webpack.conf.js)

