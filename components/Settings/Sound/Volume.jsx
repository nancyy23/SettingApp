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

const VolumeToggles = () => {
  const [toggles, setToggles] = useState([
    { label: "Media volume", checked: false },
    { label: "Ringtone volume", checked: false },
  ]);

  const handleToggleChange = (index) => {
    const newToggles = toggles.map((toggle, i) => ({
      ...toggle,
      checked: i === index,
    }));
    setToggles(newToggles);
  };

  return (
    <div>
          <div className="container">
      <div className="header">
        <NavLink to="../Sound" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Volume button function</h1>
      </div>

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

export default VolumeToggles;
