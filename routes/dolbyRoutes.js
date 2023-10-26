const express = require('express');
const router = express.Router();
const dolbyController = require('../controllers/dolbyController');

router.get('/api/dolby-settings', dolbyController.getDolbySettings);

router.post('/api/dolby-settings', dolbyController.updateDolbySettings);

module.exports = router;
