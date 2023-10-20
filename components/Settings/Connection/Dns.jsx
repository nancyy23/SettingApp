import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Dns = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const toggleVisibility = (toggleNumber) => {
    switch (toggleNumber) {
      case 1:
        setToggle1(!toggle1);
        break;
      case 2:
        setToggle2(!toggle2);
        break;
      case 3:
        setToggle3(!toggle3);
        break;
      default:
        break;
    }
  };

  return (
    <div>
        <div className="container">
      <div className="header">
      <NavLink to="../Connections" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>Private DNS</h1>
      </div>
      <div className="toggle-container">
        <div className="left-side">
          <p className="toggle-text">off</p>
        </div>
        <div className="right-side">
          <label className="switch">
            <input type="checkbox" onClick={() => toggleVisibility(1)} checked={toggle1} />
            <span className={`slider ${toggle1 ? 'round' : ''}`}></span>
          </label>
        </div>
      </div>

      <div className="toggle-container">
        <div className="left-side">
          <p className="toggle-text">Auto</p>
          <p className="nfc-text1">The default DNS will be automatically encrypted to enhance network security.</p>
        </div>
        <div className="right-side">
          <label className="switch">
            <input type="checkbox" onClick={() => toggleVisibility(2)} checked={toggle2} />
            <span className={`slider ${toggle2 ? 'round' : ''}`}></span>
          </label>
        </div>
      </div>

      <div className="toggle-container">
        <div className="left-side">
          <p className="toggle-text">Designated private DNS</p>
        </div>
        <div className="right-side">
          <label className="switch">
            <input type="checkbox" onClick={() => toggleVisibility(3)} checked={toggle3} />
            <span className={`slider ${toggle3 ? 'round' : ''}`}></span>
          </label>
        </div>
      </div>

      <p className="dns-text">Private DNS is a mechanism used for encrypted transfer. Once connected, it helps to enhance network security, but it may also lead to network latency and connection failure. If you select "Designated Private DNS", please pay attention to your network connections.</p>

    </div>
    </div>
  );
}

export default Dns;
