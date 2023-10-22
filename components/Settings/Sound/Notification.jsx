import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CircularToggle = ({ label, checked, onChange }) => {
  return (
    <div className={`toggle-row ${checked ? "active" : ""}`}>
      <label className="circular-toggle">
        <span className="label-text">{label}</span>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

const Notification = () => {
  const [toggles, setToggles] = useState([
    { label: "Toggle 1", checked: false },
    { label: "Toggle 2", checked: false },
    { label: "Toggle 3", checked: false },
    { label: "Toggle 4", checked: false },
    { label: "Toggle 5", checked: false },
    { label: "Toggle 6", checked: false },
    { label: "Toggle 7", checked: false },
    { label: "Toggle 8", checked: false },
    { label: "Toggle 9", checked: false },
    { label: "Toggle 10", checked: false },
  ]);

  const handleToggleChange = (index) => {
    const newToggles = toggles.map((toggle, i) => ({
      ...toggle,
      checked: i === index,
    }));
    setToggles(newToggles);
  };

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../Sound" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Notification sound</h1>
      </div>

      <div className="displays-links">


        <p className="grey-text" id="grey-text1">
          CUSTOM
        </p>

        <div className="nav-link-row">
          <NavLink to="/link2" className="display-link">
            On this device
          </NavLink>
          <p className="grey-text" id="grey-text1">
          The selected audio file will play for up to 5 seconds.
        </p>
        </div>
      </div>

      <hr className="line" />

      <p className="grey-text" id="grey-text1">
        ALERT TONES
      </p>

      <div className="toggle-container1">
        {toggles.map((toggle, index) => (
          <CircularToggle
            key={index}
            label={toggle.label}
            checked={toggle.checked}
            onChange={() => handleToggleChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
