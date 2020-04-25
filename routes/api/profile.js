const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user_model');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

//route: GET api/auth,
// description:Test Route
// access: private: need token

router.get('/', auth, async (req, res) => {
  try {
    res.send('hello');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const passport = require('passport');
const passportConfig = require('../../passport');

<<<<<<< HEAD
router.post(
  '/',
  [
    check('username', 'Please include valid email').isLength({ min: 7}),
    check('password', 'Please enter real password')
    .not()
    .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
      }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'Username not in the System' }] });
      }
      const isMatch = await password.localeCompare(user.password);
      if (isMatch != 0) {
        return res.status(402).json({ errors: [{ msg: 'Password is not correct' }] });
      }
      const payload = {
        user: {
          id: username
        }
      };
      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
  });

module.exports = router;
=======
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
>>>>>>> newbranch
