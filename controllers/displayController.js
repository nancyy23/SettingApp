const DisplaySetting = require('../models/displaySetting');


const updateDisplayMode = async (req, res) => {
  const { lightMode } = req.body;

  try {
    // Update the display mode in the DisplaySetting model
    const displaySetting = await DisplaySetting.findOne();
    displaySetting.lightMode = lightMode;
    await displaySetting.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to update display mode', error);
    res.status(500).json({ error: 'Failed to update display mode' });
  }
};

const updateAutoBrightness = async (req, res) => {
  const { autoBrightness } = req.body;

  try {
    // Update the auto brightness setting in the DisplaySetting model
    const displaySetting = await DisplaySetting.findOne();
    displaySetting.autoBrightness = autoBrightness;
    await displaySetting.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to update auto brightness', error);
    res.status(500).json({ error: 'Failed to update auto brightness' });
  }
};

const updateBrightnessLevel = async (req, res) => {
  const { brightnessLevel } = req.body;

  try {
    // Update the brightness level in the DisplaySetting model
    const displaySetting = await DisplaySetting.findOne();
    displaySetting.brightnessLevel = brightnessLevel;
    await displaySetting.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to update brightness level', error);
    res.status(500).json({ error: 'Failed to update brightness level' });
  }
};

const getBrightness = async (req, res) => {
  try {
    // Get the brightness level from the DisplaySetting model
    const displaySetting = await DisplaySetting.findOne();
    const brightnessLevel = displaySetting ? displaySetting.brightnessLevel : 50;

    res.json({ brightnessLevel });
  } catch (error) {
    console.error('Failed to get brightness level', error);
    res.status(500).json({ error: 'Failed to get brightness level' });
  }
};

module.exports = {
  updateDisplayMode,
  updateAutoBrightness,
  updateBrightnessLevel,
  getBrightness,
};

