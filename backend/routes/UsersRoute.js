console.log('...opening')

const express = require('express');
const router = express.Router();
const UserSchema = require('../model/UserSchema.js');

// C R U D: Create - Read - Update - Delete 

//mongoose methods are implicitally used without importing mongoose itself because it
//comes already incapsulated in userSchema.js, whose instance requires mongoose in the beginning
//(Alice in Objectland)

//Read All

router.get('/getusers', (req, res) => {
  //console.log('req.body :', req.body); //
  //console.log('res.body :', res.body); //

  UserSchema.find((err, allUsers) => { //.find -> mongoose method
    if (err)
      res.status(500).json({
        message: {
          msgBody: "cannot reach users",
          msgError: true,
          err: err
        }
      })

    else
      res.status(200).json({
        message: {
          msgBody: "reached users",
          msgError: false
        },
        allUsers // allUsers will be referenced in client component GetAllUsers.js
      });
  });
});

//Create

router.post('/createuser/', (req, res) => {

  const newdata = new UserSchema(req.body); //new instance of the model userSchema
  newdata.save((err, document) => { //.save -> mongoose method saves newdata in the DB

    if (err)
      res.status(500).json({
        message: {
          msgBody: "cannot add user",
          msgError: true,
          err: err
        }
      })

    else
      res.status(200).json({
        message: {
          msgBody: "user succesfully added",
          msgError: false,
          newdata: newdata
        }
      });
  });
});

//Delete

router.delete('/deleteuser/:id', (req, res) => {
  //console.log('req.body :', req.body); //
  //console.log('res.body :', res.body); //
  UserSchema.findByIdAndDelete(req.params.id, err => {
    //.findByIdAndDelete -> mongoose
    // params is in res properties 
    if (err)
      res.status(500).json({
        message: {
          msgBody: "cannot remove user",
          msgError: true
        }
      })
    else
      res.status(200).json({
        message: {
          msgBody: "user removed",
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
router.put('/updateuser/:id', (req, res) => {
  //console.log('params.id: ', req.params.id)
  //console.log('req.body; ', req.body)

  UserSchema.findOneAndUpdate({
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
            msgBody: "cannot modify user",
            msgError: true
          }
        })

      else
        res.status(200).json({
          message: {
            msgBody: "user successfully modified",
            msgError: false,
            updated: data
          }
        });
    });
});
module.exports = router
