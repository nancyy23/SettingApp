import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SoundVibration = () => {
  const [soundLevel, setSoundLevel] = useState(50);
  const [vibrationLevel, setVibrationLevel] = useState(50);
  const [mediaMute, setMediaMute] = useState(false); 
  const [notificationsMute, setNotificationsMute] = useState(false);

  const handleMediaToggle = () => {
    setMediaMute(!mediaMute);
  };

  const handleNotificationsToggle = () => {
    setNotificationsMute(!notificationsMute);
  };

  const ringtone = (event) => {
    setVibrationLevel(event.target.value);
  };

  const alarm = (event) => {
    setVibrationLevel(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Sound & Vibration</h1>
      </div>
      <div className="setting">
        <div className="displays-links">
          <NavLink to="/sound1" className="display-link" id="setting-id">
            Live Caption
          </NavLink>
          <NavLink to="/sound2" className="display-link" id="setting-id">
            Do not Disturb
          </NavLink>
        </div>

        <hr className="line" />

        <p className="volume">Media</p>
        <div className="row-length-range">
          <input
            type="range"
            min="0"
            max="100"
            value={soundLevel}
            onChange={(event) => setSoundLevel(event.target.value)}
            style={{ width: "100%", height:"3px" }}
          />
        </div>

        <p className="vibration-intensity">Ringtone</p>
        <div className="row-length-range">
          <input
            type="range"
            min="0"
            max="100"
            value={vibrationLevel}
            onChange={ringtone}
            style={{ width: "100%" , height:"3px" }}
          />
        </div>

        <p className="vibration-intensity">Notifications</p>
        <div className="row-length-range">
          <input
            type="range"
            min="0"
            max="100"
            value={vibrationLevel}
            onChange={(event) => setVibrationLevel(event.target.value)}
            style={{ width: "100%" , height:"3px"}}
          />
        </div>

        <p className="vibration-intensity">Alarm</p>
        <div className="row-length-range">
          <input
            type="range"
            min="0"
            max="100"
            value={vibrationLevel}
            onChange={alarm}
            style={{ width: "100%" , height:"3px"}}
          />
        </div>

        <hr className="line" />

        <div className="toggle-switch">
          <p className="toggle-label">Media Volume Muted</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={notificationsMute}
              onChange={handleNotificationsToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="displays-links">
          <NavLink to="/sound1" className="display-link" id="setting-id">
            Ringtone
          </NavLink>
          <NavLink to="/sound2" className="display-link" id="setting-id">
            Message tone
          </NavLink>
          <NavLink to="/sound3" className="display-link" id="setting-id">
            Notification sound
          </NavLink>

          <hr className="line" />

          <div className="toggle-switch">
            <p className="toggle-label">Vibrate on ring</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={mediaMute}
                onChange={handleMediaToggle}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <NavLink to="/vibration1" className="display-link" id="setting-id">
            Vibration Intensity
          </NavLink>

          <NavLink to="/vibration3" className="display-link" id="setting-id">
            Haptic and tones
          </NavLink>

          <hr className="line" />

          <NavLink to="/vibration3" className="display-link" id="setting-id">
            Dolby Atoms
          </NavLink>
          <NavLink to="/moreSound" className="display-link" id="setting-id">
            Advanced settings
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SoundVibration;
