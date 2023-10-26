// controllers/deviceController.js

let deviceName = 'OnePlus 7T';

// Get the current device name
const getDeviceName = (req, res) => {
  res.json({ deviceName });
};

// Update the device name
const updateDeviceName = (req, res) => {
  const { newDeviceName } = req.body;
  deviceName = newDeviceName;
  res.sendStatus(200);
};

module.exports = {
  getDeviceName,
  updateDeviceName,
};
