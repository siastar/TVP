console.log('...opening /server.js');

const express = require('express');
const mongoose = require('mongoose');

//const localDB = 'mongodb://localhost:27017/vinylstore'
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000

const Database = require ('./DBconnect.js');
// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports

////
//++connection to localDB
////

Database;



// mongoose.connect(localDB, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

// const db = mongoose.connection;

// db.on('connected', function(){  
//     console.log('connected to: ', localDB);
// });

// db.on('error', function(err){
//     console.log('ox connection ERROR on:', localDB);
//     //console.log("Mongoose default connection has occured "+err+" error");
// });


////
//middlewares
////
app.use(bodyParser.urlencoded({
  extended: true
//https://www.npmjs.com/package/body-parser
}));


////
//Routes
////
app.get('/test', (req, res) => {
    res.send('Express server running - this message is hardcoded in server.js');
});//just a test route

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html')
    //__dirname is the project root folder (the one with package.json)
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
//when data provided through server.html forms returns something like
// {
//     name: 'Yoda',
//     quote: 'Gotta green big ears'
// }
})

app.post('/records', (req, res) => {
  console.log(req.body)
//when data provided through server.html forms returns something like
// {
//   artist: 'Ozric Tentacles',
//   title: 'Pungent Effulgent',
//   year: '1989'
// }
})

//
//
//
//enable server listening...
app.listen(PORT, () => {
    console.log('server listening on port' , PORT);
    console.log('CTRL^C to stop server');
} );

