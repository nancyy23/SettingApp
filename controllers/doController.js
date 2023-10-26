const DoSettings = require('../models/doSettings');

const updateDoSettings = async (req, res) => {
  try {
    const { toggle1, toggle2, toggle3 } = req.body;

    const doSettings = await DoSettings.findOneAndUpdate(
      {},
      { toggle1, toggle2, toggle3 },
      { new: true, upsert: true }
    );

    return res.json(doSettings);
  } catch (error) {
    console.error('Error updating Do Not Disturb settings', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getDoSettings = async (req, res) => {
  try {
    const doSettings = await DoSettings.findOne({});
    if (!doSettings) {
      return res.json({ toggle1: false, toggle2: false, toggle3: false });
    }
    return res.json(doSettings);
  } catch (error) {
    console.error('Error fetching Do Not Disturb settings', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  updateDoSettings,
  getDoSettings,
};
