const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  Gallons_Requested: { type: Number, required: true },
  Delivery_Address: { type: String, required: true, default: false },
  Delivery_Date: { type: Date, required: true },
  Suggested_Price: { type: Number, required: true },
  Total_Amount_Due: { type: Number, required: true }
});

module.exports = User = mongoose.model('forum', UserSchema);
