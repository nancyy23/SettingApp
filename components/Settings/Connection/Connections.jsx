import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ToggleComponent = ({ label, stateKey }) => {
  const [isToggled, setIsToggled] = useState(() => {
    return JSON.parse(localStorage.getItem(stateKey)) || false;
  });

  const toggleVisibility = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    localStorage.setItem(stateKey, JSON.stringify(newState));

  fetch(`http://localhost:4000/api/toggle-states/${stateKey}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isToggled: newState }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update toggle state');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Toggle state updated successfully:', data);
    })
    .catch((error) => {
      console.error('Error updating toggle state:', error);
    });
};

  return (
    <div className="toggle-container">
      <div className="left-side">
        <p className="toggle-text">{label}</p>
      </div>
      <div className="right-side">
        <label className="switch">
          <input type="checkbox" checked={isToggled} onChange={toggleVisibility} />
          <span className={`slider ${isToggled ? 'round' : ''}`}></span>
        </label>
      </div>
    </div>
  );
}

const Connections = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <NavLink to="../" className="arrow-icon link-no-underline">&#8592;</NavLink>
          <h1>Connections</h1>
        </div>
        <ToggleComponent label="Personal Hotspot" stateKey="personalHotspot" />
        <ToggleComponent label="Bluetooth tethering" stateKey="bluetoothTethering" />
        <hr className="line" />
        <div className="links">
          <NavLink to="/Vpn" className="link">
            VPN
          </NavLink>
          <NavLink to="/Nfc" className="link">
            NFC
          </NavLink>
          <NavLink to="/Dns" className="link">
            Private DNS
          </NavLink>
        
        </div>
        <hr className="line" />
        <NavLink to="/Screencast" className="link">
          Screencast
        </NavLink>
        <ToggleComponent label="Quick device connect" stateKey="quickDeviceConnect" />
      </div>
    </div>
  );
}

export default Connections;
