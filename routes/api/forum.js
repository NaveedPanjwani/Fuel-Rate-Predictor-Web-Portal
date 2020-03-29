const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);

    res.send('Forum route');
  }
);
module.exports = router;
