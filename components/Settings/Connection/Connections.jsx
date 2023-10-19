import AirplaneComponent from '../Airplane/AirplaneMode';
import React, { useState } from 'react'; // Import the AirplaneComponent
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
        <div className="arrow-icon">&#8592;</div>
        <h1>Connections</h1>
      </div>
      <AirplaneComponent /> {/* Include the AirplaneComponent */}
      <ToggleComponent label="Personal Hotspot" />
      <ToggleComponent label="Bluetooth tethering" />
      <hr className="line" />
      <div className="links">
      <NavLink to="/" className="link">
          VPN
      </NavLink>
      <NavLink to="/" className="link">
          NFC
      </NavLink>
      <NavLink to="/" className="link">
          Private DNS
      </NavLink>
      <NavLink to="/" className="link">
          Android Auto
      </NavLink>
      </div>

      <hr className="line" />

      <NavLink to="/" className="link">
          Screencast
      </NavLink>

      <ToggleComponent label="Quick device connect" />
    </div>
    </div>
  );
}

export default Connections;
