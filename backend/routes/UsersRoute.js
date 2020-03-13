console.log("...opening /routes/UsersRoute.js");

const express = require("express");
const router = express.Router();
const UserSchema = require("../model/UserSchema.js");

// C R U D: Create - Read - Update - Delete

//mongoose methods are implicitally used without importing mongoose itself because it
//comes already incapsulated in userSchema.js, whose instance requires mongoose in the beginning
//(Alice in Objectsland)

//LOGIN PROCESS

router.get("/logusers", (req, res) => {
  //console.log("req.query :", req.query);
  //// req.query contains parameteres received via onCreditSubmit from DBApp.js
  UserSchema.findOne({ username: req.query.username }, (err, user) => {
    console.log("found user: ", user);

    if (user == null) {
      user = {};
      console.log("user not found");
    }
    ////condition added to avoid express error when user is null
    ////events.js:174
    ////throw er; // Unhandled 'error' event
    ////^
    ////TypeError: Cannot set property 'username' of null

    if (err) {
      console.log("error: ", err);
      res.status(500).json({
        message: {
          msgBody: "connection error",
          msgError: true,
          err: err
        }
      });
    } else if (
      user.username === req.query.username &&
      user.password === req.query.password
    ) {
      console.log("correct credentials");
      res.status(200).json({
        isAuthenticated: true,
        // comunicate to client that user is authenticated
        user: user
        // sends to client user object
        //the properties isAuthenticated and user are declared directly here
      });
    } else {
      console.log("invalid credentials");
      res.status(200).json({
        isAuthenticated: false // comunicate to client that user i not authenticated
      });
    }
  });

  //   UserSchema.find((err, username) => { //.find -> mongoose method
  // if (err)
  //   res.status(500).json({
  //     message: {
  //       msgBody: "invalid username or password",
  //       msgError: true,
  //       err: err
  //     }
  //       })

  //     else
  //       res.status(200).json({
  //         message: {
  //           msgBody: "reached users",
  //           msgError: false
  //         },
  //         username // allUsers will be referenced in client component GetAllUsers.js
  //       });
  //   });
});

//Create

router.post("/createuser/", (req, res) => {
  const newdata = new UserSchema(req.body); //new instance of the model userSchema
  newdata.save((err, document) => {
    //.save -> mongoose method saves newdata in the DB

    if (err)
      res.status(500).json({
        //the message is delivered to client via res.data.message
        message: {
          msgBody: "cannot add user",
          msgError: true,
          err: err
        }
      });
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

router.delete("/deleteuser/:id", (req, res) => {
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
      });
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
router.put("/updateuser/:id", (req, res) => {
  //console.log('params.id: ', req.params.id)
  console.log("req.body; ", req.body);

  UserSchema.findOneAndUpdate(
    {
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
        });
      else
        res.status(200).json({
          message: {
            msgBody: "user successfully modified",
            msgError: false,
            updated: data
          }
        });
    }
  );
});
module.exports = router;
