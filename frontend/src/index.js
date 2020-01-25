console.log('...opening index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'


ReactDOM.render(

    <App/>, document.getElementById('react-root') //app is injected in index.html

);

module.hot.accept(); //hot reload on changes (as defined in webpack.conf.js)


