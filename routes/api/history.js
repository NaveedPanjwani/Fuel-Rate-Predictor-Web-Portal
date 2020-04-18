const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/user_model');
const Forum = require('../../models/Forum');

//route: Get api/history,
// description: trying to view all the data from a database
// access: private: need web token
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    //let forum = await Forum.find({ username: req.user.username });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  //console.log(req.body);
});
module.exports = router;
