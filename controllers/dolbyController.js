// controllers/dolbyController.js
const DolbySettings = require('../models/dolbyModel');

// Get Dolby settings
const getDolbySettings = async (req, res) => {
  try {
    const settings = await DolbySettings.findOne({});
    if (!settings) {
      return res.json({ isToggled: false });
    }
    return res.json(settings);
  } catch (error) {
    console.error('Error fetching Dolby Atmos settings', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateDolbySettings = async (req, res) => {
  try {
    const { isToggled } = req.body;

    const settings = await DolbySettings.findOneAndUpdate(
      {},
      { isToggled },
      { new: true, upsert: true }
    );

    return res.json(settings);
  } catch (error) {
    console.error('Error updating Dolby Atmos settings', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getDolbySettings, updateDolbySettings };
