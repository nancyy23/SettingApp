const express = require('express');
const router = express.Router();
const eyeComfortModeController = require('../controllers/eyeComfortController');

router.post('/api/eye-comfort-setting', eyeComfortModeController.postEyeComfortSetting);
router.get('/api/eye-comfort-setting', eyeComfortModeController.getEyeComfortSetting);

module.exports = router;
