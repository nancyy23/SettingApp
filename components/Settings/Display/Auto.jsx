import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Auto() {
  const [isAuto, setIsAuto] = useState(false);

  const toggleAuto = () => {
    setIsAuto(!isAuto);
  };

  return (
    <div>
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
            <span className={`slider ${isAuto ? 'round' : ''}`}></span>
          </label>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Auto;
