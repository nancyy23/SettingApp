import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Auto() {
  const [isAuto, setIsAuto] = useState(false);

  useEffect(() => {
    fetchAutoSetting();
  }, []);

  const toggleAuto = () => {
    setIsAuto(!isAuto);
    updateAutoSetting(!isAuto);
  };

  const fetchAutoSetting = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/appsetting"); 
      if (response.ok) {
        const data = await response.json();
        setIsAuto(data.enabled);
      } else {
        console.error("Failed to fetch auto switch status");
      }
    } catch (error) {
      console.error("Error while fetching auto switch status", error);
    }
  };

  const updateAutoSetting = async (enabled) => {
    try {
      const response = await fetch("http://localhost:4000/api/appsetting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enabled }),
      });
      if (response.ok) {
        const data = await response.json();
        setIsAuto(data.enabled);
      } else {
        console.error("Failed to update auto switch status");
      }
    } catch (error) {
      console.error("Error while updating auto switch status", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../Display" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Auto Switch</h1>
      </div>
      <div className="toggle-container">
        <div className="left-side">
          <p>Auto Switch</p>
        </div>
        <div className="right-side">
          <label className="switch">
            <input type="checkbox" onClick={toggleAuto} checked={isAuto} />
            <span className={`slider ${isAuto ? "round" : ""}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Auto;
