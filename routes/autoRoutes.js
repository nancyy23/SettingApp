const express = require('express');
const router = express.Router();
const autoModeController = require('../controllers/autoController');

router.post('/api/appsetting', autoModeController.postAutoSetting);
router.get('/api/appsetting', autoModeController.getAutoSetting);

module.exports = router;
