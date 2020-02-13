console.log('opening...');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const reactContent = document.getElementById('react-root'); //refers to index.html

reactContent ? ReactDOM.render(<App/> , reactContent) : false
//if reactContent exists return it within <App/> module, otherwise return 'false'

// ReactDOM.render(

//     <App/>, document.getElementById('react-root') //app is injected in index.html

// );

// if (module.hot) {
//   module.hot.accept();
// } //hot reload on changes (as defined in webpack.conf.js)

