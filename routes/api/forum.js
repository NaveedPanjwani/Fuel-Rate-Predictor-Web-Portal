const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const { check, validationResult } = require("express-validator");

const Forum = require('../../models/Forum');

//route: Post api/form,
// description: trying to put the data in a database
// access: private: need web token

router.post(
  '/',
  [
    auth,
    [
      check('Gallons_Requested', '').isNumeric(),
      check('Delivery_Address', '')
        .not()
        .isEmpty(),
      check('Delivery_Date', '')
        .not()
        .isEmpty(),
      check('Suggested_Price', '').isNumeric(),
      ,
      check('Total_Amount_Due', '').isNumeric()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await item.findById(req.user.id).select('-password');
    const {
      Gallons_Requested,
      Delivery_Address,
      Delivery_Date,
      Suggested_Price,
      Total_Amount_Due
    } = req.body;
    try {
      //res.send('Forum route');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    console.log(req.body);
  }
);
module.exports = router;
