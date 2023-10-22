import React, { useState } from 'react';
import toggleIcon from '../images/n.jpg'; 
import { NavLink } from 'react-router-dom';// Replace with the actual image path

const Dolby = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="container">
    <div className="header">
      <NavLink to="../Sound" className="arrow-icon link-no-underline">&#8592;</NavLink>
      <h1>Dolby Atmos</h1> {/* Update the title */}
    </div>
    <div className="toggle-container">
      <div className="toggle-left">
        <img src={toggleIcon} alt="Toggle Icon" className="toggle-icon" />
        <div className="toggle-text">Dolby Atmos</div>
      </div>
      <div className="toggle-right">
        <label className="switch">
          <input type="checkbox" checked={isToggled} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
    </div>
  );
};

export default Dolby;
