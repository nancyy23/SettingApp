import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Device = () => {
  const [deviceName, setDeviceName] = useState('OnePlus 7T');

  useEffect(() => {
    const savedDeviceName = localStorage.getItem('deviceName');
    if (savedDeviceName) {
      setDeviceName(savedDeviceName);
    }
  }, []);

  const handleInputChange = (e) => {
    setDeviceName(e.target.value);
  };

  const saveDeviceName = () => {
    localStorage.setItem('deviceName', deviceName); 
  };

  return (
    <div className="device-container">
      <div className="header">
        <NavLink to="../about" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Device</h1>
      </div>
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
