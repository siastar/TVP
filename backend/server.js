console.log('node now running...');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000

//middlewares\\

app.use(bodyParser.urlencoded({extended : true}));
//https://www.npmjs.com/package/body-parser

app.get('/test', (req, res) => {
    res.send('Express server running - this message is hardcoded in server.js');
});//just a test route

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html')
    //__dirname is the project root folder (the one with package.json)
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})
//when data provided through server.html forms returns something like
// {
//     name: 'Yoda',
//     quote: 'Gotta green big ears'
// }

app.post('/records', (req, res) => {
  console.log(req.body)
})
//when data provided through server.html forms returns something like
// {
//   artist: 'Ozric Tentacles',
//   title: 'Pungent Effulgent',
//   year: '1989'
// }

app.listen(PORT, () => {
    console.log('server listening on port' , PORT);
    console.log('CTRL^C to stop server');
} );

