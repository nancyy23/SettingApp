const express = require('express');
const router = express.Router();
const doController = require('../controllers/doController');

router.get('/api/do-setting', doController.getDoSetting);
router.post('/api/do-setting', doController.updateDoSetting);

module.exports = router;
