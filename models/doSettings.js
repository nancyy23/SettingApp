const mongoose = require('mongoose');

const doSettingsSchema = new mongoose.Schema({
  toggle1: Boolean,
  toggle2: Boolean,
  toggle3: Boolean,
});

const doSettings = mongoose.model('doSettings', doSettingsSchema);

module.exports = doSettings;
