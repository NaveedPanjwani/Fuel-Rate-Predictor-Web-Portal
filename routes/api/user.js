const router = require('express').Router();

const passport = require('passport');
const passportConfig = require('../../passport');

const User = require('../../models/user_model');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require("express-validator");

const signToken = userID => {
  return jwt.sign({
    iss : "SDProject",
    sub : userID
  }, "SDProject", {expiresIn : "1h"});
}


// REGISTER ROUTE
router.post('/register',(req, res) => {
  const { username, password } = req.body;
  User.findOne({username}, (err, user) => {
    if(err)
      res.status(500).json({message: {msgBody: "Error has occured", msgError: true}});
    if(user)
      res.status(400).json({message: {msgBody: "Username is already taken", msgError: true}});
    else{
      const newUser = new User({username, password});
      newUser.save(err => {
         if(err)
            res.status(500).json({message: {msgBody: "Error has occured", msgError: true}})
          else  
            res.status(201).json({message: {msgBody: "Account successfully created", msgError: false}})
      })
    }

  });
});


//LOGIN ROUTE
router.post('/login', passport.authenticate('local',{session: false}),(req,res) => {
    if(req.isAuthenticated()){
       const {_id, username} = req.user;
       const token = signToken(_id);
       res.cookie('access_token', token, {httpOnly: true, sameSite: true});
       res.status(200).json({isAuthenticated : true, user : {username}})
    }

});

//LOG OUT ROUTE
router.get('/logout', passport.authenticate('jwt',{session: false}),(req,res) => {
      res.clearCookie('access_token')
      res.json({ user: {username: ""},success: true})
});


//FORM ROUTE

//GET FORM DATA




//State
router.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
  const {username} = req.user;
  res.status(200).json({isAuthenticated : true, user : {username}});
});


// router.route('/').get(async (req, res) => {
//   try {
//     const users = await User.find().select('-password');
//     res.send(users);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }  
//   });

// router.route('/add').post(
//   [
//     check('username', 'user is required and must bt 7 or more characters').isLength({ min: 7}),
//     check('password', 'Please enter a password with 7 or more characters').isLength({ min: 7})
    
//   ],
//   async (req, res)=>{

//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//       return res.status(400).json({errors: errors.array()})
//     }

//     const {username, password} = req.body
//     try {
//         let user = await User.findOne({username});

//         if(user){
//             return res.status(401).json({message: 'Username or password is taken'})
//         }

//         user = await User.create({
//             username, password
//         })
//         return res.status(200).json({ message: 'OK', user });
//     } catch (error) {
//         res.status(500).json({error})
//     }
//     const payload = {
//       user: {
//         id: user.username
//       }
//     };
//     jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
//       if (err) throw err;
//       res.json({ token });
//     });
// });

module.exports = router;