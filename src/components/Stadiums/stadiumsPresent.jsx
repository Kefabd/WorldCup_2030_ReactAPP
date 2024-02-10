import React, { useEffect, useState } from "react";
import DataStadiums from '../../dependecies/api/stadium.json'
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useDarkMode } from "../header/useTheme";
import separatorDark from '../../dependecies/images/separatorDark.png'
import separatorLight from '../../dependecies/images/separatorLight.png'



export default function StadiumsPresent(props) {
    const [country, setCountry] = useState(props.pays);
    const [slidePerPages, setSlidePerPages] = useState(4);
    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        console.log('Pays:', props.pays);
        setCountry(props.pays);
    }, [props.pays])


    useEffect(() => {
        function handleResize() {
            setSlidePerPages(getInitialSlidePerPages());
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
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
    



    return (
        <>
            <div className=" stadiums text-center py-1" >
                <h1 >Stadiums</h1>
                <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})`}}> </div>
                <p>Discover The Stadiums made by <p style={{fontFamily: 'Cinzel Decorative, serif', fontSize: '2em', display: "inline"}}>{country}</p> </p>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: slidePerPages,
                        perMove: 1,
                        pagination: false,
                        focus: 'center'
                    }}
                    style={{
                        // marginTop: "4%",
                    }}
                >
                    {DataStadiums[country].map((stadium, index) => (
                        <SplideSlide key={index}>
                            <>
                                <div className="container my-5" key={index}  >
                                    <div className="cards" style={{ overflow: 'visible' }}>
                                        <div className="Card " style={{
                                            backgroundImage: `url(${stadium.pictures[0]})`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            borderRadius: '225px 225px 25px 25px',
                                        }}
                                        >

                                            <div className="text">
                                                <h1 className="stadiumName">{stadium.name}</h1>
                                                <p className="card-text">{stadium.city} City</p>

                                                <p className="card-text"> {stadium.nbrplaces} Places</p>
                                                <Link to={`/localisation/${stadium.coord.latitude}/${stadium.coord.longitude}`}>
                                                    Go to it
                                                </Link>

                                            </div>
                                        </div>

                                    </div>
                                </div >
                            </>
                        </SplideSlide>
                    ))}
                </Splide >
            </div>


        </>

    )

}