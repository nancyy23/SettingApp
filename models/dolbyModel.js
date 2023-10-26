// models/dolbySettings.js
const mongoose = require('mongoose');

const dolbySchema = new mongoose.Schema({
  isToggled: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('DolbySettings', dolbySchema);
