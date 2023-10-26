const EyeComfortMode = require("../models/eyeComfortSettings");

const postEyeComfortSetting = async (req, res) => {
  const { enabled } = req.body;

  isEyeComfortEnabled = enabled;
  const doc = await EyeComfortMode.findOneAndUpdate(
    {},
    { enabled },
    { new: true, upsert: true }
  );

  res.json({ enabled: doc.enabled });
};

const getEyeComfortSetting = async (req, res) => {
  const doc = await EyeComfortMode.findOne();
  if (doc) {
    isEyeComfortEnabled = doc.enabled;
  }
  res.json({ enabled: isEyeComfortEnabled });
};

module.exports = {
  postEyeComfortSetting,
  getEyeComfortSetting,
};
