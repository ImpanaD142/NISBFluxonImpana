const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['donor', 'recipient', 'admin'],
    default: 'donor'
  },
  location: String,
  approved: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);


