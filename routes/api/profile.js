const router = require('express').Router();
const Profile = require('../../models/profile_model');

router.route('/').get((req,res) => {
    Profile.find()
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/add').post(async (req, res)=>{
    const {fullname, address, address2, city, state, zipcode} = req.body
    try {
        /*let user = await User.findOne({username});

        if(user){
            return res.status(401).json({message: 'Username or password is taken'})
        }*/

        profile = await Profile.create({
            fullname, address, address2, city, state, zipcode
        })
        return res.status(200).json({ message: 'OK', profile });
    } catch (error) {
        res.status(500).json({error})
    }

});

module.exports = router;