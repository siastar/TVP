console.log('...opening /server.js');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const product = require ('./routes/ProductsRoute.js');
const DBconnect = require ('./DBconnect.js');
const PORT = process.env.PORT || 3000;

DBconnect;
//connects to database, imported module from DBconnect.js   
//DBConnect.js contains methods for connection and Database name (like vinylstore)
//const localDB = 'mongodb://localhost:27017/vinylstore';
//
//the collection in the DB is target in the Schema module.exports



////
//middlewares
////

app.use(cors());
// Cross-origin resource sharing (CORS) allows AJAX requests to skip the
// Same-origin policy and access resources from remote hosts.
// https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b

app.use(bodyParser.json());

////
//main routes
////
app.use('/products' , product);
//console.log('product: ', product);

////
//enable server listening...
////
app.listen(PORT, () => {
    console.log('server listening on port' , PORT);
    console.log('CTRL^C to stop server');
} );

