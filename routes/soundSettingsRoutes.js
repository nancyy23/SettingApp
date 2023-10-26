// routes/soundSettingsRoutes.js
const express = require('express');
const router = express.Router();
const soundSettingsController = require('../controllers/soundSettingsController');

router.post('/api/update-sound-settings', soundSettingsController.updateSoundSettings);
router.get('/api/get-sound-settings', soundSettingsController.getSoundSettings);

module.exports = router;
