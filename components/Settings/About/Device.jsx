import React, { useState } from 'react';

const Device = () => {
  const [deviceName, setDeviceName] = useState('OnePlus 7T'); // Initialize with default text

  const handleInputChange = (e) => {
    setDeviceName(e.target.value);
  };

  const saveDeviceName = () => {
    // Customize this function to handle the saving of the device name.
    // For this example, we're just updating the state with the new name.
    setDeviceName(deviceName);
  };

  return (
    <div className="device-container">
      <h4 className="centered-text">Change Device Name</h4>
      <p>Your device name will be displayed when using Bluetooth and Wi-Fi Direct</p>
      <form>
        <input
          type="text"
          className="underline-input"
          placeholder="Enter device name"
          value={deviceName}
          onChange={handleInputChange}
        />
        <div className="button-container">
          <button type="button" className="blue-button" onClick={saveDeviceName}>
            Save
          </button>
          <button type="button" className="blue-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Device;
