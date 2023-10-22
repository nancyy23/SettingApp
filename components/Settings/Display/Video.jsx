import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Video = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <NavLink to="../Display" className="arrow-icon link-no-underline">
            &#8592;
          </NavLink>
          <h1>Video color enhancer</h1>
        </div>

        <p className="dns-text">
          Video playback allows you to enjoy your favorite videos in high quality.
          Turn it on and start streaming now!
        </p>

        <hr className="line" />

        <div className="toggle-container">
          <div className="left-side">
            <p>Video Playback</p>
          </div>
          <div className="right-side">
            <label className="switch">
              <input type="checkbox" onClick={toggleVideo} checked={isVideoPlaying} />
              <span className={`slider ${isVideoPlaying ? 'round' : ''}`}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
