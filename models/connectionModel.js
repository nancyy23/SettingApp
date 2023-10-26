const mongoose = require('mongoose');

const toggleSchema = new mongoose.Schema({
  name: String,
  isToggled: Boolean,
});

const Toggle = mongoose.model('Toggle', toggleSchema);

module.exports = Toggle;
