const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/hapticController');

// Update settings
router.post('/api/appsetting', settingsController.updateSettings);

// Get settings
router.get('/api/appsetting', settingsController.getSettings);

module.exports = router;
