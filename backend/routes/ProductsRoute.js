console.log('...opening /routes/ProductsRoute.js')

const express = require('express');
const router = express.Router();
const ProductSchema = require('../model/ProductSchema.js');

// C R U D: Create - Read - Update - Delete 

//mongoose methods are implicitally used without importing mongoose itself because it
//comes already incapsulated in productSchema.js, whose instance requires mongoose in the beginning
//(Alice in Objectland)

//Read All

router.get('/getdata', (req, res) => {
  //console.log('req.body :', req.body); //
  //console.log('res.body :', res.body); //

  ProductSchema.find((err, allProds) => { //.find -> mongoose method
    if (err)
      res.status(500).json({
        message: {
          msgBody: "cannot reach products",
          msgError: true,
          err: err
        }
      })

    else
      res.status(200).json({
        message: {
          msgBody: "reached products",
          msgError: false
        },
        allProds // allProds will be referenced in client component GetAllProds.js
      });
  });
});

//Create

router.post('/createdata/', (req, res) => {

  const newdata = new ProductSchema(req.body); //new instance of the model productSchema
  newdata.save((err, document) => { //.save -> mongoose method saves newdata in the DB

    if (err)
      res.status(500).json({
        message: {
          msgBody: "cannot add product",
          msgError: true,
          err: err
        }
      })

    else
      res.status(200).json({
        message: {
          msgBody: "product succesfully added",
          msgError: false,
          newdata: newdata
        }
      });
  });
});

//Delete

router.delete('/deletedata/:id', (req, res) => {
  //console.log('req.body :', req.body); //
  //console.log('res.body :', res.body); //
  ProductSchema.findByIdAndDelete(req.params.id, err => {
    //.findByIdAndDelete -> mongoose
    // params is in res properties 
    if (err)
      res.status(500).json({
        message: {
          msgBody: "cannot remove product",
          msgError: true
        }
      })
    else
      res.status(200).json({
        message: {
          msgBody: "product removed",
          msgError: false
        }
      });
  });
});

// Place.findOneAndUpdate({_id:req.params.id}, req.body, function (err, place) {
//   res.send(place);
// });

// Place.findByIdAndUpdate(req.params.id, req.body, function (err, place) {
//   res.send(place);
// });

//Update // to fix, does not update correct record
router.put('/updatedata/:id', (req, res) => {
  //console.log('params.id: ', req.params.id)
  //console.log('req.body; ', req.body) -> e.g.: { artist: 'Pink Floyd', title: 'Meddle' }

  ProductSchema.findOneAndUpdate({
      _id: req.params.id
    }, // params.id is the element to update's _id
    req.body, // updated content, findOneAndUpdate is a mongoose method

    {
      runValidators: true
    },

    (err, data) => {
      if (err)
        res.status(500).json({
          message: {
            msgBody: "cannot modify product",
            msgError: true
          }
        })

      else
        res.status(200).json({
          message: {
            msgBody: "product successfully modified",
            msgError: false,
            updated: data
          }
        });
    });
});
module.exports = router
