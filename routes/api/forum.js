const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

//const Forum = requre('../../models/Forum');

//route: Post api/form,
// description: trying to put the data in a database
// access: private: need web token

router.post(
  '/',
  [
    check('client_location', '')
      .not()
      .isEmpty(),
    check('competitors_rate', '')
      .not()
      .isEmpty(),
    check('client_history', '')
      .not()
      .isEmpty(),
    check('gallons_requested', '')
      .not()
      .isEmpty(),
    check('Company_profit_margin', '')
      .not()
      .isEmpty(),
    check('seasonal_rate_fluctuation', '')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      client_location,
      competitors_rate,
      client_history,
      gallons_requested,
      Company_profit_margin,
      seasonal_rate_fluctuation
    } = req.body;
    try {
      res.send('Forum route');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    console.log(req.body);
  }
);
module.exports = router;
