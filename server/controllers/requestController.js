// controllers/requestController.js
const Donation = require('../models/Donation');

const requestItem = async (req, res) => {
  const { itemId, userId } = req.body;

  try {
    const item = await Donation.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // You can enhance this by linking with the user and setting request status
    item.availability = 'Requested';
    await item.save();

    res.json({ message: 'Item requested successfully', item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Request failed' });
  }
};

module.exports = { requestItem };
