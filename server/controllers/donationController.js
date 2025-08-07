const Donation = require('../models/Donation');

const donate = async (req, res) => {
  try {
    const { name, email, amount } = req.body;

    const donation = new Donation({ name, email, amount });
    await donation.save();

    res.status(201).json({ message: 'Donation received successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Donation failed. Please try again.' });
  }
};

module.exports = {
  donate,
};

