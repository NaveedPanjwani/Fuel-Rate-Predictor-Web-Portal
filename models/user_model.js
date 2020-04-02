const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Joi = require('joi');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlength: 5},
    password: {type: String, required: true, minilength: 7},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true}
},   {
    timestamps: true
});
/*function validateUser(user) {
    const Schema = {
        name: Joi.string().min(5).max(50).required().unique(),
        firstname: Joi.string().required(),
        lastname: Joi.string().require(),
        password: Joi.string().min(7).max(255).required()
    };
    return Joi.validate(user, Schema);
}*/

const User = mongoose.model('User', userSchema);
//const validate = validateUser;
//module.exports =validate;
module.exports = User;