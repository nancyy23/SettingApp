const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: String,
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
