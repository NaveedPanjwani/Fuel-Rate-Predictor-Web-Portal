const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Gallons_Requested: {type: Number, required: true},
  Delivery_Address: {type: Boolean, required: true, default: false},
  Delivery_Date: {type: Date,required: true },
  Suggested_Price: {type: Number, required: true},
  Total_Amount_Due: {type: Number,required: true}
});

module.exports = User = mongoose.model('user', UserSchema);
