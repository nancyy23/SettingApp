const express = require('express');
const router = express.Router();
const toggleController = require('../controllers/connectionController');

router.get('/api//toggle-states', toggleController.getToggleStates);
router.put('/api/toggle-states/:id', toggleController.updateToggleState);

module.exports = router;
