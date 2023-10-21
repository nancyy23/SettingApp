import React, { useState } from 'react';

function Auto() {
  const [isAuto, setIsAuto] = useState(false);

  const toggleAuto = () => {
    setIsAuto(!isAuto);
  };

  return (
    <div>
      <div className="toggle-container">
        <div className="left-side">
          <p>Auto</p>
        </div>
        <div className="right-side">
          <label className="switch">
            <input type="checkbox" onClick={toggleAuto} checked={isAuto} />
            <span className={`slider ${isAuto ? 'round' : ''}`}></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Auto;
