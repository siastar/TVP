console.log("...opening /model/UserSchema.js");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    secondname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    group: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model("vinyluser", UserSchema);

///////////////////////////////////////////////////////////////////////////////////////////////
// the schema implicitally defines the collection it will search in, by pluralizing the 1st
// parameter in the module.export instruction
//
// in this case the DB collection MUST be called "users"
//                                ^^^^                 ^
//
// https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose
// Mongoose added the ability to specify the collection name under the schema, or as the
// third argument when declaring the model. Otherwise it will use the pluralized version
// given by the name you map to the model.
//
//
///////////////////////////////////////////////////////////////////////////////////////////////
