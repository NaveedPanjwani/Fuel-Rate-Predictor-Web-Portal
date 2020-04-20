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

//route: POST api/auth,
// easy description: login in someone
// description:Authenticate user and get token
// access: public:

// router.post('/',auth, async (req, res) => {
//   try {
//     let user = await Profile.findOne({ username: req.user.id });
//     if (!username) {
//       const { fullname, address, address2, city, state, zipcode } = req.body;
//       profile = await Profile.create({
//         username: req.user.id,
//         fullname,
//         address,
//         address2,
//         city,
//         state,
//         zipcode,
//       });
//     }
//     if (username) {
//       //we need to display the contents of the profile on the page.
//     }
//     return res.status(200).json({ message: 'OK', forum });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

router.post('/', passport.authenticate('jwt', {session: false}),(req,res) => {
      const profile = new Profile(req.body);
      profile.save(err => {
        if(err)
          res.status(500).json({message: {msgBody: "Error has occured", msgError: true}}); 
        else{
            req.user.profile.push(profile);
            req.user.save(err => {
                if(err)
                  res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
                else
                  res.status(200).json({message:{msgBody: "Profile Success", msgError: false}}); 
            });
        }
      });
});


// router.get('/profiles', passport.authenticate('jwt', {session: false}),(req,res) => {
//     //to populate data
//     User.findById({_id: req.user._id}).populate('profile').exec((err,document) => {
//       if(err)
//          res.status(500).json({message: {msgBody: "Error has occured", msgError: true}}); 
//       else {
//          res.status(500).json({profile : document.profile, authenticate: true});
//       }
      
//     })
// });



module.exports = router;
