const express = require('express');
const router = express.Router();
const displayController = require('../controllers/displayController');

// Update display mode (light/dark)
router.post('/api/update-display-mode', displayController.updateDisplayMode);

// Update auto brightness
router.post('/api/update-auto-brightness', displayController.updateAutoBrightness);

// Update brightness level
router.post('/api/update-brightness-level', displayController.updateBrightnessLevel);

// Get current brightness level
router.get('/api/get-brightness', displayController.getBrightness);

module.exports = router;
