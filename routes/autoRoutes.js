const express = require('express');
const router = express.Router();
const autoModeController = require('../controllers/autoController');

router.post('/api/auto-setting', autoModeController.postAutoSetting);
router.get('/api/auto-setting', autoModeController.getAutoSetting);

module.exports = router;
