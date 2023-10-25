// Import necessary modules
const express = require('express');
const router = express.Router();
const eyeComfortController = require('../controllers/eyeComfortController');

// Define API routes for Eye Comfort settings
router.get('/api/eye-comfort-setting', eyeComfortController.getEyeComfortSetting);
router.post('/api/eye-comfort-setting', eyeComfortController.setEyeComfortSetting);

module.exports = router;
