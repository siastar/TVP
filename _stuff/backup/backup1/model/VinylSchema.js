console.log('...opening /model/VinylSchema.js')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VinylSchema = new Schema({

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

module.exports = mongoose.model('Vinyl' , VinylSchema);
