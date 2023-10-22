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

const Ringtone = () => {
  const [toggles, setToggles] = useState([
    { label: "OnePlus new feelings", checked: false },
    { label: "OnePlus tune", checked: false },
    { label: "Alacrity", checked: false },
    { label: "Alarm clock", checked: false },
    { label: "Beep", checked: false },
    { label: "Breeze", checked: false },
    { label: "Calm", checked: false },
    { label: "Cloud", checked: false },
    { label: "Dawn", checked: false },
    { label: "Echo", checked: false },
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
        <NavLink
          to="../Sound"
          className="arrow-icon link-no-underline"
        >
          &#8592;
        </NavLink>
        <h1>Ringtone</h1>
      </div>

      <div className="displays-links">
        <div className="nav-link-row">
          <NavLink to="/link1" className="display-link">
            Vibration
          </NavLink>
        </div>

        <hr className="line" />

        <p className="grey-text" id="grey-text1">
          CUSTOM
        </p>

        <div className="nav-link-row">
          <NavLink to="/link2" className="display-link">
            On this device
          </NavLink>
        </div>
      </div>

      <hr className="line" />

        <p className="grey-text" id="grey-text1">
          SYSTEM RINGTONES
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

export default Ringtone;
