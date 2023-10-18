import React from "react";
import { NavLink } from "react-router-dom";
import airplaneIcon from "./Settings/images/a.png";
import displayIcon from "./Settings/images/b.png";
import soundIcon from "./Settings/images/c.png";
import aboutIcon from "./Settings/images/d.png";
import connectionsIcon from "./Settings/images/e.png";
import UrlDisplay from "./Settings/UrlDisplay/UrlDisplay";

function SettingsPage() {
  const name = "M123423561r6";
  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="settings-links">
        
        <div className="link">
          <img src={require("./Settings/images/f.png")} alt="Your Alt Text" />
          <UrlDisplay name={name} url="https://www.oneplus.in/redcableclub" />
        </div>

        <hr className="line" />

        <NavLink to="/airplane" className="setting-link">
          <img src={airplaneIcon} alt="Airplane Mode" />
          Airplane Mode
        </NavLink>

        <NavLink to="/display" className="setting-link">
          <img src={displayIcon} alt="Display and Brightness" />
          Display and Brightness
        </NavLink>

        <NavLink to="/sound" className="setting-link">
          <img src={soundIcon} alt="Sound and Vibration" />
          Sound and Vibration
        </NavLink>

        <NavLink to="/about" className="setting-link">
          <img src={aboutIcon} alt="About Phone" />
          About Phone
        </NavLink>

        <NavLink to="/connections" className="setting-link">
          <img src={connectionsIcon} alt="Connections" />
          Connections
        </NavLink>

        <NavLink to="/connections" className="setting-link">
          <img src={connectionsIcon} alt="Connections" />
          Mobile Network
        </NavLink>

      </div>
    </div>
  );
}

export default SettingsPage;
