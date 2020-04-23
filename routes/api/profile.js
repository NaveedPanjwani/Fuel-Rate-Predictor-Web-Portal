const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user_model');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/profile_model');

const passport = require('passport');
const passportConfig = require('../../passport');

router.post('/', passport.authenticate('jwt', {session: false}), async (req,res) => {
     
      const profile = new Profile(req.body);
      console.log("PROFILE DATA: " + profile)
      profile.save(err => {
        if(err)
          res.status(500).json({message: {msgBody: "Error has occurred...", msgError: true}}); 
        else{
            req.user.profile = profile;
            req.user.save(err => {
                if(err)
                  res.status(500).json({message: {msgBody: "Error has occurred", msgError: true}});
                else
                  res.status(200).json({message:{msgBody: "Profile Success", msgError: false}}); 
            });
        }
      });
});

router.get('/getprofile',  passport.authenticate('jwt', {session: false}),(req,res) => {
    //to populate data
    User.findById({_id: req.user._id}).populate('profile').exec((err,document) => {
      if(err)
         res.status(500).json({message: {msgBody: "Error has occured", msgError: true, err}}); 
      else {
         res.status(200).json({profile : document.profile, authenticated: true});
      }
      
    })
});

module.exports = router;
