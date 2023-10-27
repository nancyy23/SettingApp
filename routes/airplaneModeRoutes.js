
const express = require('express');
const router = express.Router();
const airplaneModeController = require('../controllers/airplaneModeController');

router.post('/api/airplanemodes', airplaneModeController.postAirplaneMode);
router.get('/api/airplanemodes', airplaneModeController.getAirplaneMode);

module.exports = router;

