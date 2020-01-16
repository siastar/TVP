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

//localhost:PORT/collection_name (in the DB)"


// ////
// //TEST STUFF
// ////(set as invisible)
// app.get('/test', (req, res) => {
//     res.send('Express server running - this message is hardcoded in server.js');
// });//just a test route

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/server.html')
//     //
//     //
//     //
//     //dirname is the project root folder
// })

// /////
// app.post('/quotes', (req, res) => { //server.html <form action="/quotes" method="POST">
//     console.log(req);
//     console.log(res);
//     console.log(req.body)
    
// //when data provided through server.html forms returns something like
// // {
// //     name: 'Yoda',
// //     quote: 'Gotta green big ears'
// // }
// })


// /////
// app.post('/records', (req, res) => {
//   console.log(req.body)
// //when data provided through server.html forms returns something like
// // {
// //   artist: 'Ozric Tentacles',
// //   title: 'Pungent Effulgent',
// //   year: '1989'
// // }
// })
//END OF TEST STUFF//////////////////

////
//enable server listening...
////

app.listen(PORT, () => {
    console.log('server listening on port' , PORT);
    console.log('CTRL^C to stop server');
} );

