const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user_model');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/profile_model');

//route: POST api/auth,
// easy description: login in someone
// description:Authenticate user and get token
// access: public:

router.post('/', auth, async (req, res) => {
  try {
    let user = await Profile.findOne({ username: req.user.id });
    if (!user) {
      const { fullname, address, address2, city, state, zipcode } = req.body;
      profile = await Profile.create({
        username: req.user.id,
        fullname,
        address,
        address2,
        city,
        state,
        zipcode,
      });
    }
    if (user) {
    }
    return res.status(200).json({ message: 'OK', forum });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;
