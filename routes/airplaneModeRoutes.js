
const express = require('express');
const router = express.Router();
const airplaneModeController = require('../controllers/airplaneModeController');

router.post('/api/appsetting', airplaneModeController.postAirplaneMode);
router.get('/api/appsetting', airplaneModeController.getAirplaneMode);

module.exports = router;

