const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  // Item-related fields
  title: String,
  description: String,
  category: String,
  condition: String,
  availability: {
    type: String,
    default: 'Available', // <-- Default added here
  },
  image: String,

  // Donor-related fields
  name: String,
  email: String,
  amount: Number,

  // Timestamp
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Donation', donationSchema);



