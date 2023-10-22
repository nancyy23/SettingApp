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

const ToggleDemo = () => {
  const [toggles, setToggles] = useState([
    { label: "Auto Select", checked: false },
    { label: "Add-on", checked: false },
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
      <NavLink to="../Sound" className="arrow-icon link-no-underline">&#8592;</NavLink>
      <h1>Default Recorder</h1> 
    </div>

    <div>
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

export default ToggleDemo;
