import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AirplaneComponent = () => {
  const [isAirplaneVisible, setIsAirplaneVisible] = useState(false);

  const toggleAirplaneVisibility = () => {
    setIsAirplaneVisible(!isAirplaneVisible);
  };

  return (
    <div className="container">
    <div className="header">
    <NavLink to="../" className="arrow-icon link-no-underline">&#8592;</NavLink>
      <h1>Airplane mode</h1>
    </div>
    <div className="airplane-container">
      <div className="left-side">
        <p className="airplane-text">Airplane mode</p>
      </div>
      <div className="right-side">
        <label className="switch">
          <input type="checkbox" onClick={toggleAirplaneVisibility} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
    </div>
  );
}

export default AirplaneComponent;
