const Donation = require('../models/Donation');
const User = require('../models/User');
const Report = require('../models/Report');

// Approve or Deny a donation
const updateDonationApproval = async (req, res) => {
  const { id, approved } = req.body;
  try {
    await Donation.findByIdAndUpdate(id, { approved });
    res.json({ message: 'Donation status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update donation' });
  }
};

// Approve or Deny a user
const updateUserApproval = async (req, res) => {
  const { id, approved, role } = req.body;
  try {
    await User.findByIdAndUpdate(id, { approved, role });
    res.json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Mark report as resolved
const resolveReport = async (req, res) => {
  const { id } = req.body;
  try {
    await Report.findByIdAndUpdate(id, { resolved: true });
    res.json({ message: 'Report resolved' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to resolve report' });
  }
};

// Get pending data
const getAdminData = async (req, res) => {
  try {
    const donations = await Donation.find({ approved: false });
    const users = await User.find({ approved: false });
    const reports = await Report.find({ resolved: false });
    res.json({ donations, users, reports });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch admin data' });
  }
};

module.exports = {
  updateDonationApproval,
  updateUserApproval,
  resolveReport,
  getAdminData
};
