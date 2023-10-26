const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/api/video-setting', videoController.postVideoSetting);
router.get('/api/video-setting', videoController.getVideoSetting);

module.exports = router;
