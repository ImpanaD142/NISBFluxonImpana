// backend/routes/items.js
const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// GET all available items
router.get('/', async (req, res) => {
  try {
    const items = await Donation.find({ availability: 'Available' });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/items/request
router.post('/request', async (req, res) => {
  const { itemId } = req.body;
  try {
    const item = await Donation.findById(itemId);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    if (item.availability !== 'Available') {
      return res.status(400).json({ message: 'Already requested or donated' });
    }

    item.availability = 'Requested';
    await item.save();

    res.json({ message: 'Item requested successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
