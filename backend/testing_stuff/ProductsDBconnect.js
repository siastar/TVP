console.log("...opening");

let mongoose = require("mongoose");

//const DBserver = 'localhost:27017/'; //database server address
//const DBname   = 'vinylstore';       //database name
//vinylstore is the database name in the Mongo cluster
const DBurl = "mongodb://localhost:27017/vinylstore";
//TODO avoid hardcoded url

class ProductDatabase {
  constructor() {
    this._connect(); //"_connect()" because ".connect" is a mongoose method (reserved keyword)
  }

  _connect() {
    mongoose
      .connect(DBurl, {
        //https://mongoosejs.com/docs/deprecations.html
        useUnifiedTopology: true, //
        useNewUrlParser: true, //
        useFindAndModify: false //
      })
      .then(() => {
        console.log("Product Database connection successful");
      })
      .catch(err => {
        console.error("Product Database connection error:", err);
      });
  }
}

module.exports = new ProductDatabase();
