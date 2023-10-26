// vibrationRoutes.js

const express = require("express");
const router = express.Router();
const vibrationController = require("../controllers/vibrationController");

router.post("/api/vibration-settings", vibrationController.saveVibrationSettings);

router.get("/api/vibration-settings", vibrationController.getVibrationSettings);

module.exports = router;
