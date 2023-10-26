const express = require('express');
const router = express.Router();
const displayController = require('../controllers/displayController');

router.post('/api/appsetting', displayController.updateDisplayMode);

router.post('/api/appsetting', displayController.updateAutoBrightness);

router.post('/api/appsetting', displayController.updateBrightnessLevel);

router.get('/api/appsetting', displayController.getBrightness);

module.exports = router;
