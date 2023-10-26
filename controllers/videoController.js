const VideoSettings = require('../models/videoModel');

const postVideoSetting = async (req, res) => {
  const { enabled } = req.body;

  isVideoEnabled = enabled;
  const doc = await VideoSettings.findOneAndUpdate({}, { enabled }, { new: true, upsert: true });

  res.json({ enabled: doc.enabled });
};

const getVideoSetting = async (req, res) => {
  const doc = await VideoSettings.findOne();
  if (doc) {
    isVideoEnabled = doc.enabled;
  }
  res.json({ enabled: isVideoEnabled });
};

module.exports = {
  postVideoSetting,
  getVideoSetting,
};
