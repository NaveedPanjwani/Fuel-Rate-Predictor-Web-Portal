const express = require('express');
const router = express.Router();

//route: Post api/form,
// description: trying to put the data in a database
// access: private: need web token
router.get('/', (req, res) => {
  console.log(req.body);
  res.send('Forum route');
});
module.exports = router;
