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

module.exports = mongoose.model('Product' , ProductSchema);
