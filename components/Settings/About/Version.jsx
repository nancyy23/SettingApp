import React from 'react';
import { NavLink } from 'react-router-dom';

const Version = () => {
  return (
    <div>
      <div className="device-container">
      <div className="header">
      <NavLink to="../about" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>Version</h1>
        </div>

        <div className="about-phone-text">
          <p >Build number</p>
          <p id="about2">HD1901_11_F.22</p>
        </div>
        <hr className="line" />
        <div className="about-phone-text">
          <p >Baseband version</p>
          <p id="about2">Q_V1_P14Q_V1_P14</p>
        </div>
        <hr className="line" />
        <div className="about-phone-text">
          <p >Kernel version</p>
          <p id="about2">4.1434029perf+</p>
        </div>
  
    </div>
    </div>
  );
}

export default Version;
