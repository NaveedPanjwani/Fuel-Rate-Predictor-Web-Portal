const express = require('express');
const router = express.Router();

//@route GET api/auth
//@acess is public
router.get('/', (req, res) => res.send('Auth route'));
module.exports = router;
