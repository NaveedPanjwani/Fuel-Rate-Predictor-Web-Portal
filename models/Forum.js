const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  //username: { type: String, required: true },
  gallons: { type: Number, required: true },
  deliveryAddress: { type: String, required: true, default: false },
  date: { type: String, required: true },
  suggested: { type: Number, required: true },
  total: { type: Number, required: true }
});

module.exports = User = mongoose.model('forum', UserSchema);
