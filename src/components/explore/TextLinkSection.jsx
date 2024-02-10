import React from 'react';
import linkData from '../../dependecies/api/linkData.json';
import separatorDark from '../../dependecies/images/separatorDark.png';
import separatorLight from '../../dependecies/images/separatorLight.png';
import { useDarkMode } from "../header/useTheme";

const TextLinkSection = ({countryId}) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
    const data=getData(countryId);
    const style = {
        fontFamily: "'Cinzel Decorative', sans-serif",
        textAlign: 'center',
        fontSize:'auto',
      };
  return (
    <div className="text-link-section">
      <h2 style={style}>Useful Links</h2>
      <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})`}}> </div>
      <div className="text-link-items">
        {data.map((item, index) => (
          <div className="text-link-item" key={index} onClick={() => window.location.href = item.link}>
            <p style={style}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
function getData(countryId) {
    switch (countryId) {
      case '1':
        return linkData.link1 || [];
      case '2':
        return linkData.link2 || [];
      case '3':
        return linkData.link3 || [];
      default:
        return [];
    }
  }

export default TextLinkSection;
