const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user_model');
const Forum = require('../../models/Forum');
const Profile = require('../../models/profile_model');
const passport = require('passport');


router.post('/', passport.authenticate('jwt', {session: false}), async (req,res) => {
  const {id,address,gallons,date,suggested,total} = req.body;
  const form = new Forum(req.body);
  console.log("Form Data: " + form)
  form.save(err => {
    if(err)
      res.status(500).json({message: {msgBody: "Error has occurred...", msgError: true, err}}); 
    else{
        req.user.form = form;
        req.user.save(err => {
            if(err)
              res.status(500).json({message: {msgBody: "Error has occurred", msgError: true, err}});
            else
              res.status(200).json({message:{msgBody: "Form Info Success", msgError: false, err}}); 
        });
    }
  });
});
router.get('/get',  passport.authenticate('jwt', {session: false}), async (req,res) => {
  //to populate data
  let forum = await Forum.findOne({ id: req.user.id });
   if (!forum) {
     History_Factor = 0;
   } else {
     History_Factor = 0.01;
   }
   res.send(History_Factor);

  // Forum.findById({id: req.user.id}).populate('form').exec((err,document) => {
  //   if(err)
  //      res.status(500).json({message: {msgBody: "Error has occured", msgError: true}}); 
  //   else {
  //      res.status(500).json({form : document.form, authenticated: true});
  //   }
    
  // })
});

module.exports = router;
