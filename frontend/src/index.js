console.log('...opening index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const message = '# !! React renders here !! #';

ReactDOM.render(
	<App message={message}/>,
    document.getElementById('app') //app is injected in index.html
);

module.hot.accept(); //hot reload on changes (as defined in webpack.conf.js)
