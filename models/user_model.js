const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Joi = require('joi');
const bcrypt = require('bcrypt') //to encrypt passwords

const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlength: 7},
    password: {type: String, required: true, minlength: 7, trim: true}, 
    profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
    form: {type: mongoose.Schema.Types.Object, ref: "Form"},
},   {
    timestamps: true
});

/* 
The code below is used to hash passwords with bcrypt

EXAMPLE: 
Without bcrypt: 
user:
_id: "5e8f7d2e90b203101a59b66a"
username: "testing12"
password: "testing12"
createdAt: "2020-04-09T19:53:18.278Z"
updatedAt: "2020-04-09T19:53:18.278Z"
__v: 0

With bcrypt: 
user:
_id: "5e8f7d873786d410434bd1b7"
username: "hashedpassword"
password: "$2b$10$MdGIichj/kZ2LtUYPxNlCOrXbE.u/sYL.FHV60QF5jGNBnf9WF/pC"
createdAt: "2020-04-09T19:54:47.444Z"
updatedAt: "2020-04-09T19:54:47.444Z"

NOTE: password is hashed on the second example.

*/
userSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10, (err, passwordHash) => {
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    })
})

userSchema.methods.comparePassword = function(password, cb){
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
    });
}


const User = mongoose.model('User', userSchema);
//const validate = validateUser;
//module.exports =validate;
module.exports = User;