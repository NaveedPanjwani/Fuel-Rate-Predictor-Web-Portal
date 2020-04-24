const express = require('express');
const router = express.Router();
const User = require('../../models/user_model');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const History = require('../../models/History');

const passport = require('passport');
const passportConfig = require('../../passport');

router.post('/', passport.authenticate('jwt', {session: false}), async (req,res) => {
     
      const history = new History(req.body);
      //console.log("NEW HISTORY DATA: ", history)
      history.save(err => {
        if(err)
          res.status(500).json({message: {msgBody: "Error has occurred...", msgError: true}}); 
        else{
            req.user.history.push(history);
            req.user.save(err => {
                if(err)
                  res.status(500).json({message: {msgBody: "Error has occurred", msgError: true}});
                else
                  res.status(200).json({message:{msgBody: "History Array Success", msgError: false}}); 
            });
        }
      });
});

router.get('/gethistory',  passport.authenticate('jwt', {session: false}),(req,res) => {
    //to populate data
    User.findById({_id: req.user._id}).populate('history').exec((err,document) => {
      if(err)
         res.status(500).json({message: {msgBody: "Error has occured", msgError: true, err}}); 
      else {
         res.status(200).json({history : document.history, authenticated: true});
      }
      
    })
});

module.exports = router;