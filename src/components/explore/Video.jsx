// Video.jsx
import React from 'react';
import video1 from '../../dependecies/videos/pays1.mp4';
import video3 from '../../dependecies/videos/pays3.mp4';
import video2 from '../../dependecies/videos/pays2.mp4';

function Video({ countryId }) {
  return (
    <>
      <div className="hero-container">
        <video src={getVideoSource(countryId)} autoPlay loop muted />
        <div className="text-overlay">
          <h1>Discover the Richness of {getPays(countryId)}</h1>
          <p>A nation abundant in culture, history, and diversity.</p>
        </div>
      </div>
    </>
  );
}

function getVideoSource(countryId) {
  // Return the appropriate video source based on countryId
  switch (countryId) {
    case '1':
      return video1;
      case '2':
      return video2;
    case '3':
      return video3;
    default:
      return ''; // Handle default case or provide a default video source
  }
}

function getPays(countryId) {
  // Return the appropriate country name based on countryId
  switch (countryId) {
    case '1':
      return 'Spain';
      case '2':
      return 'Portugal';
    case '3':
      return 'Morocco';
    default:
      return ''; // Handle default case or provide a default country name
  }
}

export default Video;
