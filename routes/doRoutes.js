const express = require('express');
const router = express.Router();
const doController = require('../controllers/doController');

router.post('/api/do-setting', doController.updateDoSettings);
router.get('/api/do-setting', doController.getDoSettings);

module.exports = router;
