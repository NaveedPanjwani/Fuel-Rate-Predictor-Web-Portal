const express = require('express');
const router = express.Router();

//route: Get api/form,
// description: trying to view the data from a database
// access: private: need web token
router.get('/', (req, res) => res.send('History route'));
module.exports = router;
