import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Haptic = () => {
  const [hapticIntensity, setHapticIntensity] = useState(50);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);

  const handleHapticChange = (event) => {
    setHapticIntensity(event.target.value);
  };

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };

  const handleToggle5 = () => {
    setToggle5(!toggle5);
  };

  const handleToggle6 = () => {
    setToggle6(!toggle6);
  };

  const handleToggle7 = () => {
    setToggle7(!toggle7);
  };

  useEffect(() => {
    // Retrieve state from local storage on component mount
    const savedState = JSON.parse(localStorage.getItem("hapticSettings"));
    if (savedState) {
      setHapticIntensity(savedState.hapticIntensity);
      setToggle1(savedState.toggle1);
      setToggle2(savedState.toggle2);
      setToggle3(savedState.toggle3);
      setToggle4(savedState.toggle4);
      setToggle5(savedState.toggle5);
      setToggle6(savedState.toggle6);
      setToggle7(savedState.toggle7);
    }
  }, []);

  useEffect(() => {
    // Save the state to local storage whenever it changes
    const stateToSave = JSON.stringify({
      hapticIntensity,
      toggle1,
      toggle2,
      toggle3,
      toggle4,
      toggle5,
      toggle6,
      toggle7,
    });
    localStorage.setItem("hapticSettings", stateToSave);
    saveSettings();
  }, [
    hapticIntensity,
    toggle1,
    toggle2,
    toggle3,
    toggle4,
    toggle5,
    toggle6,
    toggle7,
  ]);

  const saveSettings = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/appsetting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hapticIntensity,
          toggle1,
          toggle2,
          toggle3,
          toggle4,
          toggle5,
          toggle6,
          toggle7,
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
        <h1>Haptic Settings</h1>
      </div>

      <div className="toggle-row">
        <p>System haptics</p>
        <label className="switch">
          <input type="checkbox" checked={toggle1} onChange={handleToggle1} />
          <span className="slider round"></span>
        </label>
      </div>

      <p>Haptic Intensity</p>
      <input
        type="range"
        min="0"
        max="100"
        value={hapticIntensity}
        onChange={handleHapticChange}
        style={{ width: "100%", height: "3px" }}
      />

      <hr className="line" style={{ margin: "30px 0" }} />

      <p className="grey-text" id="grey-text1">
        SOUNDS
      </p>

      <div className="toggle-row">
        <p>Dial pad tone</p>
        <label className="switch">
          <input type="checkbox" checked={toggle2} onChange={handleToggle2} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="toggle-row">
        <p>Lock screen sound</p>
        <label className="switch">
          <input type="checkbox" checked={toggle3} onChange={handleToggle3} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="toggle-row">
        <p>Screenshot sound</p>
        <label className="switch">
          <input type="checkbox" checked={toggle4} onChange={handleToggle4} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="toggle-row">
        <p>Deletion sound</p>
        <label className="switch">
          <input type="checkbox" checked={toggle5} onChange={handleToggle5} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="toggle-row">
        <p>Fingerprint animation sound</p>
        <label className="switch">
          <input type="checkbox" checked={toggle6} onChange={handleToggle6} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="toggle-row">
        <p>Touch sounds</p>
        <label className="switch">
          <input type="checkbox" checked={toggle7} onChange={handleToggle7} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Haptic;
