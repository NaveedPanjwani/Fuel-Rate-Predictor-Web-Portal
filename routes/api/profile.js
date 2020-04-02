const router = require('express').Router();
const User = require('../../models/profile_model');

router.route('/').get((req,res) => {
    Profile.find()
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res)=>{
    newProfile = new User({
        fullname: req.body.fullname,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    });
    newProfile.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;