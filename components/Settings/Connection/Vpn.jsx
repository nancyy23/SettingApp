import React from 'react';
import { NavLink } from 'react-router-dom';

const Vpn = () => {
  return (
    <div className="container">
        <div className="header">
        <NavLink to="../Connections" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>VPN</h1>
      </div>
    <div className="vpn-container">
      <img src="vpn-image.png" alt="VPN" className="vpn-image" />
      <p className="vpn-text">No VPNs</p>
    </div>
    </div>
  );
}

export default Vpn;
