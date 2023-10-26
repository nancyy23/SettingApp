import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const VideoComponent = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
    updateVideoSetting(!isVideoPlaying);
  };

  const fetchVideoSetting = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/video-setting'); // Replace with your backend URL
      if (response.ok) {
        const data = await response.json();
        setIsVideoPlaying(data.enabled);
      } else {
        console.error('Failed to fetch video setting');
      }
    } catch (error) {
      console.error('Error while fetching video setting', error);
    }
  };

  const updateVideoSetting = async (enabled) => {
    try {
      const response = await fetch('http://localhost:4000/api/video-setting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enabled }),
      });
      if (response.ok) {
        const data = await response.json();
        setIsVideoPlaying(data.enabled);
      } else {
        console.error('Failed to update video setting');
      }
    } catch (error) {
      console.error('Error while updating video setting', error);
    }
  };

  useEffect(() => {
    fetchVideoSetting();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <NavLink to="../Display" className="arrow-icon link-no-underline">
          &#8592;
        </NavLink>
        <h1>Video color enhancer</h1>
      </div>

      <p className="dns-text">
        Video playback allows you to enjoy your favorite videos in high quality. Turn it on and start streaming now!
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
  );
};

export default VideoComponent;
