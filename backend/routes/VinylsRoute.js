console.log('...opening /routes/VinylsRoute')

const express = require('express');
const vinylRouter = express.Router();
const VinylSchema = require('../model/VinylSchema.js');

// C R U D: Create - Read - Update - Delete 

//mongoose methods are implicitally used without importing mongoose itself because it
//comes already incapsulated in vinylSchema.js, whose instance requires mongoose in the beginning
//(Alice in Objectland)

//Read

vinylRouter.get( '/' , (req , res) => {
    VinylSchema.find({} , (err , response) => {//.find -> mongoose method
        if (err)
            res.status(500).json({message:{
                msgBody : "cannot reach vinyls",
                msgError : true
            }})
        else
            res.status(200).json(response);
    });
});


//Create

vinylRouter.post( '/' , (req , res) => {
    const vinyl = new VinylSchema(req.body); //new instance of the model vinylSchema
    vinyl.save((err, document) => { //.save -> mongoose method

        if (err)
            res.status(500).json({message:{
                msgBody : "cannot add vinyl",
                msgError : true
            }})
        else
            res.status(200).json({message:{
                msgBody : "vinyl succesfully added",
                msgError : false
            }});
    });
});

//Delete

vinylRouter.delete('/:id' , (req , res) => {
    VinylSchema.findByIdAndDelete(req.params.id , err => {
        //.findByIdAndDelete -> mongoose
        // params is in res properties 
        if (err)
            res.status(500).json({message:{
                msgBody : "cannot remove vinyl",
                msgError : true
            }})
        else
            res.status(200).json({message:{
                msgBody : "vinyl succesfully",
                msgError : false
            }});
    });
});

//Update
vinylRouter.put('/:id' , (req , res) => {
    VinylSchema.findOneAndUpdate(req.params.id , // params.id is the element to update
                          req.body , // updated content, findOneandupdate is a mongoose method
                          {runValidators : true},
                          (err , response) => {
                               if (err)
                                   res.status(500).json({message:{
                                       msgBody : "cannot modify vinyl",
                                       msgError : true
                                   }})
                              else
                                  res.status(200).json({message:{
                                      msgBody : "vinyl successfully modified",
                                      msgError : false
                                  }});
                          });
});

module.exports = vinylRouter
