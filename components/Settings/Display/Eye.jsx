import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Eye = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const toggleEye = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <NavLink to="../Display" className="arrow-icon link-no-underline">
            &#8592;
          </NavLink>
          <h1>Eye Comfort</h1>
        </div>

        <p className="dns-text">Eye comfort reduces blue light from the screen and alleviates eye strain. It is normal foe the screen to appear yellowish with Eye comfort on.</p>

        <hr className="line" />

        <div className="toggle-container">
          <div className="left-side">
            <p>Eye Comfort</p>
          </div>
          <div className="right-side">
            <label className="switch">
              <input type="checkbox" onClick={toggleEye} checked={isEyeOpen} />
              <span className={`slider ${isEyeOpen ? 'round' : ''}`}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;

