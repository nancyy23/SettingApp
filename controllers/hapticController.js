const Settings = require('../models/hapticModel');

exports.updateSettings = async (req, res) => {
  try {
    const { hapticIntensity, toggle1, toggle2, toggle3, toggle4, toggle5, toggle6, toggle7 } = req.body;

    // Update or create the settings
    const settings = await Settings.findOneAndUpdate({}, {
      hapticIntensity,
      toggle1,
      toggle2,
      toggle3,
      toggle4,
      toggle5,
      toggle6,
      toggle7,
    }, { upsert: true, new: true });

    res.json(settings);
  } catch (error) {
    console.error('Error updating settings', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
};

exports.getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne({});
    res.json(settings);
  } catch (error) {
    console.error('Error fetching settings', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};
