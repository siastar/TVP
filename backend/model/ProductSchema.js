console.log('...opening /model/ProductSchema.js')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    artist:{
        type: String,
        required: true
     },
    title:{
        type: String,
        required: true
    },
     year:{
        type: String,
        required: true
     },
     price:{
        type: String,
        required: true
     }, 
     frontcover:{
        type: String,
        required: true
     },
     backcover:{
        type: String,
        required: true
     }
    
});

//console.log('Productschema:' , ProductSchema)

module.exports = mongoose.model('vinyl' , ProductSchema);

// the schema implicitally defines the collection it will search in, by pluralizing the 1st
// parameter in the module.export instruction 
//
// in this case the collection MUST be called "vinyls"
//                             ^^^^                 ^

