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
router.route('/me').get(auth, async (req, res) => {
  let user = await User.findOne({ username: req.user.id });
  console.log(user.username);
  res.send('hello');
});
router.route('/me').post(
  [
    //check('username', 'Please enter a number')
    //.not()
    //.isEmpty(),
    //check('Gallons_Requested', 'Please enter a number').isNumeric(),
    //check('Delivery_Address', 'Please put address in Profile Management')
    //.not()
    //.isEmpty(),
    //check('Delivery_Date', 'Please select Date').not().isEmpty(),
    //check('Suggested_Price', 'Leave Blank').isEmpty(),
    //check('Total_Amount_Due', 'Leave Blank').isEmpty()
  ],
  auth,
  async (req, res) => {
    /*const errors = validationResult(req);
    if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
    }*/
    try {
      forum = await Forum.create({
        gallons,
        deliveryAddress,
        date,
        suggested,
        total,
      });
      return res.status(200).json({ message: 'OK', forum });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);
module.exports = router;
