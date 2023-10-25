import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AirplaneComponent = () => {
  const [isAirplaneVisible, setIsAirplaneVisible] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(false);

  const toggleAirplaneVisibility = () => {
    setIsAirplaneVisible(!isAirplaneVisible);
  };

  const fetchAirplaneMode = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/appsetting'); // Replace with your backend URL
      if (response.ok) {
        const data = await response.json();
        setAirplaneMode(data.enabled);
      } else {
        console.error('Failed to fetch airplane mode status');
      }
    } catch (error) {
      console.error('Error while fetching airplane mode status', error);
    }
  };

  const updateAirplaneMode = async (enabled) => {
    try {
      const response = await fetch('http://localhost:4000/api/appsetting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enabled }),
      });
      if (response.ok) {
        const data = await response.json();
        setAirplaneMode(data.enabled);
      } else {
        console.error('Failed to update airplane mode');
      }
    } catch (error) {
      console.error('Error while updating airplane mode', error);
    }
  };

  useEffect(() => {
    fetchAirplaneMode();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Airplane mode</h1>
      </div>
      <div className="airplane-container">
        <div className="left-side">
          <p className="airplane-text">Airplane mode</p>
        </div>
        <div className="right-side">
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => updateAirplaneMode(!airplaneMode)}
              checked={airplaneMode}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AirplaneComponent;

