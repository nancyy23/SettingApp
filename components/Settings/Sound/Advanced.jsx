import React from 'react';
import { NavLink } from 'react-router-dom';

const Advanced = () => {
  return (
    <div>
        <div className="container">
      <div className="header">
        <NavLink to="../sound" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Advance Setting</h1>
      </div>
      <div className="displays-links">
      <NavLink to="/Volume" className="display-link" id="setting-id">
          Volume button function
        </NavLink>
        <NavLink to="/Default" className="display-link" id="setting-id">
          Default recorder
        </NavLink>
        </div>
    </div>
    </div>
  );
};

export default Advanced;
