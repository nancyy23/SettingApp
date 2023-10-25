const AirplaneMode = require('../models/airplaneModeModel');

const postAirplaneMode = async (req, res) => {
  const { enabled } = req.body;

  isAirplaneModeEnabled = enabled;
  const doc = await AirplaneMode.findOneAndUpdate({}, { enabled }, { new: true, upsert: true });

  res.json({ enabled: doc.enabled });
};

const getAirplaneMode = async (req, res) => {
  const doc = await AirplaneMode.findOne();
  if (doc) {
    isAirplaneModeEnabled = doc.enabled;
  }
  res.json({ enabled: isAirplaneModeEnabled });
};

module.exports = {
  postAirplaneMode,
  getAirplaneMode,
};
