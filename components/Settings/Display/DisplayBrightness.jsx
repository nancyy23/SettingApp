import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import lightModeImage from "../images/g.jpg"; 
import darkModeImage from "../images/h.jpg";

function DisplayBrightness() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [autoBrightness, setAutoBrightness] = useState(false);
  const [brightnessLevel, setBrightnessLevel] = useState(50);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const toggleAutoBrightness = () => {
    setAutoBrightness(!autoBrightness);
  };

  const handleBrightnessChange = (event) => {
    setBrightnessLevel(event.target.value);
  };

  const dependentText = isLightMode ? "On" : "Off";

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Display & Brightness</h1>
      </div>
      <div className="setting">
        <div className="mode-buttons">
          <div className="mode-button">
            <img src={lightModeImage} alt="Light Mode" />
            <p>Light Mode</p>
            <button
              className={`mode-toggle ${isLightMode ? "active" : ""}`}
              onClick={toggleMode}
            ></button>
          </div>
          <div className="mode-button">
            <img src={darkModeImage} alt="Dark Mode" />
            <p>Dark Mode</p>
            <button
              className={`mode-toggle ${!isLightMode ? "active" : ""}`}
              onClick={toggleMode}
            ></button>
          </div>
        </div>
        <NavLink to="/auto" className="auto-link" id="auto-id">
          Auto Switch
        </NavLink>
        <p>{dependentText}</p>
        <hr className="line" />
        <p class="bright">BRIGHTNESS</p>
        <div className="row-length-range">
          <input
            type="range"
            min="0"
            max="100"
            value={brightnessLevel}
            onChange={handleBrightnessChange}
            style={{ width: "100%",height:"3px" }}
          />
        </div>
        <div className="auto-brightness-toggle">
          <p>Auto brightness</p>
          <label className="switch">
            <input
              type="checkbox"
              onClick={toggleAutoBrightness}
              checked={autoBrightness}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <hr className="line" />
      </div>

      <div className="displays-links">
        <NavLink to="/Eye" className="display-link" id="setting-id">
          Screen color mode
        </NavLink>
        <NavLink to="/Eye" className="display-link" id="setting-id">
          Eye comfort
        </NavLink>

        <hr className="line" />
        <p className="grey-text" id="grey-text1">
          VIDEO ENHANCEMENT ENGINE
        </p>
        <NavLink to="/Video" className="display-link" id="setting-id">
          Video color enhancer
        </NavLink>

        <hr className="line" />

        <NavLink to="/Autoscreen" className="display-link" id="setting-id">
          Auto screen off
        </NavLink>

        <NavLink to="/Refresh" className="display-link" id="setting-id">
          Screen refresh rate
        </NavLink>

        <NavLink to="/Wallpapers" className="display-link" id="setting-id">
          Wallpapers
        </NavLink>
      </div>
    </div>
  );
}

export default DisplayBrightness;
