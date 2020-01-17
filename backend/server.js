console.log('...opening /server.js');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const vinyl = require ('./routes/VinylsRoute.js');
const Database = require ('./DBconnect.js');
const PORT = process.env.PORT || 3000;

Database; //connects to database, imported module from DBconnect.js   

////
//middlewares
////

app.use(bodyParser.json());

app.use('/vinyls' , vinyl);
//localhost:PORT/collection_name (in the DB), vinyls is the collection name in the DB"


////
//enable server listening...
////

app.listen(PORT, () => {
    console.log('server listening on port' , PORT);
    console.log('CTRL^C to stop server');
} );

