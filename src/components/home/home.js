import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import morroco from '../../dependecies/images/sahara.png'
import portugal from '../../dependecies/images/portugal.png'
import spain from '../../dependecies/images/spain.png'
import stadiums from '../../dependecies/images/stadiums.png'
import attakafa from '../../dependecies/images/attakafa.png'
import { Link } from 'react-router-dom';
import separatorDark from '../../dependecies/images/separatorDark.png'
import separatorLight from '../../dependecies/images/separatorLight.png'
import logoFinal from '../../dependecies/images/logoSolo.png';
import logoTxt from '../../dependecies/images/logoText.png'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';




import AOS from 'aos';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useDarkMode } from "../header/useTheme";


export default function HomeMain() {
    const [showPays, setShowPays] = useState(false);
    const [selectedSpace, setSelectedSpace] = useState(null);
    const { darkMode, toggleDarkMode } = useDarkMode();



    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    
    const flags = {
        morroco: 'https://www.motosha.com/files/preview/1280x711/1958-moroccan-flag.jpg',
        spain: 'https://searchengineland.com/wp-content/seloads/2014/12/spain-flag-wavy-ss-1920.jpg',
        portugal: 'https://media.istockphoto.com/id/1221180082/photo/realistic-flag-waving-flag-of-the-country-of-the-european-union-3d-illustration.jpg?s=612x612&w=0&k=20&c=tuo_z1biBCcklV-DoHLC3mRWgikZKeI9-amOBJmU_s4='
    }

    const handleClick = (space) => {
        setSelectedSpace(space);
        setShowPays(true);
    }
 
    useEffect(() => {
       AOS.init();
    }, [])
    // useEffect(() => {
    //     AOS.refreshHard();
    //  }, [])
    




    return (
        <>
            <div className="firstBody">
                <div className="Row h-100 ">
                    {/* <div className="col-sm-12 col-md-3 text-center" data-aos="zoom-in-right" data-aos-duration="2000">
                        <img src={`${logoFinal}`} width='30%'/><br />
                    <img src={`${logoTxt}`} style={{ width: '25vw'}} />
                    </div> */}
                    <div className="text-center mt-4">
                        
                        <h1 className="my-4">Welcome to ANDALOUS CUP WebSite</h1>
                        <h1 className="my-4"> مرحبا   بكم   في   أندلس   كب   استمتعوا</h1>
                        <h5 className="my-5">EXPLORE, ENJOY ...</h5>
                        <div>
                            <ScrollLink to="Explore" duration={300} >
                             <div class="arrow arrow-first"></div>
                            <div class="arrow arrow-second"></div>
                        </ScrollLink>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
           
            <div className="secondBody ">
                <div className="container py-5 text-center mx-auto">
                    <h5>ANDALUS CUP</h5>
                    <h1 className="my-3">ANDALUS CUP EXPERIENCE</h1>
                    <h6 >
                        Open up a world of amazing experience and seamless solutions in three countries (Morroco, Spain, Portugal)
                        with ANDALUS CUP , your one-stop digital companion. Wheter you're visiting or living in one of the three contries, ANDALUS CUP
                        is your compass for cultures, your guide to events, your recommender of recreation, and your finder for everything.
                    </h6>
                    <button type="button" className="button my-3" data-aos="zoom-in-down" data-aos-duration="300"><a href="#Explore" className="text-decoration-none text-dark">Discover ANDALUS CUP</a></button>
                </div>
            </div>

            <div className="thirdBody text-center py-5"  id='Explore'>
                <div className="container my-4 mx-auto"  >
                    <h3>EXPLORE</h3>
                    <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})`}}> </div>

                    <h5>Discover the Andalous culture that unites Morocco, Spain, and Portugal.
                        which collectively organized the World Cup 2030. Discover the iconic cities, monuments captivating places that each country has to offer.
                    </h5>
                </div>
                <div className="Caroussel mx-auto" data-aos="zoom-in-up" data-aos-duration="1000">
                    <Carousel style={{ borderRadius: '50px', overflow: 'hidden', zIndex: 0 }} prevIcon={<FaArrowAltCircleLeft size="2em " color="black" />} nextIcon={<FaArrowAltCircleRight size="2em " color="black" />} >
                        <Carousel.Item>
                           
                            <Link to="/pays/3">
                                <img
                                    className="d-block w-100 "
                                    src={morroco}
                                    alt="Morocco"
                                />
                                <Carousel.Caption>
                                    <h4 className="text-light">Morocco</h4>
                                    <p className="text-light">Immerse yourself in the mesmerizing beauty of the Moroccan Sahara.</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item >
                            <Link to="/pays/1">
                                <img
                                    className="d-block w-100 "
                                    src={spain}
                                    alt="Spain"
                                    
                                />
                                <Carousel.Caption >
                                    <h4 className="text-light">Spain</h4>
                                    <p className="text-light">Embark on a journey through the vibrant atmosphere of Spain.</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/pays/2">
                                <img
                                    className="d-block w-100"
                                    src={portugal}
                                    alt="Portugal"
                                />
                                <Carousel.Caption>
                                    <h4 className="text-light">Portugal</h4>
                                    <p className="text-light">Experience the vibrant tapestry of Portuguese culture.</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

            <div className="BodyFour py-5 text-center" id="Spaces">

                <h3>Andalous Cup Spaces</h3>
                <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})`}}> </div>
                <h5>Explore Spaces made for you to enjoy the navigation</h5>
        
                <div className="row container mx-auto">

                    <div className="col-sm-12 col-md-6 my-3" onClick={() => handleClick("stadiums")}  data-aos="zoom-in"
                        data-aos-duration="1000">

                        <div class="effect5 mx-auto" data-aos="zoom-in" data-aos-duration="500">
                            <img src={`${stadiums}`} alt="" />
                            <div class="hoverElement"></div>
                            <h2>Stadiums Space</h2>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-6 my-3"  onClick={() => handleClick("attakafa")} data-aos="zoom-in" data-aos-duration="1000">

                        <div className="effect5 mx-auto" >
                            <img src={`${attakafa}`} />
                            <div class="hoverElement"></div>
                            <h2>Attakafa Space</h2>
                        </div>

                    </div>
                </div>

            </div>
            {showPays && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 100

                    }}

                >



                    <div
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        
                        style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            padding: '20px',
                            borderRadius: '10px',

                            width: '70%',
                            height: 'auto',
                            position: 'relative',
                            left: '12%',
                            top: '20%',
                            zIndex: 2
                        }}
                        className="animate-div"
                    >
                        <button
                            onClick={() => setShowPays(false)}
                            style={{
                                position: 'absolute',
                                top: '5px',
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
                        <div className="row mt-3">

                            <div className="col-sm-12 col-md-4 my-2">
                                <Link to={selectedSpace === "stadiums" ? "/stadium/Morocco" : (selectedSpace === "attakafa" && "/pays/3" )}>
                                    <div class="effect5 mx-auto pays">
                                        <img src={`${flags.morroco}`} alt="" />
                                        <div class="hoverElement"></div>
                                        <h2>Morroco</h2>
                                    </div>
                                </Link>
                            </div>


                            <div className="col-sm-12 col-md-4 my-2">
                                <Link to={selectedSpace === "stadiums" ? "/stadium/Spain" : (selectedSpace === "attakafa" && "/pays/1" )}>
                                    <div class="effect5 mx-auto pays">
                                        <img src={`${flags.spain}`} alt="" />
                                        <div class="hoverElement"></div>
                                        <h2>Spain</h2>
                                    </div>
                                </Link>
                            </div>


                            <div className="col-sm-12 col-md-4 my-2">
                                <Link to={selectedSpace === "stadiums" ? "/stadium/Portugal" : (selectedSpace === "attakafa" && "/pays/2" )}>
                                    <div class="effect5 mx-auto pays">
                                        <img src={`${flags.portugal}`} alt="" />
                                        <div class="hoverElement"></div>
                                        <h2>Portugal</h2>
                                    </div>
                                </Link>
                            </div>






                        </div>
                    </div>
                </div >
            )
            }


        </>

    )

}