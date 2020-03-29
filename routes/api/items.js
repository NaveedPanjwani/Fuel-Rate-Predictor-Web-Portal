const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

//item Model
//const Item = require('../models/Item');
const itemSchema = require('../models/items');
const Item = mangoose.model('item', itemSchema);

//@route GET api/items
// @ desc Get All Items
// @access Public



router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items));
});



module.exports = router;
