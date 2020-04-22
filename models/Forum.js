const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema([{
  //username: { type: String, required: true },
  //timestamp: { type: Number, required: true, default: Date.now },
  id: { type: String},
  address: { type: String, maxlength: 100 },
  //city: { type: String, required: true, maxlength: 100 },
  //state: {type: String,required: true},
  //zipcode: { type: String, required: true, minlength: 5, maxlength: 9 },
  gallons: { type: Number, required: true },
  date: { type: Date, required: true },
  //suggested: { type: Number, required: true },
  //total: { type: Number, required: true },
}]);

module.exports = User = mongoose.model('forum', UserSchema);
