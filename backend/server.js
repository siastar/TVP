console.log("...opening /server.js");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//DB
const product = require("./routes/ProductsRoute.js");
const user = require("./routes/UsersRoute.js");
const StoreDBconnect = require("./StoreDBconnect.js");
//const UsersDBconnect = require("./UsersDBconnect .js");

const PORT = process.env.PORT || 3000;

StoreDBconnect;
//connects to database, imported module from ProductsDBconnect.js
//ProductsDBConnect.js contains methods for connection and the Database name
//(like vinylstore)
//const DBurl = 'mongodb://localhost:27017/vinylstore';
//
//the collection in the DB is targeted in the Product Schema module.exports

//UsersDBconnect;
//connects to database, imported module from UsersDBconnect.js
//UsersDBConnect.js contains methods for connection and the Database name
//(like vinylusers)
//const DBurl = 'mongodb://localhost:27017/vinylusers';
//
//the collection in the DB is targeted in the User Schema module.exports

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
app.use("/products", product); 
//console.log('product: ', product);
app.use("/users", user);
//console.log('user: ', user);
////
//enable server listening...
////
app.listen(PORT, () => {
  console.log("server listening on port", PORT);
  console.log("CTRL^C to stop server");
});
