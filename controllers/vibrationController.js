// vibrationController.js

const Vibration = require("../models/vibrationModel");

// Save or update vibration settings
exports.saveVibrationSettings = async (req, res) => {
  const { vibrationIntensity, hapticIntensity } = req.body;
  try {
    let settings = await Vibration.findOne();
    if (!settings) {
      settings = new Vibration({
        vibrationIntensity,
        hapticIntensity,
      });
    } else {
      settings.vibrationIntensity = vibrationIntensity;
      settings.hapticIntensity = hapticIntensity;
    }
    await settings.save();
    res.status(200).json(settings);
  } catch (error) {
    console.error("Error while saving vibration settings", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Retrieve vibration settings
exports.getVibrationSettings = async (req, res) => {
  try {
    const settings = await Vibration.findOne();
    if (settings) {
      res.status(200).json(settings);
    } else {
      res.status(200).json({ vibrationIntensity: 50, hapticIntensity: 50 });
    }
  } catch (error) {
    console.error("Error while fetching vibration settings", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
