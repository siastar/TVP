console.log('...opening /model/ProductSchema.js')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    artist: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    frontcover: {
      type: String,
      required: true
    },
    backcover: {
      type: String,
      required: true
    }

  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model('vinyl', ProductSchema);

///////////////////////////////////////////////////////////////////////////////////////////////
// the schema implicitally defines the collection it will search in, by pluralizing the 1st
// parameter in the module.export instruction 
//
// in this case the DB collection MUST be called "vinyls"
//                                ^^^^                 ^
//
// https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose
// Mongoose added the ability to specify the collection name under the schema, or as the
// third argument when declaring the model. Otherwise it will use the pluralized version
// given by the name you map to the model.
//
//
///////////////////////////////////////////////////////////////////////////////////////////////
