import React, { useState, useEffect, useRef } from 'react';
import artData from '../../dependecies/api/artData.json';
import costumeData from '../../dependecies/api/costumeData.json';
import foodData from '../../dependecies/api/foodData.json';
import danceData from '../../dependecies/api/danceData.json';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaChevronUp } from 'react-icons/fa';
import separatorDark from '../../dependecies/images/separatorDark.png';
import separatorLight from '../../dependecies/images/separatorLight.png';
import { useDarkMode } from "../header/useTheme";

function ArtSection({ countryId,showMonumentsPage }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    if (showMonumentsPage) {
      Aos.refreshHard();
    } else {
      Aos.init();
    }
  }, [showMonumentsPage]);

  const style = {
    fontFamily: "'Cinzel Decorative', sans-serif",
    textAlign: 'center',
  };

  const [activeCategory, setActiveCategory] = useState('art');
  const data = getData(countryId, activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  const sectionRef = useRef(null);
  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="art-section" ref={sectionRef}>
      <h2 style={style}>Artistic Discovery</h2>
      <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})`}}> </div>
      

      <div className="category-buttons" >
        <button
          onClick={() => handleCategoryChange('art')}
          className={`bouttonArt ${activeCategory === 'art' ? 'active' : ''}`}
        >
          Art
        </button>
        <button
          onClick={() => handleCategoryChange('costumes')}
          className={`bouttonArt ${activeCategory === 'costumes' ? 'active' : ''}`}
        >
          Costumes
        </button>
        <button
          onClick={() => handleCategoryChange('food')}
          className={`bouttonArt ${activeCategory === 'food' ? 'active' : ''}`}
        >
          Food
        </button>
        <button
          onClick={() => handleCategoryChange('dance')}
          className={`bouttonArt ${activeCategory === 'dance' ? 'active' : ''}`}
        >
          Dance
        </button>
      </div>
      <div className="Grande">
        
<div className="Petite" id='Explore'>
      {data.map((category, index) => (
        <div className="art-category" key={index}>
          
          <div className="art-container" data-aos="fade-right">
            <h2>{category.name}</h2>
            <div className="separator"> </div>
            <p>{category.description}</p>
          </div>
          <img src={category.image} alt={category.name} data-aos="flip-left" />
          
        </div>
      ))}
      </div>
      </div>
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <FaChevronUp size={24} />
      </button>
      
    
    </div>
  );
}

function getData(countryId, category) {
  switch (countryId) {
    case '1':
      return category === 'art' ? artData.artCategories1 || [] : category === 'costumes' ? costumeData.costumeCategories1 || [] : category === 'food' ? foodData.foodCategories1 || [] : danceData.danceCategories1 || [];
    case '2':
      return category === 'art' ? artData.artCategories2 || [] : category === 'costumes' ? costumeData.costumeCategories2 || [] : category === 'food' ? foodData.foodCategories2 || [] : danceData.danceCategories2 || [];
    case '3':
      return category === 'art' ? artData.artCategories3 || [] : category === 'costumes' ? costumeData.costumeCategories3 || [] : category === 'food' ? foodData.foodCategories3 || [] : danceData.danceCategories3 || [];
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

export default ArtSection;
