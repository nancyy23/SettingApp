import React from 'react';
import { NavLink } from 'react-router-dom';
import IconImage from "../images/g.png";
import IconImage1 from "../images/d.png";
import IconImage2 from "../images/i.png";

const AboutPhone = () => {
  return (
    <div className="container">
      <div className="header">
      <NavLink to="../" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>About Device</h1>
      </div>

      <NavLink className="about-phone-section">
        <div className="about-phone-icon">
          <img src={IconImage} alt="Icon 1" />
        </div>
        <div className="about-phone-text">
          <p >Up to date</p>
          <p id="about2">Official Version</p>
        </div>
      </NavLink>

      <div className="about-phone-container2">
        <NavLink to="/Device" className="about-phone-content">
          <div className="setting-link">
            <img src={IconImage1} alt="Icon 1" />
          </div>
          <div className="about-phone-text">
            <p >Device name</p>
            <p id="about2">OnePlus 7T</p>
          </div>
        </NavLink>

        <NavLink to="/Storage" className="about-phone-content">
          <div className="setting-link">
            <img src={IconImage2} alt="Icon 1" />
          </div>
          <div className="about-phone-text">
            <p >Storage</p>
            <p id="about2">147GB used/256GB</p>
          </div>
        </NavLink>

      </div>

      <div className="settings-links">

      <NavLink to="/about" className="setting-link" id="setting-id">
          Processor
          <div>Qualcomm</div>
        </NavLink>


        <NavLink to="/about" className="setting-link" id="setting-id">
          Model
          <div>HD1901</div>
        </NavLink>

        <hr className="line" />

        <NavLink to="/Ram" className="setting-link" id="setting-id">
          RAM <div>8.00GB </div>
        </NavLink>

        <NavLink to="/about" className="setting-link" id="setting-id">
          Android Version <div>12</div>
        </NavLink>

        <NavLink to="/version" className="setting-link">
          Version
        </NavLink>

        <NavLink to="/Legal" className="setting-link">
          Legal information
        </NavLink>

        <NavLink to="/Status" className="setting-link">
          Status
        </NavLink>

        <hr className="line" />
         
        <NavLink to="/Award" className="setting-link">
          Award  <p>OxygenOs Contributors</p>
        </NavLink>
       
        </div>
    </div>
  );
}

export default AboutPhone;
