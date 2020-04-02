const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Joi = require('joi');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlength: 7},
    password: {type: String, required: true, minilength: 7, trim: true}, 
},   {
    timestamps: true
});


const User = mongoose.model('User', userSchema);
//const validate = validateUser;
//module.exports =validate;
module.exports = User;