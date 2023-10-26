// routes/deviceRoutes.js
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// Get the current device name
router.get('/api/device-name', deviceController.getDeviceName);

// Update the device name
router.post('/api/device-name', deviceController.updateDeviceName);

module.exports = router;
