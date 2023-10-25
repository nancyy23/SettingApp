const mongoose = require('mongoose');

const displaySettingSchema = new mongoose.Schema({
  lightMode: Boolean,
  brightnessLevel: Number,
  autoBrightness: Boolean,
});

const DisplaySetting = mongoose.model('DisplaySetting', displaySettingSchema);

module.exports = DisplaySetting;

