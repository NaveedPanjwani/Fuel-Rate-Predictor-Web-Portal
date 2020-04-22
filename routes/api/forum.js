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

//route: Post api/forum/me,
// description: using username from token to put in info into database
// access: private: need web token
// router.route('/').post(passport.authenticate('jwt', {session: false}), async (req, res) => {
//   const { gallons, date } = req.body;
//   let user = await User.findOne({ username: req.user.id });
//   let profile = await Profile.findOne({ username: req.user.id });

//   //Current price per gallon
//   const Current_price_per_gallon = 1.5;

//   //Location Factor
//   let Location_Factor;
//   if (profile.state != 'TX') {
//     Location_Factor = 0.04;
//   } else {
//     Location_Factor = 0.02;
//   }

//   //Rate History Factor
//   let Rate_History_Factor;
//   let forum = await Forum.findOne({ username: req.user.id });
//   if (!forum) {
//     Rate_History_Factor = 0;
//   } else {
//     Rate_History_Factor = 0.01;
//   }

//   //Gallons Requested Factor
//   let Gallons_Requested_Factor;
//   if (gallons > 1000) {
//     Gallons_Requested_Factor = 0.02;
//   } else {
//     Gallons_Requested_Factor = 0.03;
//   }

//   //Company Profit Factor
//   const Company_Profit_Factor = 0.1;

//   //Rate Fluctuation
//   let Rate_Fluctuation = 0.03;
//   const date1 = new Date('05/01/2020');
//   const date2 = new Date('08/30/2020');
//   if (date >= date1 && date <= date2) {
//     Rate_Fluctuation = 0.04;
//   }

//   //suggested and total price
//   const suggested_price =
//     1.5 +
//     1.5 *
//       (Location_Factor -
//         Rate_History_Factor +
//         Gallons_Requested_Factor +
//         Company_Profit_Factor +
//         Rate_Fluctuation);

//   const total_price = suggested_price * gallons;

//   try {
//     forum = await Forum.create({
//       username: user.username,
//       timestamp: Date.now(),
//       gallons: gallons,
//       deliveryAddress: profile.address,
//       date: date,
//       suggested: suggested_price,
//       total: total_price,
//     });
//     return res.status(200).json({ message: 'OK', forum });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

router.post('/', passport.authenticate('jwt', {session: false}), async (req,res) => {
  const {id,address,gallons,date} = req.body;
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

module.exports = router;
