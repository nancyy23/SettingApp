import React, { useState, useEffect } from 'react';
import toggleIcon from '../images/n.jpg';
import { NavLink } from 'react-router-dom';

const Dolby = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    saveSettings(); // Save settings to the server when the toggle is changed
  };

  useEffect(() => {
    // Retrieve the Dolby Atmos settings from the server when the component mounts
    fetch('http://localhost:4000/api/dolby-settings')
      .then((response) => response.json())
      .then((data) => {
        setIsToggled(data.isToggled);
      })
      .catch((error) => {
        console.error('Error fetching Dolby Atmos settings', error);
      });
  }, []);

  const saveSettings = () => {
    // Save the Dolby Atmos settings to the server when the toggle changes
    fetch('http://localhost:4000/api/dolby-settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isToggled }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Dolby Atmos settings saved successfully');
        } else {
          console.error('Failed to save Dolby Atmos settings');
        }
      })
      .catch((error) => {
        console.error('Error while saving Dolby Atmos settings', error);
      });
  };

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('dolbySettings'));
    if (savedState) {
      setIsToggled(savedState.isToggled);
    }
  }, []);

  useEffect(() => {
    const stateToSave = JSON.stringify({ isToggled });
    localStorage.setItem('dolbySettings', stateToSave);
  }, [isToggled]);

  return (
    <div className="container">
    <div className="header">
      <NavLink to="../Sound" className="arrow-icon link-no-underline">&#8592;</NavLink>
      <h1>Dolby Atmos</h1> 
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
