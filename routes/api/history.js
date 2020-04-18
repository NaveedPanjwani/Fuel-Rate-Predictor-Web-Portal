const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Forum = require('../../models/Forum');

//route: Get api/history,
// description: trying to view all the data from a database
// access: private: need web token

router.get('/me', auth, async (req, res) => {
  try {
    let forum = await Forum.find({ username: req.user.username }).sort({
      timestamp: 1,
    });
    res.send(forum);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  //console.log(req.body);
});
module.exports = router;
