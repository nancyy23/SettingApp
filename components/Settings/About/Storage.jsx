import React from 'react';
import { NavLink } from "react-router-dom";

const Storage = () => {
  const usedStoragePercentage = 60;

  return (
    <div className="storage-container">
   
      <div className="header">
      <NavLink to="../about" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>Storage</h1>
      </div>
      <div className="usage-container">
        <div className="usage-bar">
          <div className="usage-fill">
          </div>
          <div className="usage-text">
            {usedStoragePercentage}%
          </div>
        </div>
      </div>
      <div className="additional-text">
        <p className="grey-text">147GB Used</p>
        <p className="grey-text">256GB total</p>
      </div>

      <div className="features">

        <NavLink to="/" className="feature-link">
          <span className="feature-bullet" id ="feature1"></span> Images
          <p className="small-grey-text">6.47GB</p>
        </NavLink>

        <NavLink to="/" className="feature-link">
          <span className="feature-bullet" id ="feature2"></span> Images
          <p className="small-grey-text">6.47GB</p>
        </NavLink>

        <NavLink to="/" className="feature-link">
          <span className="feature-bullet"id ="feature3"></span> Images
          <p className="small-grey-text">6.47GB</p>
        </NavLink>

        <NavLink to="/" className="feature-link">
          <span className="feature-bullet"id ="feature4"></span> Images
          <p className="small-grey-text">6.47GB</p>
        </NavLink>

        <NavLink to="/" className="feature-link">
          <span className="feature-bullet"id ="feature5"></span> Images
          <p className="small-grey-text">6.47GB</p>
        </NavLink>

        <NavLink to="/" className="feature-link">
          <span className="feature-bullet"id ="feature6"></span> Images
          <p className="small-grey-text">6.47GB</p>
        </NavLink>

        </div>
    </div>
  );
};

export default Storage;
