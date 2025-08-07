const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Donation = require('../models/Donation');

// Storage setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

/**
 * @route   POST /api/donations
 * @desc    Upload a new donation item with image
 */
router.post('/', upload.single('image'), async (req, res) => {
  const { title, description, category, condition, availability } = req.body;
  const imagePath = req.file ? req.file.filename : null;

  try {
    const newDonation = new Donation({
      title,
      description,
      category,
      condition,
      availability,
      image: imagePath
    });

    await newDonation.save();
    res.json({ message: 'Donation received and saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save donation' });
  }
});

/**
 * @route   GET /api/donations
 * @desc    Fetch all donation items
 */
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
