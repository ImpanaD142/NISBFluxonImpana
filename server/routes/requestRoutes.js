// routes/request.js
const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// Example handler for requesting an item
router.post('/', async (req, res) => {
  const { itemId, userId } = req.body;

  try {
    const donation = await Donation.findById(itemId);
    if (!donation) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (donation.availability !== 'Available') {
      return res.status(400).json({ message: 'Item is not available' });
    }

    donation.availability = 'Requested';
    await donation.save();

    return res.json({ message: 'Item requested successfully!' });
  } catch (error) {
    console.error('Error requesting item:', error);
    return res.status(500).json({ message: 'Request failed due to server error.' });
  }
});

module.exports = router;

