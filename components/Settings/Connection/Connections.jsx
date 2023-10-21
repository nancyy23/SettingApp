
import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';

const ToggleComponent = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleVisibility = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-container">
      <div className="left-side">
        <p className="toggle-text">{label}</p>
      </div>
      <div className="right-side">
        <label className="switch">
          <input type="checkbox" onClick={toggleVisibility} />
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
      <ToggleComponent label="Personal Hotspot" />
      <ToggleComponent label="Bluetooth tethering" />
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
      <NavLink to="/Android" className="link">
          Android Auto
      </NavLink>
      </div>

      <hr className="line" />

      <NavLink to="/Screencast" className="link">
          Screencast
      </NavLink>

      <ToggleComponent label="Quick device connect" />
    </div>
    </div>
  );
}

export default Connections;
