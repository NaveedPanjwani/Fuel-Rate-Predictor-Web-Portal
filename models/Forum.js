const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  client_location: {
    type: String,
    required: true
  },
  competitors_rate: {
    type: Integer,
    required: true
  },
  client_history: {
    type: Integer,
    required: true
  },
  gallons_requested: {
    type: Integer,
    required: true
  },
  Company_profit_margin: {
    type: Integer,
    required: true
  },
  seasonal_rate_fluctuation: {
    type: Integer,
    required: true
  }
});

module.exports = User = mongoose.model('user', UserSchema);
