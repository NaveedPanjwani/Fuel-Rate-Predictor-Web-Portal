const router = require('express').Router();
const User = require('../../models/user_model');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require("express-validator");

router.route('/').get(async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }  
  });

router.route('/add').post(
  [
    check('username', 'user is required and must bt 7 or more characters').isLength({ min: 7}),
    check('password', 'Please enter a password with 7 or more characters').isLength({ min: 7})
    
  ],
  async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }

    const {username, password} = req.body
    try {
        let user = await User.findOne({username});

        if(user){
            return res.status(401).json({message: 'Username or password is taken'})
        }

        user = await User.create({
            username, password
        })
        return res.status(200).json({ message: 'OK', user });
    } catch (error) {
        res.status(500).json({error})
    }
    const payload = {
      user: {
        id: user.username
      }
    };
    jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
});

module.exports = router;
