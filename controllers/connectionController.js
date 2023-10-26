const Toggle = require('../models/connectionModel');

const getToggleStates = async (req, res) => {
  try {
    const toggles = await Toggle.find();
    res.json(toggles);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateToggleState = async (req, res) => {
  const { id } = req.params;
  const { isToggled } = req.body;

  try {
    const toggle = await Toggle.findByIdAndUpdate(id, { isToggled }, { new: true });
    res.json(toggle);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getToggleStates,
  updateToggleState,
};
