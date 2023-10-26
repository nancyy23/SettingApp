const AutoMode = require('../models/autoModel');

const postAutoSetting = async (req, res) => {
  const { enabled } = req.body;

  isAutoEnabled = enabled;
  const doc = await AutoMode.findOneAndUpdate({}, { enabled }, { new: true, upsert: true });

  res.json({ enabled: doc.enabled });
};

const getAutoSetting = async (req, res) => {
  const doc = await AutoMode.findOne();
  if (doc) {
    isAutoEnabled = doc.enabled;
  }
  res.json({ enabled: isAutoEnabled });
};

module.exports = {
  postAutoSetting,
  getAutoSetting,
};
