const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

//route: GET api/auth,
// description:Test Route
// access: public:

router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

//route: POST api/auth,
// easy description: login in someone
// description:Authenticate user and get token
// access: public:


router.post('/', 
    [
        check('email','Please include valid email').isEmail(),
        check(
            'password',
            'Please enter real password'
        )
    ],
    async (req, res) => {
    const payload = {
      user: {
        //not finished, I need you muba to replace "email_address"
        //with an actual variable that points to the email, since thats our primary key
        id: email_address
      }
    };
    jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  });

module.exports = router;
