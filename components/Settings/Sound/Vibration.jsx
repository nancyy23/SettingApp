import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Vibration = () => {
  const [vibrationIntensity, setVibrationIntensity] = useState(50);
  const [hapticIntensity, setHapticIntensity] = useState(50);

  const handleVibrationChange = (event) => {
    setVibrationIntensity(event.target.value);
  };

  const handleHapticChange = (event) => {
    setHapticIntensity(event.target.value);
  };

  return (
    <div>
        <div className="container">
      <div className="header">
        <NavLink to="../Sound" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Vibration intensity</h1>
      </div>

      <p>Vibrate on ring</p>
      <input
        type="range"
        min="0"
        max="100"
        onChange={handleVibrationChange }
        style={{ width: "100%", height: "3px" }}
      />
      <p>Notification vibration</p>
      <input
        type="range"
        min="0"
        max="100"
        onChange={handleHapticChange}
        style={{ width: "100%", height: "3px" }}
      />
    </div>
    </div>
  );
};

export default Vibration;
