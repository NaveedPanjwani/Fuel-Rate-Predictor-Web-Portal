const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user_model');
const Forum = require('../../models/Forum');
<<<<<<< HEAD

//route: Post api/forum/me,
// description: using username from token to put in info into database
// access: private: need web token

router.route('/me').post(
  [
    //check('username', 'Please enter a number')
    //.not()
    //.isEmpty(),
    check('Gallons_Requested', 'Please enter a number').isNumeric(),
    //check('Delivery_Address', 'Please put address in Profile Management')
    //.not()
    //.isEmpty(),
    check('Delivery_Date', 'Please select Date')
      .not()
      .isEmpty(),
    //check('Suggested_Price', 'Leave Blank').isEmpty(),
    //check('Total_Amount_Due', 'Leave Blank').isEmpty()
  ],
  async (req, res)=>{
    /*const errors = validationResult(req);
    if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
    }*/
    const {gallons, deliveryAddress, date, suggested, total} = req.body
    try {
    /*let user = await User.findOne({username});
    if(user){
        return res.status(401).json({message: 'Username or password is taken'})
    }*/

        forum = await Forum.create({
          gallons, deliveryAddress, date, suggested, total
        })
        return res.status(200).json({ message: 'OK', forum });
    } catch (error) {
        res.status(500).json({error})
}
  });
module.exports = router;
=======
const Profile = require('../../models/profile_model');
const passport = require('passport');

router.post('/', passport.authenticate('jwt', {session: false}), async (req,res) => {
  
  const form = new Forum(req.body);
  console.log("FORM DATA: " + form)
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

router.get('/getforum',  passport.authenticate('jwt', {session: false}),(req,res) => {
  //to populate data
  User.findById({_id: req.user._id}).populate('forum').exec((err,document) => {
    if(err)
       res.status(500).json({message: {msgBody: "Error has occured", msgError: true, err}}); 
    else {
       res.status(200).json({form : document.form, authenticated: true});
    }
    
  })
});

module.exports = router;



// router.get('/get',  passport.authenticate('jwt', {session: false}),async (req,res) => {
  //
  //var userID = "5ea0f2840a6b85f93f4975ed";
  // var Profile_ID = JSON.stringify(req.user.profile)
  // result = Profile_ID.replace('"', '');
  // result = result.replace('"', '');
  // console.log("req.user.profile: " + result)
  // const total = Forum.collection.countDocuments({profileID: result})
  //     .then(data => console.log("Total: " + data));

//   var Profile_ID = JSON.stringify(req.user.profile)
//   result = Profile_ID.replace('"', '');
//   result = result.replace('"', '');
//   console.log("req.user.profile: " + result)
//   const total = Forum.collection.countDocuments({profileID: result}).then(data => {
//       console.log(data)
//       if(data > 0){
//         res.send('success')
//         console.log('success')
//       }
//   });
// });
>>>>>>> newbranch
