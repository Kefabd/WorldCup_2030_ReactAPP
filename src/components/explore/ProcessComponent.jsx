import React, { useState, useEffect } from 'react';
import timeData from "../../dependecies/api/timeData.json";
import separatorDark from '../../dependecies/images/separatorDark.png';
import separatorLight from '../../dependecies/images/separatorLight.png';
import { useDarkMode } from "../header/useTheme";

function ProcessComponent({countryId}) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  const style = {
    fontFamily: "'Cinzel Decorative', sans-serif",
    textAlign: 'center',
  };
  const data=getData(countryId);

  return (
    <div>
      <h2 style={style}>Historical Narratives</h2>
      <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})`}}> </div>
      <div id="progress-bar-container">
        <ul>
          {data.map((stepData, index) => (
            <li key={index + 1} className={`step step${index + 1 < 10 ? `0${index + 1}` : index + 1} ${activeStep === index + 1 ? 'active' : ''}`} onClick={() => handleStepClick(index + 1)}>
              <div className="step-inner">{stepData.year}</div>
            </li>
          ))}
        </ul>
        <div id="line">
          <div id="line-progress" style={{ width: `${((activeStep -1) /4)*100 }%` }}></div>
        </div>
      </div>

      <div id="progress-content-section">
        {data.map((stepData, index) => (
          <div key={index + 1} className={`section-content ${index + 1 === activeStep ? 'active' : ''}`}>
            <h2>{stepData.title}</h2>
            <p>{stepData.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function getData(countryId) {
  switch (countryId) {
    case '1':
      return timeData.time1 || [];
    case '2':
      return timeData.time2 || [];
    case '3':
      return timeData.time3 || [];
    default:
      return [];
  }
}

function getPays(countryId) {
  switch (countryId) {
    case '1':
      return 'Spain';
    case '3':
      return 'Morocco';
    case '2':
      return 'Portugal';
    default:
      return '';
  }
}


export default ProcessComponent;
