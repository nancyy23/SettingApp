const Do = require('../models/doModel');

const getDoSetting = async (req, res) => {
  try {
    const doc = await Do.findOne();
    res.json(doc);
  } catch (error) {
    console.error('Error while fetching Do Not Disturb settings', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateDoSetting = async (req, res) => {
  const { toggle1, toggle2, toggle3 } = req.body;

  try {
    const doc = await Do.findOneAndUpdate({}, { toggle1, toggle2, toggle3 }, { new: true, upsert: true });
    res.json(doc);
  } catch (error) {
    console.error('Error while updating Do Not Disturb settings', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getDoSetting,
  updateDoSetting,
};
