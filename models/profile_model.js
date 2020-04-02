const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Joi = require('joi');

const ProfileSchema = new Schema({
    fullname: {type: String, required: true, minilength: 7, maxlength: 50},
    address: {type: String, required: true, minilength: 10, maxlength: 100}, 
    address2: {type: String, required: false, minilength: 10, maxlength: 100},
    city: {type: String, required: true, maxlength: 100},
    state: {type: String, required: true, enum: ["AL", "AK", "AZ", "AR","CA","CO","CT","DE","FL",
                                                                                "GA","HI","ID","IL","IA","KS","KY","LA","ME","MD",
                                                                                "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
                                                                                "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
                                                                                "SD","TN","TX","UT","VT","VA","WA","WA","WV","WI","WY"]},
    zipcode: {type: Number, required: true, minilength: 5, maxlength: 9}
});


const Profile = mongoose.model('Profile', ProfileSchema);
//const validate = validateUser;
//module.exports =validate;
module.exports = Profile;