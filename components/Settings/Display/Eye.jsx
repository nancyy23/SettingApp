import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function EyeComfort() {
  const [isEyeComfortOn, setIsEyeComfortOn] = useState(false);

  useEffect(() => {
    // Fetch the initial eye comfort setting from your backend when the component mounts
    fetchEyeComfortSetting();
  }, []);

  const toggleEyeComfort = () => {
    setIsEyeComfortOn(!isEyeComfortOn);
    updateEyeComfortSetting(!isEyeComfortOn);
  };

  const fetchEyeComfortSetting = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/eye-comfort-setting'); // Replace with your backend URL
      if (response.ok) {
        const data = await response.json();
        setIsEyeComfortOn(data.enabled);
      } else {
        console.error('Failed to fetch eye comfort status');
      }
    } catch (error) {
      console.error('Error while fetching eye comfort status', error);
    }
  };

  const updateEyeComfortSetting = async (enabled) => {
    try {
      const response = await fetch('http://localhost:4000/api/eye-comfort-setting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enabled }),
      });
      if (response.ok) {
        const data = await response.json();
        setIsEyeComfortOn(data.enabled);
      } else {
        console.error('Failed to update eye comfort status');
      }
    } catch (error) {
      console.error('Error while updating eye comfort status', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../Display" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Eye Comfort</h1>
      </div>

      <p className="dns-text">Eye comfort reduces blue light from the screen and alleviates eye strain. It is normal for the screen to appear yellowish with Eye Comfort on.</p>

      <hr className="line" />

      <div className="toggle-container">
        <div className="left-side">
          <p>Eye Comfort</p>
        </div>
        <div className="right-side">
          <label className="switch">
            <input type="checkbox" onClick={toggleEyeComfort} checked={isEyeComfortOn} />
            <span className={`slider ${isEyeComfortOn ? 'round' : ''}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default EyeComfort;
