import React, { useState } from 'react';
// Import your CSS file for styling

const AirplaneComponent = () => {
  const [isAirplaneVisible, setIsAirplaneVisible] = useState(false);

  const toggleAirplaneVisibility = () => {
    setIsAirplaneVisible(!isAirplaneVisible);
  };

  return (
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

  );
}

export default AirplaneComponent;
