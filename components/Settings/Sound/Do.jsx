import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Do = () => {
  const [isToggle1On, setToggle1] = useState(false);
  const [isToggle2On, setToggle2] = useState(false);
  const [isToggle3On, setToggle3] = useState(false);

  const toggleSwitch1 = () => {
    setToggle1(!isToggle1On);
  };

  const toggleSwitch2 = () => {
    setToggle2(!isToggle2On);
  };

  const toggleSwitch3 = () => {
    setToggle3(!isToggle3On);
  };

  useEffect(() => {
    // Retrieve state from local storage on component mount
    const savedState = JSON.parse(localStorage.getItem("doSettings"));
    if (savedState) {
      setToggle1(savedState.toggle1);
      setToggle2(savedState.toggle2);
      setToggle3(savedState.toggle3);
    }
  }, []);

  useEffect(() => {
    // Save the state to local storage whenever it changes
    const stateToSave = JSON.stringify({
      toggle1: isToggle1On,
      toggle2: isToggle2On,
      toggle3: isToggle3On,
    });
    localStorage.setItem("doSettings", stateToSave);
    saveSettings(); // Also save to the server here
  }, [isToggle1On, isToggle2On, isToggle3On]);

  const saveSettings = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/do-setting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toggle1: isToggle1On,
          toggle2: isToggle2On,
          toggle3: isToggle3On,
        }),
      });
      if (response.ok) {
        console.log("Settings saved successfully");
      } else {
        console.error("Failed to save settings");
      }
    } catch (error) {
      console.error("Error while saving settings", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../Sound" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Do Not Disturb</h1> 
      </div>

      <div className="toggle-container1">
        <div className="toggle-row">
          <div className="toggle-label">Do Not Disturb</div>
          <div
            className="toggle-switch"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <label className="switch">
              <input
                type="checkbox"
                checked={isToggle1On}
                onChange={toggleSwitch1}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="displays-links">
        <div className="nav-links">
          <hr className="line" />
        </div>
      </div>

      <p className="grey-text" id="grey-text1">
        Exceptions
      </p>

      <div className="toggle-container1">
        <div className="toggle-row">
          <div className="toggle-label">Ring for repeated calls</div>
          <div className="toggle-switch">
            <label className="switch">
              <input
                type="checkbox"
                checked={isToggle2On}
                onChange={toggleSwitch2}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="toggle-container1">
        <div className="toggle-row">
          <div className="toggle-label">
            Silence media when Do Not Disturb is on
          </div>
          <div
            className="toggle-switch"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <label className="switch">
              <input
                type="checkbox"
                checked={isToggle3On}
                onChange={toggleSwitch3}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Do;
