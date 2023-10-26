const mongoose = require('mongoose');

const soundSettingsSchema = new mongoose.Schema({
  mediaMute: Boolean,
  notificationsMute: Boolean,
  soundLevel: Number,
  ringtoneLevel: Number,
  notificationLevel: Number,
  alarmLevel: Number,
});

const SoundSettings = mongoose.model('SoundSettings', soundSettingsSchema);

module.exports = SoundSettings;
