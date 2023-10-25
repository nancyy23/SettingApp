// Import the necessary model
const EyeComfort = require('../models/eyeComfortSettings');

// Get Eye Comfort setting
const getEyeComfortSetting = async (req, res) => {
  try {
    // Find the Eye Comfort setting in the database (assuming it's stored in a collection)
    const eyeComfortSetting = await EyeComfort.findOne();
    
    if (!eyeComfortSetting) {
      // If the setting doesn't exist in the database, return a default value
      res.json({ enabled: false });
    } else {
      res.json({ enabled: eyeComfortSetting.enabled });
    }
  } catch (error) {
    console.error('Error while fetching Eye Comfort setting', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Set Eye Comfort setting
const setEyeComfortSetting = async (req, res) => {
  const { enabled } = req.body;
  
  try {
    // Update the Eye Comfort setting in the database or create it if it doesn't exist
    const eyeComfortSetting = await EyeComfort.findOneAndUpdate({}, { enabled }, { upsert: true, new: true });

    res.json({ enabled: eyeComfortSetting.enabled });
  } catch (error) {
    console.error('Error while updating Eye Comfort setting', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getEyeComfortSetting,
  setEyeComfortSetting,
};
