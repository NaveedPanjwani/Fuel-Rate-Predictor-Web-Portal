const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/user_model');
const Forum = require('../../models/Forum');

//route: Post api/forum/me,
// description: using username from token to put in info into database
// access: private: need web token

router.post(
  '/me',
  auth,
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
    check('Suggested_Price', 'Leave Blank').isEmpty(),
    check('Total_Amount_Due', 'Leave Blank').isEmpty()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      /*const user = await User.findOne({ user: req.username });
      if (!user) {
        return res
          .status(400)
          .json({ msg: 'There is no profile for this user' });
      }
      */
      let { Gallons_Requested, Delivery_Date } = req.body;
      const username = req.user.username;
      /*
      if (!isNaN(Gallons_Requested)) {
        return res.status(400).json({ msg: 'Not a Number' });
      }
      if (!isValidDate(Delivery_Date)) {
        return res.status(400).json({ msg: 'Not a Date' });
      }
      */
      //const profile = await Profile.find({ req.user.name });
      //const Delivery_Address = profile.address;
      // Will implement Suggested Price later
      // Will implement Total amount Due later
      const user = req.user;
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    //console.log(req.body);
  }
);
module.exports = router;
