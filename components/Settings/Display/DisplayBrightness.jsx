import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import lightModeImage from "../images/g.jpg";
import darkModeImage from "../images/h.jpg";

function DisplayBrightness() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [autoBrightness, setAutoBrightness] = useState(false);
  const [brightnessLevel, setBrightnessLevel] = useState(50);

  useEffect(() => {
   //fetch initial state
    fetchSettings();
  }, []);

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem("displaySettings"));
    if (storedSettings) {
      setIsLightMode(storedSettings.isLightMode);
      setAutoBrightness(storedSettings.autoBrightness);
      setBrightnessLevel(storedSettings.brightnessLevel);
    }
  }, []);

  useEffect(() => {
    const displaySettings = {
      isLightMode,
      autoBrightness,
      brightnessLevel,
    };
    localStorage.setItem("displaySettings", JSON.stringify(displaySettings));
  }, [isLightMode, autoBrightness, brightnessLevel]);

  const fetchSettings = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/get-display-settings");
      if (response.ok) {
        const data = await response.json();
        setIsLightMode(data.lightMode);
        setAutoBrightness(data.autoBrightness);
        setBrightnessLevel(data.brightnessLevel);
      }
    } catch (error) {
      console.error("Error fetching settings", error);
    }
  };

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
    updateDisplayMode();
  };

  const toggleAutoBrightness = () => {
    setAutoBrightness(!autoBrightness);
    if (!autoBrightness) {
     
      setBrightnessLevel(80);
    }
    updateAutoBrightness();
  };

  const handleBrightnessChange = (event) => {
    const newBrightnessLevel = event.target.value;
    setBrightnessLevel(newBrightnessLevel);
    updateBrightnessLevel(newBrightnessLevel);
  };

  const updateDisplayMode = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/update-display-mode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lightMode: isLightMode }),
      });

      if (!response.ok) {
        console.error("Failed to update display mode");
      }
    } catch (error) {
      console.error("Error while updating display mode", error);
    }
  };

  const updateAutoBrightness = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/update-auto-brightness", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ autoBrightness: autoBrightness }),
      });

      if (!response.ok) {
        console.error("Failed to update auto brightness");
      }
    } catch (error) {
      console.error("Error while updating auto brightness", error);
    }
  };

  const updateBrightnessLevel = async (newBrightnessLevel) => {
    try {
      const response = await fetch("http://localhost:4000/api/update-brightness-level", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ brightnessLevel: newBrightnessLevel }),
      });

      if (!response.ok) {
        console.error("Failed to update brightness level");
      }
    } catch (error) {
      console.error("Error while updating brightness level", error);
    }
  };

  const dependentText = isLightMode ? "On" : "Off";
  
  // Define a style object to set brightness based on brightnessLevel
  const brightnessStyle = {
    filter: `brightness(${brightnessLevel}%)`,
  };

  useEffect(() => {
    document.body.style.filter = `brightness(${brightnessLevel}%)`;
  }, [brightnessLevel]);

  return (
    <div className="container" style={brightnessStyle}>
      <div className="header" >
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
            <label className="switch">
              <input
                type="checkbox"
                onClick={toggleMode}
                checked={isLightMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="mode-button">
            <img src={darkModeImage} alt="Dark Mode" />
            <p>Dark Mode</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={toggleMode}
                checked={!isLightMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <NavLink to="/auto" className="auto-link" id="auto-id" >
          Auto Switch
        </NavLink>
        <p>{dependentText}</p>
        <hr className="line" />
        <p className="bright">BRIGHTNESS</p>
        <div className="row-length-range">
          <input
            type="range"
            min="0"
            max="100"
            value={brightnessLevel}
            onChange={handleBrightnessChange}
            style={{ width: "100%", height: "3px" }}
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

        <NavLink to="/Wallpapers" className="display-link" id="setting-id">
          Wallpapers
        </NavLink>
      </div>
   

    </div>
  );
}

export default DisplayBrightness;
