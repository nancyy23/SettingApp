import React from 'react';

const AboutPhone = () => {
  return (
    <div className="about-phone-container">
      <div className="about-phone-header">
        <div className="arrow-icon">&#8592;</div>
        <h1>About Phone</h1>
      </div>

      <div className="about-phone-section">
        <div className="about-phone-icon">
          <img src="icon1.png" alt="Icon 1" />
        </div>
        <div className="about-phone-text">
          <h2>Feature 1</h2>
          <p>Description of Feature 1 goes here.</p>
        </div>
      </div>

    </div>
  );
}

export default AboutPhone;
