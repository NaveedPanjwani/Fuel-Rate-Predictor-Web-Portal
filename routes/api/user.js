const router = require('express').Router();
const User = require('../../models/user_model');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res)=>{
    newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;