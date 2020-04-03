const router = require('express').Router();
const User = require('../../models/profile_model');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');

router.route('/').get((req, res) => {
  auth,
    Profile.find()
      .then(profile => res.json(profile))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  auth,
    (newProfile = new User({
      fullname: req.body.fullname,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode
    }));
  newProfile
    .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
