const mongoose = require('mongoose');

const eyeComfortSchema = new mongoose.Schema({
  enabled: Boolean,
});

const EyeComfort = mongoose.model('EyeComfort', eyeComfortSchema);

module.exports = EyeComfort;
