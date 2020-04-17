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

//route: POST api/auth,
// easy description: login in someone
// description:Authenticate user and get token
// access: public:

router.post(
  '/',
  [
    check('username', 'Please include valid email').isLength({ min: 7 }),
    check('password', 'Please enter real password').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Username not in the System' }] });
      }
      const isMatch = await password.localeCompare(user.password);
      if (isMatch != 0) {
        return res
          .status(402)
          .json({ errors: [{ msg: 'Password is not correct' }] });
      }
      const payload = {
        user: {
          id: username,
        },
      };
      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
