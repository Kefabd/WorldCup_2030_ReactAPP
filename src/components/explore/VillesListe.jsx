import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive';


import React, { useState, useEffect } from 'react';
import villesData from "../../dependecies/api/Villes.json";
import monumentsData from "../../dependecies/api/Monuments.json";
import Card from "./Card";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import separatorDark from '../../dependecies/images/separatorDark.png';
import separatorLight from '../../dependecies/images/separatorLight.png';
import { useDarkMode } from "../header/useTheme";



function VillesListe({ countryId }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  // const cleanId = id.substring(1);
  // console.log(cleanId);
  const navigate = useNavigate();
  const villesDuPays = villesData.filter((ville) => ville.paysId == countryId);
  const [selectedVille, setSelectedVille] = useState(null);
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [showMonumentsPage, setShowMonumentsPage] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const style = {
    fontFamily: "'Cinzel Decorative', sans-serif",
    textAlign: 'center',
  };



  const handleSelectVille = (ville) => {
    setSelectedVille(ville);
    setSelectedMonument(null);
    setShowMonumentsPage(true);
    console.log(ville)
  };

  const handleSelectMonument = (monument) => {
    setSelectedMonument(monument);
  };

  const monumentsDeLaVille = selectedVille
    ? monumentsData.filter((monument) => monument.ville === selectedVille.nom)
    : [];
  const handleLocationClick = () => {
    console.log("Emplacement de ");
  };
  // const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const [slidePerPages, setSlidePerPages] = useState(4);
  const [hauteur, setHauteur] = useState('');

  useEffect(() => {
    function handleResize() {
      setSlidePerPages(getInitialSlidePerPages());
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    // return () => {
    //     window.removeEventListener("resize", handleResize);
    // };
  }, []);
  useEffect(() => {
    function handleHauteur() {
      setHauteur(getHauteur());
    }

    // Appel initial pour définir la hauteur au démarrage
    handleHauteur();

    window.addEventListener("resize", handleHauteur);

    // Assurez-vous de retirer l'écouteur d'événements lors du nettoyage
    return () => {
      window.removeEventListener("resize", handleHauteur);
    };
  }, []);

  function getInitialSlidePerPages() {
    if (window.innerWidth <= 500) {
      return 1;
    } else if (window.innerWidth <= 853) {
      return 2;
    } else if (window.innerWidth <= 1025) {
      return 3;
    } else {
      return 4;
    }

  }
  function getHauteur() {
    if (window.innerWidth <= 500) {
      return '300px';
    } else if (window.innerWidth <= 853) {
      return '330px';
    } else if (window.innerWidth <= 1025) {
      return '340px';
    } else {
      return '350px';
    }
  }
  console.log("Hauteur calculée :", hauteur);

  return (
    <>
      <div style={{ marginTop: '8%', width: '100%', minWidth: '80vw' }} className="container my-5 mx-auto">
        <h2 style={style}>Captivating Cities</h2>
        <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})` }}> </div>

        <Splide
          options={{
            type: 'loop',
            perPage: slidePerPages,
            perMove: 1,
            pagination: false,
            focus: 'center',
          }}
        >
          {villesDuPays.map((ville, index) => (
            <SplideSlide key={index}>
              <>
                <div onClick={() => handleSelectVille(ville)}>
                  <Card imageUrl={ville.Url} text={ville.nom} />
                </div>
              </>
            </SplideSlide>
          ))}
        </Splide>

      </div>
      {showMonumentsPage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1000',
          }}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            style={{
              background: 'rgba(218, 165, 32, 0.7)',
              padding: '20px',
              borderRadius: '10px',
              marginTop: '8%',
              width: '70%',
              height: '75%',
              position: 'relative',
              zIndex: '1'
            }}
          >
            <button
              onClick={() => setShowMonumentsPage(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                color: 'black',
              }}
            >
              &#10006;
            </button>

            <h2 style={style}>Monumental Beauty of {selectedVille.nom}</h2>

            <Slider
              dots
              infinite
              arrows={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={5000}
            >
              {monumentsDeLaVille.map((monument, index) => (
                <>

                  <div key={index} style={{ height: '100%', }}>
                    <div
                      style={{
                        backgroundImage: `url(${monument.image})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        borderRadius: '10px',
                        height: hauteur,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '20px',
                        color: 'white',
                      }}
                      className="hautaur">

                      <div style={{ textAlign: 'center', zIndex: 1, backgroundColor: 'rgb(0,0,0,0.7)', borderRadius: '10px' }}>
                        <h3>{monument.nom}</h3>
                        <div style={{ textAlign: 'center', zIndex: 1, backgroundColor: 'rgb(0,0,0,0.7)', borderRadius: '10px' }}>
                          <Link to={`/localisation/${monument.coord.latitude}/${monument.coord.longitude}`} >
                            <button className="location-button" onClick={handleLocationClick}>
                              <FaMapMarkerAlt style={{ fontSize: '35px' }} />
                            </button>
                          </Link>


                        </div>
                        <p>{monument.description}</p>
                      </div>

                    </div>

                  </div>

                </>
              ))}
            </Slider>


          </div >
        </div >

      )
      }

    </>
  )
}





export default VillesListe;
