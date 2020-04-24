const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  gallons: { type: Number, required: true },
  address: { type: String, required: true, default: false },
  date: { type: String, required: true },
  suggested: { type: Number, required: true },
  total: { type: Number, required: true },
  profileID : {type: String}
});

const History = mongoose.model('History', HistorySchema);
module.exports = History;