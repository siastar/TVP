console.log('node now running...');

const express = require('express');
const app = express();
const PORT = 3000

app.get('/test', (req, res) => {
    res.send('Express server running');
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


app.listen(PORT, () => {
    console.log('server listening on port' , PORT);
    console.log('CTRL^C to stop server');
} );

