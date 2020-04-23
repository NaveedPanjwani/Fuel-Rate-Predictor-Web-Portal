const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
  //username: { type: String, required: true },
  //timestamp: { type: Number, required: true, default: Date.now },
  profileID: { type: String},
  address: { type: String, required: true},
  //city: { type: String, required: true, maxlength: 100 },
  //state: {type: String,required: true},
  //zipcode: { type: String, required: true, minlength: 5, maxlength: 9 },
  gallons: { type: Number, required: true },
  date: { type: String, required: true },
  suggested: { type: Number, required: true },
  total: { type: Number, required: true },
});

const Forum = mongoose.model('Forum', ForumSchema);
module.exports = Forum;