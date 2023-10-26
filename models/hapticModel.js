const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  hapticIntensity: Number,
  toggle1: Boolean,
  toggle2: Boolean,
  toggle3: Boolean,
  toggle4: Boolean,
  toggle5: Boolean,
  toggle6: Boolean,
  toggle7: Boolean,
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
