const router = require('express').Router();
const User = require('../../models/user_model');
const config = require('config');
const jwt = require('jsonwebtoken');
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  const payload = {
    user: {
      id: newUser.username
    }
  };
  jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
    if (err) throw err;
    res.json({ token });
  });
});

module.exports = router;
