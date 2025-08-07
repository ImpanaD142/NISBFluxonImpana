const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportedBy: String,
  issue: String,
  itemId: String,
  resolved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', reportSchema);
