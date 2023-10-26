import React from 'react';
import { NavLink } from 'react-router-dom';

const Legal = () => {
  return (

    <div className="device-container">
      <div className="header">
      <NavLink to="../about" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>Legal Information</h1>
      </div>

      <div className="legal-content">
        <div className="privacy-section">
          <h2>Privacy Notice</h2>
          <p>
            In addition to this Privacy Notice, specific privacy notices might apply depending on the Services used. We will, in each case, provide you with the applicable privacy notice.
          </p>
        </div>

        <div className="general-provisions-section">
          <h2>General Provisions</h2>

          <div>
            <h3>Responsibilities</h3>
            <p>
              This Privacy Policy explains how OnePlus Technology India Pvt. Ltd., along with its affiliates (hereinafter referred to as “we”, “us” or “OnePlus”), collects, uses, shares, transfers and protects the personal data of the user (hereinafter referred to as “you”) and the corresponding rights of the user. Personal data refers to any information related to a natural person that has been identified or is identifiable. [1] Within the meaning applicable law, we will act as a data controller when we process your personal data.
            </p>
          </div>

          <div>
            <h3>How We Collect Personal Data and What Types of Personal Data We Collect</h3>
            <p>
              The term personal data is broadly defined and means any information relating to an identified or identifiable individual. This means that not only the data that, for example, identifies you directly, such as your name or address, is personal data but also other data, which when combined with other information accessible to us, enables us to link that data to you, for example, an IP address.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;
