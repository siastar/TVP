console.log('...opening /routes/ProductsRoute.js')

const express = require('express');
const router = express.Router();
const ProductSchema = require('../model/ProductSchema.js');

// C R U D: Create - Read - Update - Delete 

//mongoose methods are implicitally used without importing mongoose itself because it
//comes already incapsulated in productSchema.js, whose instance requires mongoose in the beginning
//(Alice in Objectland)

//Read

router.get( '/' , (req , res) => {
    ProductSchema.find({} , (err , response) => {//.find -> mongoose method
        if (err)
            res.status(500).json({message:{
                msgBody : "cannot reach products",
                msgError : true
            }})
        else
            res.status(200).json(response);
    });
});


//Create

router.post( '/' , (req , res) => {
    const product = new ProductSchema(req.body); //new instance of the model productSchema
    product.save((err, document) => { //.save -> mongoose method

        if (err)
            res.status(500).json({message:{
                msgBody : "cannot add product",
                msgError : true
            }})
        else
            res.status(200).json({message:{
                msgBody : "product succesfully added",
                msgError : false
            }});
    });
});

//Delete

router.delete('/:id' , (req , res) => {
    ProductSchema.findByIdAndDelete(req.params.id , err => {
        //.findByIdAndDelete -> mongoose
        // params is in res properties 
        if (err)
            res.status(500).json({message:{
                msgBody : "cannot remove product",
                msgError : true
            }})
        else
            res.status(200).json({message:{
                msgBody : "product removed",
                msgError : false
            }});
    });
});

//Update

router.put('/:id' , (req , res) => {
    ProductSchema.findOneAndUpdate(req.params.id , // params.id is the element to update
                          req.body , // updated content, findOneandupdate is a mongoose method
                          {runValidators : true},
                          (err , response) => {
                               if (err)
                                   res.status(500).json({message:{
                                       msgBody : "cannot modify product",
                                       msgError : true
                                   }})
                              else
                                  res.status(200).json({message:{
                                      msgBody : "product successfully modified",
                                      msgError : false
                                  }});
                          });
});

module.exports = router
