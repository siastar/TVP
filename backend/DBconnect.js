console.log('...opening /DBconnect.js');

let mongoose = require('mongoose');

//const DBserver = 'localhost:27017/'; //database server address 
//const DBname   = 'vinylstore';       //database name
//vinylstore is the database name in the Mongo cluster
const localDB = 'mongodb://localhost:27017/vinylstore';

class Database {
  constructor() {
    this._connect() //"_connect()" because ".connect" is a mongoose method (reserved keyword)
  };
  
_connect() {
  mongoose.connect(localDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
           console.error('Database connection error:' , err)
       })
  }
};

module.exports = new Database();


