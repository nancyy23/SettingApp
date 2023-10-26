const mongoose = require("mongoose");

const vibrationSchema = new mongoose.Schema({
  vibrationIntensity: Number,
  hapticIntensity: Number,
});

module.exports = mongoose.model("Vibration", vibrationSchema);
