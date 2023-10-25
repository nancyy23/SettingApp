const mongoose = require('mongoose');

const autoSettingSchema = new mongoose.Schema({
  enabled: Boolean,
});

const AutoSetting = mongoose.model('AutoSetting', autoSettingSchema);

module.exports = AutoSetting;
