import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CircularToggle = ({ label, checked, onChange }) => {
  return (
    <div className={`toggle-row ${checked ? 'active' : ''}`}>
      <label className="circular-toggle">
        <span className="label-text">{label}</span>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

const Toggle = () => {
  const [toggles, setToggles] = useState([
    { label: '15 seconds', checked: false },
    { label: '30 seconds', checked: false },
    { label: '1 minute', checked: false },
    { label: '2 minutes', checked: false },
    { label: '5 minutes', checked: false },
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
        <NavLink to="../Display" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Auto screen off</h1>
      </div>
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

export default Toggle;
