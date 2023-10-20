import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Nfc = () => {
  const [isNfcEnabled, setIsNfcEnabled] = useState(false);

  const toggleNfc = () => {
    setIsNfcEnabled(!isNfcEnabled);
  };

  return (
    <div className="container">
      <div className="header">
      <NavLink to="../Connections" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>NFC</h1>
      </div>
    <div className="nfc-container">
      <div className="left-side">
        <p className="nfc-text">NFC</p>
        <p className="nfc-text1">Tap another NFC device with your phone to exchange data with it.</p>
      </div>
      <div className="right-side">
        <label className="switch">
          <input type="checkbox" onClick={toggleNfc} />
          <span className={`slider ${isNfcEnabled ? 'round' : ''}`}></span>
        </label>
      </div>
    </div>
    </div>
  );
}

export default Nfc;
