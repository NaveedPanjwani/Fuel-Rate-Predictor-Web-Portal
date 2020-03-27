const express = require('express');
const router = express.Router();

//@route GET api/profile
//@acess is public
router.get('/', (req, res) => res.send('Profile route'));
module.exports = router;
