const express = require('express');
const router = express.Router();
const {
  updateDonationApproval,
  updateUserApproval,
  resolveReport,
  getAdminData
} = require('../controllers/adminController');

router.post('/donation/approve', updateDonationApproval);
router.post('/user/approve', updateUserApproval);
router.post('/report/resolve', resolveReport);
router.get('/dashboard', getAdminData);

module.exports = router;
