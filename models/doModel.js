const mongoose = require('mongoose');

const doSchema = new mongoose.Schema({
  toggle1: Boolean,
  toggle2: Boolean,
  toggle3: Boolean,
});

const Do = mongoose.model('Do', doSchema);

module.exports = Do;
