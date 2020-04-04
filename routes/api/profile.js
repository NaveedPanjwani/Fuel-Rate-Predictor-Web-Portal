const router = require('express').Router();
const User = require('../../models/profile_model');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');
const Profile = require('../../models/profile_model');
const { check, validationResult } = require('express-validator');

router.route('/').get((req, res) => {
  auth,
    Profile.find()
      .then(profile => res.json(profile))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(
  [
    check('fullname', '').isLength({ min: 5, max: 50 }),
    check('address', '').isLength({ min: 7, max: 100 }),
    check('address2', '').isLength({ max: 100 }),
    check('city', '')
      .not()
      .isEmpty(),
    check('state', '')
      .not()
      .isEmpty(),
    check('zipcode', '')
      .isNumeric()
      .isLength({ min: 5, max: 9 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, address, address2, city, state, zipcode } = req.body;
    try {
      /*let user = await User.findOne({username});

        if(user){
            return res.status(401).json({message: 'Username or password is taken'})
        }*/

      profile = await Profile.create({
        fullname,
        address,
        address2,
        city,
        state,
        zipcode
      });
      return res.status(200).json({ message: 'OK', profile });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);

module.exports = router;
