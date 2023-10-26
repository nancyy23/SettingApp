
const SoundSettings = require('../models/SoundSettings');

const updateSoundSettings = async (req, res) => {
  try {
    const {
      soundLevel,
      ringtoneLevel,
      notificationLevel,
      alarmLevel,
      mediaMute,
      notificationsMute,
    } = req.body;

    const soundSettings = await SoundSettings.findOneAndUpdate(
      {},
      {
        soundLevel,
        ringtoneLevel,
        notificationLevel,
        alarmLevel,
        mediaMute,
        notificationsMute,
      },
      { new: true, upsert: true }
    );
    console.log('Updated sound settings:', soundSettings);

    return res.json(soundSettings);
  } catch (error) {
    console.error('Error updating sound settings', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSoundSettings = async (req, res) => {
  try {
    const soundSettings = await SoundSettings.findOne({});
    if (!soundSettings) {

      return res.json({ soundLevel: 50, ringtoneLevel: 50, notificationLevel: 50, alarmLevel: 50, mediaMute: false, notificationsMute: false });
    }
    return res.json(soundSettings);
  } catch (error) {
    console.error('Error fetching sound settings', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  updateSoundSettings,
  getSoundSettings,
};
