import React from 'react';

function UrlDisplay({ name, url }) {
  return (
    <div className="url-display">
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
      </p>
    </div>
  );
}

export default UrlDisplay;

