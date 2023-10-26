const express = require('express');
const router = express.Router();
const displayController = require('../controllers/displayController');

router.post('/api/update-display-mode', displayController.updateDisplayMode);

router.post('/api/update-auto-brightness', displayController.updateAutoBrightness);

router.post('/api/update-brightness-level', displayController.updateBrightnessLevel);

router.get('/api/get-brightness', displayController.getBrightness);

module.exports = router;
