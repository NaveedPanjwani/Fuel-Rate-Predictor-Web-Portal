const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');

//item Model
//const Item = require('../models/Item');

//Hey Muba put this under your post request that youll create to put data into the database, From: Naveed
router.post('/', (req, res) => {
  const payload = {
    user: {
      //not finished, I need you muba to replace "email_address"
      //with an actual variable that points to the email, since thats our primary key
      id: email_address
    }
  };
  jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
    if (err) throw err;
    res.json({ token });
  });
});

module.exports = router;
